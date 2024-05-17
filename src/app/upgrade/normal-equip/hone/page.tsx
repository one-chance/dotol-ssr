'use client';

import { useEffect, useState } from 'react';
import { Select, NormalOriginList, EquipSetting, NormalDetailList } from '@/components';
import { EQUIP_PARTS, EQUIP_SUBJECTS, NORMAL_EQUIP_NOTICE } from '@/contants';
import { EquipPart, EquipSubject, HoneData, NormalEquip } from '@/types';
import { getEquipList } from '@/utils/supabase';

export default function NormalEquipListPage() {
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

  useEffect(() => {
    if (subject === '종류') return setOriginList([]);

    const getList = async () => {
      const list = await getEquipList(subject, part, 'hone');
      setOriginList(list);
    };

    getList();
  }, [subject, part]);

  useEffect(() => {
    if (origin === '') return setEquipList([]);

    const getList = async () => {
      const res = await fetch(`/api/normal-equip/hone?origin=${origin}`);
      const data = await res.json();
      setEquipList(data);
    };

    getList();
  }, [origin]);

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 연마</span>
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
        notice={subject !== '종류' ? [] : NORMAL_EQUIP_NOTICE.hone}
        onSelect={handleSelect('origin')}
      />

      {origin !== '' && <NormalDetailList list={equipList} onSelect={handleSelect('equip')} />}

      {equip !== '' && (
        <div className="flex flex-row flex-wrap gap-5">
          <EquipSetting origin={origin} equip={equip} />

          <div className="flex flex-col justify-center items-center flex-1 border rounded p-4">
            <span className="font-medium text-lg">장비 능력치</span>
            <div className="flex flex-1 felx-col justify-center items-center">장비 데이터를 최신화 중입니다</div>
          </div>
        </div>
      )}
      <div className="min-h-40" />
    </div>
  );
}
