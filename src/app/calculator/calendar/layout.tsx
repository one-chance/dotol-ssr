import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 세시마을 달력',
  description: '설날, 중화절, 삼짇날, 부처님오신날, 단오, 유두, 칠석, 추석, 중양절, 김장철, 동지, 섣달',
  openGraph: {
    url: 'https://dotols.com/calculator/calendar',
    title: '도톨 | 세시마을 달력',
    description: '설날, 중화절, 삼짇날, 부처님오신날, 단오, 유두, 칠석, 추석, 중양절, 김장철, 동지, 섣달',
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
