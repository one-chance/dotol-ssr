import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 전투력 계산기',
  description: '전투력 - 레벨, 장비, 각인, 부가잠재능력, 환수, 기술능력, 신체강화, 내공강화, 신수유물',
  openGraph: {
    url: 'https://dotols.com/calculator/power',
    title: '도톨 | 전투력 계산기',
    description: '전투력 - 레벨, 장비, 각인, 부가잠재능력, 환수, 기술능력, 신체강화, 내공강화, 신수유물',
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
