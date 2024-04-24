/* eslint-disable @next/next/no-img-element */
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
        <div className="flex flex-col flex-1 border rounded gap-2.5 p-4">
          <span className="text-lg font-semibold">4월 신규 치장</span>

          <div className="flex flex-col gap-2">
            <span className="font-medium">멋진의상재봉틀 - 들꽃나그네 의상</span>
            <div className="flex flex-row flex-wrap justify-center items-end">
              <img src="/1.gif" alt="costume1" width={180} height={200} />
              <img src="/2.gif" alt="costume2" width={180} height={200} />
            </div>

            <span className="font-medium"> 의상수선가위 - 헬로캠퍼스 의상</span>
            <div className="flex flex-row flex-wrap justify-center items-end">
              <img src="/3.gif" alt="costume3" width={160} height={160} />
              <img src="/4.gif" alt="costume4" width={160} height={160} />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 border rounded gap-4 p-4">
          <span className="text-lg font-semibold">게시판 최신글</span>

          <div className="flex flex-1 justify-center items-center">
            <span>데이터를 복구 중입니다.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
