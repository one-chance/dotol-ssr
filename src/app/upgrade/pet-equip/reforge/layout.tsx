import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 환수 장비 재련',
  description: '환수 장비 - 황룡, 청룡, 백호, 현무, 생명의목걸이, 물의성물, 불의성물, 땅의성물, 바람의성물, 문양, 신물',
  openGraph: {
    url: 'https://dotols.com/upgrade/pet-equip/reforge',
    title: '도톨 | 환수 장비 재련',
    description:
      '환수 장비 - 황룡, 청룡, 백호, 현무, 생명의목걸이, 물의성물, 불의성물, 땅의성물, 바람의성물, 문양, 신물',
    ...sharedOpenGraph,
  },
};

export default function PetEquipReforgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
