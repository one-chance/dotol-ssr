'use client';

import { NormalDetailList, NormalOriginList, Select } from '@/components';
import { EQUIP_PARTS, EQUIP_SUBJECTS } from '@/contants';
import { EquipPart, EquipSubject, HoneData, NormalEquip } from '@/types';
import { useEffect, useState } from 'react';

export default function HoneCalculatorPage() {
  const [subject, setSubject] = useState<EquipSubject>('종류');
  const [part, setPart] = useState<EquipPart>('부위');
  const [originList, setOriginList] = useState<string[]>([]);
  const [origin, setOrigin] = useState<string>('');
  const [equipList, setEquipList] = useState<string[]>([]);
  const [equip, setEquip] = useState<string>('');

  const handleSelect = (type: string) => (value: string) => {
    if (type === 'subject') {
      setEquip('');
      setOrigin('');
      setSubject(value as EquipSubject);
    } else if (type === 'part') {
      setEquip('');
      setOrigin('');
      setPart(value as EquipPart);
    } else if (type === 'origin') {
      setEquip('');
      setOrigin(value);
    } else if (type === 'equip') {
      setEquip(value);
    }
  };

  const deleteItem = (name: string) => {
    console.log(name);
  };

  useEffect(() => {
    if (subject === '종류') return setOriginList([]);

    const getList = async () => {
      const res = await fetch(`/api/normal-equip/list?subject=${subject}&part=${part}&as=hone`);
      setOriginList(await res.json());
    };

    getList();
  }, [subject, part]);

  useEffect(() => {
    if (origin === '') return setEquipList([]);

    const getList = async () => {
      const res = await fetch(`/api/normal-equip/hone?origin=${origin}`);
      setEquipList(await res.json());
    };

    getList();
  }, [origin]);

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center gap-10">
        <span className="text-xl sm:text-2xl font-bold">연마 분해 계산기</span>

        <div className="flex flex-row items-center gap-2">
          <Select className="w-20 sm:w-24" name={subject} items={EQUIP_SUBJECTS} onSelect={handleSelect('subject')} />
          <Select
            className="w-20 sm:w-28"
            disabled={subject === '종류'}
            name={part}
            items={EQUIP_PARTS}
            onSelect={handleSelect('part')}
          />
        </div>
      </div>

      <NormalOriginList
        list={originList}
        notice={subject !== '종류' ? [] : ['장비를 선택하면 분해할 장비 목록에 추가됩니다.']}
        onSelect={handleSelect('origin')}
      />

      <div className="flex felx-row justify-center border rounded p-5">
        <span>데이터를 업데이트 중입니다.</span>
      </div>

      {/* {origin !== '' && <NormalDetailList list={equipList} onSelect={handleSelect('equip')} />}

      {equip !== '' && (
        <div className="flex flex-col border rounded p-4 gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-medium">분해할 장비 목록</span>

            <div className="flex flex-row flex-wrap gap-2">
              <button
                type="button"
                className="flex flex-row justify-between min-w-20 border hover:border-red-500 hover:text-red-500 rounded-xl px-2 py-1 gap-2.5"
                onClick={() => deleteItem('환웅의창의5성')}
              >
                환웅의창의5성 1개
              </button>

              <button
                type="button"
                className="flex flex-row justify-between min-w-20 border hover:border-red-500 hover:text-red-500 rounded-xl px-2 py-1 gap-2.5"
                onClick={() => deleteItem('환웅의창의5성')}
              >
                환웅의창의5성 1개
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-lg font-medium">분해 결과</span>
            <span>연마석: 1개</span>
            <span>연마돌파석: 1개</span>
          </div>
        </div>
      )} */}
    </div>
  );
}
