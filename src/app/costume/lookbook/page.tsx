'use client';

import { useState } from 'react';

import { checkIsAuthed } from '@/actions/auth.action';
import { Avatar, CostumeSection, EquipSection, SkinSection } from '@/components';
import { Skin } from '@/types';

export default function LookbookPage() {
  const [skin, setSkin] = useState<Skin>('현재색상');
  const [selectedEquip, setSelectedEquip] = useState<string[]>([]);

  const selectSkin = (newSkin: Skin) => {
    setSkin(newSkin);
  };

  const addEquip = async (item: string) => {
    const isAuthed = await checkIsAuthed();
    if (!isAuthed) return alert('캐릭터를 등록해야 아바타가 보입니다.');

    if (selectedEquip.length === 10) return;
    setSelectedEquip(prev => (prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]));
  };

  const removeEquip = (item: string) => {
    setSelectedEquip(prev => prev.filter(i => i !== item));
  };

  return (
    <div className="flex flex-col grow max-w-[960px] w-full mx-auto px-2.5 py-5 sm:p-10 gap-5">
      <span className="text-xl sm:text-2xl font-semibold">캐릭터 룩북</span>

      <div className="flex flex-row flex-wrap gap-2.5">
        <div className="flex flex-col gap-2 mx-auto">
          <Avatar equips={selectedEquip} skin={skin} />

          <div className="flex flex-col flex-1 p-3 gap-2.5 border rounded max-w-[214px] max-h-[290px] min-h-20">
            <span className="font-medium text-center">착용 목록</span>

            <div className="flex flex-col gap-1">
              {selectedEquip?.map(equip => (
                <div key={equip} className="flex flex-row justify-between items-center gap-4">
                  <span className="text-xs text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">{equip}</span>

                  <button type="button" className="text-xs text-gray-500 min-w-7" onClick={() => removeEquip(equip)}>
                    해제
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 border rounded py-2.5 sm:py-4">
          <SkinSection onSelect={selectSkin} />

          <hr className="my-2.5 sm:my-4" />

          <CostumeSection selected={selectedEquip} onSelect={addEquip} />

          <hr className="my-2.5 sm:my-4" />

          <EquipSection onSelect={addEquip} />
        </div>
      </div>
    </div>
  );
}
