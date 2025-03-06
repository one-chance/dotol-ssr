import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-col border rounded max-h-[480px] overflow-y-auto scrollbar-hidden p-4 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">05.13 개발자 노트</span>
          <span>
            05.02에 막아두었던 룩북 기능을 정상화하고 치장 목록, 태닝 기능을 하나로 통합하였습니다.
            <br />
            현재는 치장 장비와 일반 장비가 분리되어 있어서 각각의 영역에서만 착용이 가능합니다.
            <br />
            장비 착용은 최대 10개까지 가능하며 그 이후로는 착용된 장비를 해제해야 가능합니다.
            <br />
            그리고 추가적인 수정이 필요해서 추후 작업을 진행하는 동안 기능이 중단될 수 있습니다.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">05.02 개발자 노트</span>
          <span>
            05.02 바람의상실 업데이트로 바람 측에서 갑자기 아바타 렌더링 기능을 변경하였네요.
            <br />
            <span className="line-through">
              그래서 치장, 룩북 메뉴에서 아바타를 막아두고 저녁에 수정해서 반영하도록 하겠습니다.
            </span>
            <br />
            겸사겸사 다른 작업도 같이 진행한 후에 배포할 계획이라 며칠 더 소요 될 예정입니다.
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-medium">04.30 개발자 노트</span>
          <span>
            04.18 환골탈태 업데이트로 많은 데이터가 변경되어 도톨도 상당 부분 교체가 필요했습니다.
            <br />
            그래서 겸사겸사 사이트 내부 기술 구성도 변경하고자 도톨v3를 새로 만들었습니다.
            <br />
            추후 데이터베이스가 변경되면 부득이하게 모든 회원의 비밀번호가 초기화가 될 수 있습니다.
            <br />
            괴유 업데이트가 나왔을 때부터 준비했지만, 작업량이 많아 일부 미완성 상태로 먼저 공개합니다.
            <br />
            <br />
            [도감]은 변경된 장비(일반, 환수)와 추가된 장비(영옥)의 정보가 반영되고,
            <br />
            장비가 세분화되어 한벌 효과에 포함되는 장비를 알 수 있게 변경했습니다.
            <br />
            장비 마법과 특수 마법을 나누어 고유/한벌/출세가도/고고학 마법을 추가했습니다.
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
          </span>
        </div>
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

      <div className="flex flex-row flex-wrap gap-5">
        <div className="flex flex-col flex-1 border rounded gap-2.5 p-4">
          <span className="text-lg font-semibold">3월 신규 치장</span>

          <div className="flex flex-col gap-2">
            <span className="font-medium">멋진의상재봉틀 - 봄의청사 의상</span>
            <div className="flex flex-row flex-wrap justify-center items-end min-w-[304px]">
              <Image unoptimized src="/1.gif" alt="costume1" width={180} height={200} />
              <Image unoptimized src="/2.gif" alt="costume2" width={180} height={200} />
            </div>

            <span className="font-medium">멋진의상재봉틀 - 바람미니미도적/주술사</span>
            <div className="flex flex-row flex-wrap justify-center items-end min-w-[304px]">
              <Image unoptimized src="/3.gif" alt="costume1" width={120} height={130} />
              <Image unoptimized src="/4.gif" alt="costume2" width={200} height={180} />
            </div>

            <span className="font-medium"> 의상수선가위 - 심플화이트후드/모던프레피셔츠</span>
            <div className="flex flex-row flex-wrap justify-center items-end min-w-[304px]">
              <Image unoptimized src="/5.gif" alt="costume3" width={154} height={180} />
              <Image unoptimized src="/6.gif" alt="costume4" width={154} height={180} />
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
