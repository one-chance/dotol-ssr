import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 각인수치 계산기',
  description: '각인수치 계산기 - 변경된 (%) 각인 능력치를 과거 (+) 각인 능력치로 변환',
  openGraph: {
    url: 'https://dotols.com/calculator/old-engrave',
    title: '도톨 | 각인수치 계산기',
    description: '각인수치 계산기 - 변경된 (%) 각인 능력치를 과거 (+) 각인 능력치로 변환',
    ...sharedOpenGraph,
  },
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
