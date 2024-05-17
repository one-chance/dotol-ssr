import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col grow justify-center items-center px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-3xl font-bold">페이지를 찾을 수 없습니다.</span>

      <Link href="/" className="text-lg text-gray-500 underline underline-offset-4">
        메인으로
      </Link>
    </div>
  );
}
