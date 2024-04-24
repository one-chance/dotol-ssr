import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 신체 강화 - 보너스',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
