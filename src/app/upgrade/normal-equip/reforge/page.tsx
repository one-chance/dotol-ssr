'use client';

import { useEffect, useState } from 'react';
import { Select, NormalOriginList, NormalEquipTable } from '@/components';
import { EQUIP_PARTS, EQUIP_SUBJECTS, NORMAL_EQUIP_NOTICE } from '@/contants';
import { EquipSubject, EquipPart, NormalEquip } from '@/types';

export default function NormalEquipReforgePage() {
  const [subject, setSubject] = useState<EquipSubject>('종류');
  const [part, setPart] = useState<EquipPart>('부위');
  const [origin, setOrigin] = useState<string>('');

  const [originList, setOriginList] = useState<string[]>([]);

  const handleSelect = (type: string) => (value: string) => {
    if (type === 'subject') {
      setOrigin('');
      setPart('부위' as EquipPart);
      setSubject(value as EquipSubject);
    } else if (type === 'part') {
      setOrigin('');
      setPart(value as EquipPart);
    } else if (type === 'equip') {
      setOrigin(value);
    }
  };

  useEffect(() => {
    if (subject === '종류') return setOriginList([]);

    const getList = async () => {
      const res = await fetch(`/api/normal-equip/list?subject=${subject}&part=${part}&as=reforge`);
      setOriginList(await res.json());
    };

    getList();
  }, [subject, part]);

  return (
    <div className="flex flex-col grow max-w-[720px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <div className="flex flex-row justify-between items-center">
        <span className="text-xl sm:text-2xl font-semibold">일반 장비 - 강화</span>
        <div className="flex flex-row items-center gap-2">
          <Select
            className="w-20 sm:w-24"
            name={subject}
            items={EQUIP_SUBJECTS.filter(item => item !== '기타')}
            onSelect={handleSelect('subject')}
          />
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
        notice={subject !== '종류' ? [] : NORMAL_EQUIP_NOTICE.reforge}
        onSelect={handleSelect('equip')}
      />

      {origin !== '' && <NormalEquipTable as="reforge" equip={origin} />}
    </div>
  );
}
