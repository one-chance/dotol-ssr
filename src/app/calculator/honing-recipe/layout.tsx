import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 연마 재료 계산기',
  description: '연마 재료 계산기 - 필요 연마석, 필요 금전, 누적 연마석, 누적 금전',
  openGraph: {
    url: 'https://dotols.com/calculator/honing-recipe',
    title: '도톨 | 연마 재료 계산기',
    description: '연마 재료 계산기 - 필요 연마석, 필요 금전, 누적 연마석, 누적 금전',
    ...sharedOpenGraph,
  },
};

export default function HoningRecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
