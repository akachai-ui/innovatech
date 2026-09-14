const fs = require('fs');
const zlib = require('zlib');
const { execSync } = require('child_process');

function crc32(buf) {
  let crc = -1;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (-(crc & 1) & 0xedb88320);
    }
  }
  return (crc ^ -1) >>> 0;
}

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeAndData = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData), 0);
  return Buffer.concat([len, typeAndData, crc]);
}

function encodePNG(width, height, rgbaBuffer) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  
  const ihdrChunk = createChunk('IHDR', ihdr);
  
  const scanlines = Buffer.alloc(height * (1 + width * 4));
  let srcOffset = 0;
  let dstOffset = 0;
  for (let y = 0; y < height; y++) {
    scanlines[dstOffset++] = 0;
    for (let x = 0; x < width; x++) {
      scanlines[dstOffset++] = rgbaBuffer[srcOffset++];
      scanlines[dstOffset++] = rgbaBuffer[srcOffset++];
      scanlines[dstOffset++] = rgbaBuffer[srcOffset++];
      scanlines[dstOffset++] = rgbaBuffer[srcOffset++];
    }
  }
  
  const compressed = zlib.deflateSync(scanlines);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));
  
  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function readBmp(bmpPath) {
  const buf = fs.readFileSync(bmpPath);
  const dataOffset = buf.readUInt32LE(10);
  const width = buf.readInt32LE(18);
  const rawHeight = buf.readInt32LE(22);
  const isTopDown = rawHeight < 0;
  const height = Math.abs(rawHeight);
  const bpp = buf.readUInt16LE(28);
  const rowSize = Math.floor((bpp * width + 31) / 32) * 4;
  
  const rgba = Buffer.alloc(width * height * 4);
  
  for (let y = 0; y < height; y++) {
    const srcY = isTopDown ? y : (height - 1 - y);
    const rowOffset = dataOffset + srcY * rowSize;
    for (let x = 0; x < width; x++) {
      const srcIdx = rowOffset + x * (bpp / 8);
      const dstIdx = (y * width + x) * 4;
      const b = buf[srcIdx];
      const g = buf[srcIdx + 1];
      const r = buf[srcIdx + 2];
      const a = (bpp === 32) ? buf[srcIdx + 3] : 255;
      rgba[dstIdx] = r;
      rgba[dstIdx + 1] = g;
      rgba[dstIdx + 2] = b;
      rgba[dstIdx + 3] = a;
    }
  }
  
  return { width, height, rgba };
}

function floodFillOuterWhite(rgba, width, height, tolerance = 240) {
  const visited = new Uint8Array(width * height);
  const queue = [];
  
  function isWhite(x, y) {
    const idx = (y * width + x) * 4;
    const r = rgba[idx];
    const g = rgba[idx + 1];
    const b = rgba[idx + 2];
    return r >= tolerance && g >= tolerance && b >= tolerance;
  }
  
  for (let x = 0; x < width; x++) {
    if (isWhite(x, 0)) { queue.push(x, 0); visited[0 * width + x] = 1; }
    if (isWhite(x, height - 1)) { queue.push(x, height - 1); visited[(height - 1) * width + x] = 1; }
  }
  for (let y = 0; y < height; y++) {
    if (isWhite(0, y) && !visited[y * width + 0]) { queue.push(0, y); visited[y * width + 0] = 1; }
    if (isWhite(width - 1, y) && !visited[y * width + (width - 1)]) { queue.push(width - 1, y); visited[y * width + (width - 1)] = 1; }
  }
  
  let head = 0;
  while (head < queue.length) {
    const x = queue[head++];
    const y = queue[head++];
    const idx = (y * width + x) * 4;
    rgba[idx + 3] = 0;
    
    const neighbors = [
      [x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nIdx = ny * width + nx;
        if (!visited[nIdx] && isWhite(nx, ny)) {
          visited[nIdx] = 1;
          queue.push(nx, ny);
        }
      }
    }
  }
}

// 1. chicai
execSync('sips -s format bmp public/images/chicailogo.jpg --out /tmp/chicai.bmp');
const chicai = readBmp('/tmp/chicai.bmp');
floodFillOuterWhite(chicai.rgba, chicai.width, chicai.height, 235);
fs.writeFileSync('public/images/chicailogo.png', encodePNG(chicai.width, chicai.height, chicai.rgba));

// 2. swu
execSync('sips -s format bmp public/images/Srinakharinwirot_Logo.png --out /tmp/swu.bmp');
const swu = readBmp('/tmp/swu.bmp');
floodFillOuterWhite(swu.rgba, swu.width, swu.height, 245);
fs.writeFileSync('public/images/Srinakharinwirot_Logo.png', encodePNG(swu.width, swu.height, swu.rgba));

// 3. realline
execSync('sips -s format bmp public/images/realline-network.png --out /tmp/realline.bmp');
const realline = readBmp('/tmp/realline.bmp');
floodFillOuterWhite(realline.rgba, realline.width, realline.height, 240);
fs.writeFileSync('public/images/realline-network.png', encodePNG(realline.width, realline.height, realline.rgba));

// 4. cci
execSync('sips -s format bmp public/images/LOGOCCI.png --out /tmp/cci.bmp');
const cci = readBmp('/tmp/cci.bmp');
for (let i = 0; i < cci.width * cci.height; i++) {
  const idx = i * 4;
  const r = cci.rgba[idx];
  const g = cci.rgba[idx + 1];
  const b = cci.rgba[idx + 2];
  if (r > 240 && g > 240 && b > 240) {
    cci.rgba[idx + 3] = 0;
  }
}
fs.writeFileSync('public/images/LOGOCCI.png', encodePNG(cci.width, cci.height, cci.rgba));

// 5. warashop - clean transparent background
execSync('sips -s format bmp public/images/warashoplogo.png --out /tmp/wara.bmp');
const wara = readBmp('/tmp/wara.bmp');
for (let i = 0; i < wara.width * wara.height; i++) {
  const idx = i * 4;
  const r = wara.rgba[idx];
  const g = wara.rgba[idx + 1];
  const b = wara.rgba[idx + 2];
  const brightness = (r + g + b) / 3;
  if (brightness > 230) {
    wara.rgba[idx + 3] = 0;
  }
}
fs.writeFileSync('public/images/warashoplogo.png', encodePNG(wara.width, wara.height, wara.rgba));

console.log('ALL 5 LOGOS SAVED CLEANLY AS TRANSPARENT PNGs!');
