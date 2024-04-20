'use client';

import { useState } from 'react';

const LUXURY_DATA = {
  1: {
    name: '마법학교',
    images: ['1.png'],
    parts: [
      '마법학교소녀헤어',
      '마법학교소년헤어',
      '마법학교지팡이',
      '마법학교소녀의상',
      '마법학교소년의상',
      '마법학교가방',
      '마법학교마법책',
      '마법학교모자',
    ],
  },
  2: {
    name: '은하요술사',
    images: ['2.png'],
    parts: [
      '은하수요술사모자',
      '은하수요술봉',
      '은하수요술사의상(남)',
      '은하수요술사의상(여)',
      '봄날벚꽃참새루루',
      '복슬복슬토끼베베',
      '은하수별자국',
      '럭키별장식',
    ],
  },
  3: {
    name: '풀잎',
    images: ['3.png'],
    parts: [
      '풀잎소녀헤어',
      '풀잎소년헤어',
      '풀잎민들레',
      '풀잎바늘콕',
      '풀잎소녀의상',
      '풀잎소년의상',
      '풀잎꽃장식',
      '풀잎행운햄찌',
      '풀잎민들레모자',
      '풀잎민들레머리띠',
    ],
  },
  4: {
    name: '악마사냥꾼',
    images: ['4.png'],
    parts: [
      '악마사냥꾼의뿔',
      '악마사냥꾼의낫',
      '악마사냥꾼의상(남)',
      '악마사냥꾼의상(여)',
      '심판의모래시계',
      '복수자의망토',
      '퇴마의기운',
      '악마사냥꾼의증표',
    ],
  },
  5: {
    name: '은빛미호',
    images: ['5.png'],
    parts: [
      '은빛미호의귀',
      '은빛미호의영혼',
      '은빛미호의상(남)',
      '은빛미호의상(여)',
      '은빛미호',
      '은빛미호의긴꼬리',
      '은빛미호의짧은꼬리',
      '은빛미호의기운',
      '은빛미호의장식',
    ],
  },
  6: {
    name: '시간여행자',
    images: ['6.png'],
    parts: [
      '시간여행자머리장식(남)',
      '시간여행자머리장식(여)',
      '시간여행자차원봉',
      '시간여행자의상(남)',
      '시간여행자의상(여)',
      '시간여행자드론',
      '시간여행자망토(남)',
      '시간여행자망토(여)',
      '시간여행자비행선',
    ],
  },
  7: {
    name: '월야산신',
    images: ['7.png'],
    parts: [
      '월야산신갓',
      '월야산신외투',
      '월야산신부채(양)',
      '월야산신부채(음)',
      '월야산신의상(남)',
      '월야산신의상(여)',
      '월야산신도깨비불',
      '월야산신밤호랑이',
    ],
  },
  8: {
    name: '인형술사',
    images: ['8.png'],
    parts: [
      '인형술사다이아모자',
      '인형술사하트모자',
      '인형술사요술가위',
      '인형술사의상(남)',
      '인형술사의상(여)',
      '인형술사토끼인형',
      '인형술사포근꼬리',
      '인형술사하양꼬리',
      '인형술사요술토끼',
    ],
  },
  9: {
    name: '잔혹천사',
    images: ['9.png'],
    parts: [
      '잔혹천사가면',
      '잔혹천사리본',
      '잔혹천사장미활',
      '잔혹천사의상(남)',
      '잔혹천사의상(여)',
      '잔혹천사뼈날개',
      '잔혹천사스컬하트',
      '잔혹천사하트안대',
    ],
  },
  10: {
    name: '천상의심포니',
    images: ['10.png'],
    parts: [
      '천상의심포니모자',
      '천상의심포니지휘봉',
      '천상의심포니의상(남)',
      '천상의심포니의상(여)',
      '천상의심포니관현악쥐',
      '천상의심포니선율',
      '천상의심포니타악쥐',
    ],
  },
  11: {
    name: '달빛마중',
    images: ['11-1.gif', '11-2.gif'],
    parts: [
      '달빛마중머리띠',
      '달빛마중장우산',
      '달빛마중청사초롱',
      '달빛마중수묵도포',
      '달빛마중수묵매화',
      '달빛마중토끼가방',
      '달빛마중산군',
      '달빛마중깡충귀',
    ],
  },
  12: {
    name: '생명의바다',
    images: ['12-1.gif', '12-2.gif'],
    parts: [
      '생명의바다고래물결',
      '생명의바망원경',
      '생명의바다왕관',
      '생명의바다의상(남)',
      '생명의바다의상(여)',
      '생명의바다작은친구',
      '생명의바다햇살파도',
    ],
  },
  13: {
    name: '오방지신',
    images: ['13.gif'],
    parts: [
      '오방지신백호첨익',
      '오방지신오행봉잠',
      '오방지신의상(남)',
      '오방지신의상(여)',
      '오방지신주삭비상',
      '오방지신청룡강림',
      '오방지신현무가호',
    ],
  },
};

export default function CostumeListPage() {
  const [series, setSeries] = useState<keyof typeof LUXURY_DATA>(13);
  const names = Object.values(LUXURY_DATA).map(item => item.name);

  const selectSeries = (_series: number) => {
    setSeries(_series as keyof typeof LUXURY_DATA);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10">
      <span className="text-xl sm:text-2xl font-semibold">명품의 목록</span>

      <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 border rounded p-4 mt-10">
        {names.map((item: string, index: number) => (
          <button
            key={item}
            type="button"
            className={`outline-none ${series === index + 1 && 'text-red-500'}`}
            onClick={() => selectSeries(index + 1)}
          >
            {index + 1}기 {item}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-5 mt-1">
        <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 border rounded p-2.5">
          {LUXURY_DATA[series as keyof typeof LUXURY_DATA].parts.map((item: string) => (
            <span key={item} className="text-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-row justify-center items-center rounded">
          {LUXURY_DATA[series as keyof typeof LUXURY_DATA].images.map((img: string) => (
            <img key={img} alt="luxury" src={`https://asset.dotols.com/image/luxury/${img}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
