import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 생산 재료 계산기',
  description: '생산 재료 - 직조술, 벌목술, 채광술, 조제술, 재봉술, 목공술, 대장술, 강화술',
  openGraph: {
    url: 'https://dotols.com/calculator/production',
    title: '도톨 | 생산 재료 계산기',
    description: '생산 재료 - 직조술, 벌목술, 채광술, 조제술, 재봉술, 목공술, 대장술, 강화술',
    ...sharedOpenGraph,
  },
};

export default function ProductionCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
