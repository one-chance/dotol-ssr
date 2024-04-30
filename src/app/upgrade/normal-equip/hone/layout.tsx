import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 장비 연마 능력치',
  description: '장비별 연마 능력치 - 능력치1, 능력치2, 연마 20, 연마 40, 연마 60, 연마 80, 연마 90, 연마 100',
  openGraph: {
    url: 'https://dotols.com/upgrade/normal-equip/hone',
    title: '도톨 | 장비 연마 능력치',
    description: '장비별 연마 능력치 - 능력치1, 능력치2, 연마 20, 연마 40, 연마 60, 연마 80, 연마 90, 연마 100',
    ...sharedOpenGraph,
  },
};

export default function NormalEquipEnahnceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
