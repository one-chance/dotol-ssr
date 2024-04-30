import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 캐릭터 룩북',
  description: '캐릭터 룩북 - 태닝, 일반 장비, 치장 장비',
  openGraph: {
    title: '도톨 | 캐릭터 룩북',
    description: '캐릭터 룩북 - 태닝, 일반 장비, 치장 장비',
    ...sharedOpenGraph,
  },
};

export default function LookBookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
