export default function Home() {
  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-col border rounded p-4">Home</div>

      <div className="text-center">
        <a
          href="https://open.kakao.com/me/dotols"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded text-white bg-[#6877FF] font-bold"
        >
          1:1 문의
        </a>
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex flex-col flex-1 border rounded gap-4 p-4">
          <span className="font-semibold">4월 신규 치장</span>
        </div>
        <div className="flex flex-col flex-1 border rounded gap-4 p-4">
          <span className="font-semibold">게시판 최신글</span>
        </div>
      </div>
    </div>
  );
}
