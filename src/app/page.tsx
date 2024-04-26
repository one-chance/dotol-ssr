/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-col border rounded p-4 gap-2">
        <span className="text-lg font-medium">04.25 개발자 노트</span>

        <span>
          04.18 환골탈태 업데이트로 많은 데이터가 변경되어 도톨도 상당 부분 교체가 필요했습니다.
          <br />
          그래서 겸사겸사 개발과 관련된 기술적인 부분도 교체하고자 도톨v3를 새로 만들었습니다.
          <br />
          괴유 업데이트가 나왔을 때부터 준비했지만, 작업량이 많아 일부 미완성 상태로 먼저 공개합니다.
          <br />
          추후 데이터베이스가 변경되면 부득이하게 모든 회원의 비밀번호가 초기화가 될 수 있습니다.
          <br />
          <br />
          이번 개편의 주요 목적은 환골탈태 업데이트에 대한 정확한 정보를 제공하는 것입니다.
          <br />
          그래서 강화 메뉴를 새로 만들고, 기존에 애매하게 위치했던 기능들도 재배치했습니다.
          <br />
          <br />
          [도감]은 변경된 장비(일반, 환수)와 추가된 장비(영옥)의 정보가 반영되고,
          <br />
          장비가 세분화되어 한벌 효과에 포함되는 장비를 알 수 있게 변경했습니다.
          <br />
          장비 마법과 특수 마법을 나누어 고유/한벌/출세가도/고고학 마법을 추가했습니다.
          <br />
          환수 시동 정보도 업데이트 될 예정입니다.
          <br />
          <br />
          [강화]는 장비 재련(제작/강화 재료), 장비 연마(연마한 장비 능력치) 정보가 반영되고,
          <br />
          신체 강화(변경된 비약 개수, 장비별 보너스 등급)이 업데이트 되었습니다.
          <br />
          변경된 신수 유물(신성한 유물, 장갑6~9성, 보주4~5성) 정보도 반영되었습니다.
          <br />
          <br />
          [콘텐츠]는 새로 추가된 업적인 가이드, 레이드 정보를 반영하였습니다.
          <br />
          <br />
          [계산기]는 연마 재료 계산기가 추가되어 필요한 재료를 바로 알 수 있고,
          <br />
          연마 분해 계산기가 추가되어 분해 시 얻는 연마석 개수를 알 수 있습니다.
          <br />
          <br />
          일부 기능은 작동하지 않는 것도 있으며 순차적으로 처리할 예정입니다.
          <br />
          관련 문의는 1:1 문의 버튼을 이용해주세요.
        </span>
      </div>

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
