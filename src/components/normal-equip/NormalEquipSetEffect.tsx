/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { EQUIP_SET_EFFECTS } from '@/contants/normal-equip';
import { Select } from '@/components';

const SUBJECTS = [
  '용',
  '북방',
  '환웅',
  '중국',
  '일본',
  '타계',
  '백제/황산벌',
  '전우치/구미호',
  '흉수계/봉래산',
  '격전지/전장',
  '생산',
  '귀문',
  '기타',
];
type Subjects = (typeof SUBJECTS)[number];

type Effect = {
  index: number;
  name: string;
  type: string;
};

type NormalSetEffectData = {
  [key: string]: {
    [key: string]: string[];
  };
};

export default function NormalEquipSetEffect({ data }: { data: NormalSetEffectData }) {
  const [subject, setSubject] = useState<Subjects>('종류');
  const [effect, setEffect] = useState<Effect>({
    index: 0,
    name: '',
    type: '',
  });

  const DATA = data[effect.name];
  const effectList = EQUIP_SET_EFFECTS.filter(item => item.type === subject);

  const selectSubject = (_subject: string) => {
    setSubject(_subject as Subjects);
    setEffect({ index: 0, name: '', type: '' });
  };

  const selectEffect = (_effect: Effect) => {
    setEffect(_effect);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">한벌 효과</span>
        <Select className="w-[140px]" name="종류" items={SUBJECTS} onSelect={selectSubject} />
      </div>

      <div className="flex flex-row flex-wrap items-start gap-2 content-start border rounded p-4 min-h-40">
        {effectList?.map(effects => (
          <button
            key={effects.index}
            type="button"
            onClick={() => selectEffect(effects)}
            className={`outline-none text-sm sm:text-base ${effects.index === effect.index && 'text-red-500'}`}
          >
            [{effects.name}]
          </button>
        ))}
      </div>

      {effect.name !== '' && (
        <div className="flex flex-col sm:flex-row flex-wrap gap-5">
          <div className="w-[300px] mx-auto">
            <img src={`${process.env.NEXT_PUBLIC_ASSET}/image/set-effect/${effect.index}.png`} alt="set effect" />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <div className="border-t border-r">
              {Object.entries(DATA).map(([key, value]) => (
                <div key={key} className="flex flex-row border-b min-h-9">
                  <div className="flex justify-center items-center w-24 bg-gray-100">
                    <span className="text-sm font-medium">{key}</span>
                  </div>
                  <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 flex-1 p-2">
                    {value.map((item: string) => (
                      <span key={item} className="text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <span className="text-sm text-red-500">● 같은 장비는 한벌효과에 중복으로 포함되지 않는다.</span>
          </div>
        </div>
      )}
    </>
  );
}
