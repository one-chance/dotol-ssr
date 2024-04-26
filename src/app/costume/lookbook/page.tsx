'use client';

import { useState } from 'react';
import { Select, Avatar } from '@/components';
import { SKIN_LIST } from '@/contants';

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

type Skin = keyof typeof SKIN_LIST | '현재 색상';
const skinList = Object.keys(SKIN_LIST);

export default function LookBookPage() {
  const [skin, setSkin] = useState<Skin>('현재 색상');
  const [equipList, setEquipList] = useState({
    '목/어깨장식': '',
    투구: '',
    얼굴장식: '',
    무기: '',
    겉옷: '',
    '방패/보조무기': '',
    망토: '',
    신발: '',
    장신구: '',
    세트옷: '',
  });

  const selectSkin = (_skin: string) => {
    setSkin(_skin as Skin);
  };

  const inputEquip = (part: string, value: string) => {
    setEquipList(prev => ({ ...prev, [part]: value }));
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">캐릭터 룩북</span>

      <div className="flex flex-row items-start flex-wrap gap-2.5">
        <Avatar
          skin={SKIN_LIST[skin as keyof typeof SKIN_LIST]}
          equips={Object.values(equipList).filter(item => item !== '')}
        />

        <div className="flex flex-col flex-1 border rounded p-5 gap-5">
          <span className="min-w-28 text-lg font-medium">태닝</span>

          <Select className="w-40" name="현재 색상" maxHeight="max-h-[320px]" items={skinList} onSelect={selectSkin} />

          <hr />

          <span className="text-lg font-medium">일반 장비 / 치장 장비</span>
          <div className="flex flex-row justify-between flex-wrap gap-2.5">
            {PARTS.map(part => (
              <div key={part} className="flex flex-row items-center">
                <span className="min-w-28">{part}</span>
                <input
                  value={equipList[part] || ''}
                  className="w-40 h-9 border rounded px-2 outline-none"
                  onChange={e => inputEquip(part, e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
