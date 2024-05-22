'use client';

import { useState } from 'react';
import { Select } from '@/components';
import { SKIN_LIST } from '@/contants';
import { Skin } from '@/types';

type SkinSectionProps = {
  onSelect: (skin: Skin) => void;
};

export default function SkinSection({ onSelect }: SkinSectionProps) {
  const SKINS = Object.keys(SKIN_LIST) as Skin[];
  const [skin, setSkin] = useState<Skin>('현재색상');

  const selectSkin = (newSkin: Skin) => {
    setSkin(newSkin);
    onSelect(newSkin);
  };

  return (
    <div className="flex flex-col gap-2.5 px-2.5 sm:px-4">
      <span className="min-w-28 text-lg font-medium">태닝 목록</span>

      <Select className="w-40" name={skin} maxHeight="max-h-[320px]" items={SKINS} onSelect={selectSkin} />
    </div>
  );
}
