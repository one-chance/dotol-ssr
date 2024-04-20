import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 전투력 계산기',
  description:
    '레벨 전투력, 장비 전투력, 각인 전투력, 부가잠재능력 전투력, 환수 전투력, 기술능려 전투력, 신체강화 전투력, 내공강화 전투력, 신수유물 전투력',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
