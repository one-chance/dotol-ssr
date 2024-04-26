'use client';

import { useState } from 'react';
import { Avatar, CostumeList, Select, Pagination } from '@/components';

const PARTS = [
  '목/어깨장식',
  '투구',
  '얼굴장식',
  '무기',
  '겉옷',
  '방패/보조무기',
  '망토',
  '신발',
  '장신구',
  '세트옷',
] as const;
type Parts = (typeof PARTS)[number] | '치장 부위';

export default function CostumeListPage() {
  const [part, setPart] = useState<Parts>('치장 부위');
  const [selectedEquip, setSelectedEquip] = useState<string[]>([]);

  const selectPart = (item: string) => {
    setPart(item as Parts);
  };

  const wearEquip = (item: string) => {
    if (selectedEquip.length >= 10) return;
    setSelectedEquip(prev => (prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]));
  };

  const removeEquip = (item: string) => {
    setSelectedEquip(prev => prev.filter(i => i !== item));
  };

  const TEST_LIST = [
    { index: 0, name: '용천제십검', part: 4, gender: 1, luxury: true },
    { index: 1, name: '용천제십검', part: 4, gender: 2, luxury: false },
    { index: 2, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 3, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 4, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 5, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 6, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 7, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 8, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 9, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 10, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 11, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 12, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 13, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 14, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 15, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 16, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 17, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 18, name: '용천제십검', part: 4, gender: 0, luxury: false },
    { index: 19, name: '용천제십검', part: 4, gender: 0, luxury: false },
  ];

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">치장 목록</span>

      <div className="flex flex-row flex-wrap gap-2.5">
        <div className="flex flex-col gap-2 mx-auto">
          <Avatar equips={selectedEquip} />

          <div className="flex flex-col flex-1 p-2.5 gap-2.5 border rounded max-w-[214px] max-h-[290px] min-h-20">
            <span className="font-medium text-center">착용 목록</span>

            <div className="flex flex-col gap-1">
              {selectedEquip?.map(equip => (
                <div key={equip} className="flex flex-row justify-between gap-4">
                  <span className="text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">{equip}</span>

                  <button type="button" className="text-sm text-gray-500 min-w-7" onClick={() => removeEquip(equip)}>
                    해제
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 border rounded">
          <div className="flex flex-row px-2.5 py-2 gap-2 border-b">
            <Select className="w-[120px] sm:w-[140px] h-9" name="치장 부위" items={PARTS} onSelect={selectPart} />
            <input placeholder="치장 이름" className="w-32 sm:w-40 border rounded px-2 ountline-none" />
            <button type="button" className="w-12 sm:w-16 text-sm sm:text-base bg-blue-500 text-white rounded h-9">
              검색
            </button>
          </div>

          <CostumeList list={TEST_LIST} selectedList={selectedEquip} onWear={wearEquip} />

          <Pagination />
        </div>
      </div>
    </div>
  );
}
