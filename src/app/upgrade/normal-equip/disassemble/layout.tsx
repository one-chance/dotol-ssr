import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 장비 분해',
  description:
    '장비 분해 - 연마석(용), 연마석(중국), 연마석(일본), 연마석(환웅), 연마석(타계), 연마석(기타), 연마돌파석',
  openGraph: {
    url: 'https://dotols.com/upgrade/normal-equip/disassemble',
    title: '도톨 | 장비 분해',
    description:
      '장비 분해 - 연마석(용), 연마석(중국), 연마석(일본), 연마석(환웅), 연마석(타계), 연마석(기타), 연마돌파석',
  },
};

export default function NormalEquipLDisassembleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
