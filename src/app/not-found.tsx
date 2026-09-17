import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#080d14] px-6 text-slate-100">
      <section className="glass-card w-full max-w-lg rounded-2xl p-8 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#2bccaf]">404</p>
        <h1 className="text-3xl font-semibold">ไม่พบหน้าที่คุณกำลังค้นหา</h1>
        <p className="mt-4 text-slate-400">ลิงก์นี้อาจถูกย้ายหรือลบไปแล้ว</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#2bccaf] px-5 py-3 font-semibold text-slate-950 transition hover:bg-[#48e5c8]"
        >
          กลับสู่หน้าหลัก
        </Link>
      </section>
    </main>
  );
}
