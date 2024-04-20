'use client';

import { Select } from '@/components';
import { useState } from 'react';
import { EQUIP_SET_EFFECTS } from '@/contants/normal-equip';
import jsonData from '@/contants/normal-equip-set-effect.json';

const TYPES = [
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

type Effect = {
  index: number;
  name: string;
  type: string;
};

export default function NormalEquipSetEffectPage() {
  const [type, setType] = useState('종류');
  const [effect, setEffect] = useState<Effect>({
    index: 0,
    name: '',
    type: '',
  });

  const effectList = EQUIP_SET_EFFECTS.filter(item => item.type === type);

  const selectType = (_type: string) => {
    setType(_type);
    setEffect({ index: 0, name: '', type: '' });
  };

  const selectEffect = (_effect: Effect) => {
    setEffect(_effect);
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 한벌효과</span>
        <Select className="w-[140px]" name="종류" items={TYPES} onSelect={selectType} />
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
            <img src={`https://asset.dotols.com/image/equip-set/${effect.index}.png`} alt="set effect" />
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <div className="border-t border-r">
              {Object.entries(jsonData[effect.name as keyof typeof jsonData]).map(([key, value]) => (
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
    </div>
  );
}
