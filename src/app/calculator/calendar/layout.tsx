import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 세시마을 달력',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
