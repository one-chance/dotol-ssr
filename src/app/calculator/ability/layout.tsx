import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 능력치 계산기',
  description: '방어구관통, 방어도무시, 방어도, 공격력증가, 마법치명, 마력증강',
  openGraph: {
    title: '도톨 | 능력치 계산기',
    description: '방어구관통, 방어도무시, 방어도, 공격력증가, 마법치명, 마력증강',
    ...sharedOpenGraph,
  },
};

export default function AbilityCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
