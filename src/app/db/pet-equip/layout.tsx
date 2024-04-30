import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 환수 장비',
  description:
    '환수 장비 - 황룡, 청룡, 주작, 백호, 현무, 생명의목걸이, 물의성물, 불의성물, 바람의성물, 땅의성물, 문양, 신물',
  openGraph: {
    title: '도톨 | 환수 장비',
    description:
      '환수 장비 - 황룡, 청룡, 주작, 백호, 현무, 생명의목걸이, 물의성물, 불의성물, 바람의성물, 땅의성물, 문양, 신물',
    ...sharedOpenGraph,
  },
};

export default function PetEquipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
