import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col p-5 gap-5 bg-[#F2F5F8]">
        <div className="flex flex-row items-center gap-2">
          <Link href="/terms-of-service" className="text-xs sm:text-sm text-[#808496]">
            이용약관
          </Link>
          <span className="text-xs sm:text-sm text-[#808496]">/</span>
          <Link href="/privacy-policy" className="text-xs sm:text-sm text-[#808496]">
            개인정보 처리방침
          </Link>
        </div>

        <div>
          <p className="text-xs sm:text-sm text-center text-[#808496]">
            © 2021-2024. 바람의나라 도톨. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
