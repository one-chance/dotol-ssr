'use client';

import { useState } from 'react';
import { Select } from '@/components';
import { SKIN_LIST } from '@/contants';

type Skin = keyof typeof SKIN_LIST;
const SKINS = Object.keys(SKIN_LIST);

type SkinSectionProps = {
  onSelect: (skin: Skin) => void;
};

export default function SkinSection({ onSelect }: SkinSectionProps) {
  const [skin, setSkin] = useState<Skin>('현재 색상');

  const selectSkin = (_skin: string) => {
    setSkin(_skin as Skin);
    onSelect(_skin as Skin);
  };

  return (
    <div className="flex flex-col gap-2.5 px-2.5 sm:px-4">
      <span className="min-w-28 text-lg font-medium">태닝 목록</span>

      <Select className="w-40" name={skin} maxHeight="max-h-[320px]" items={SKINS} onSelect={selectSkin} />
    </div>
  );
}
