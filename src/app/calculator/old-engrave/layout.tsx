import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 각인수치 계산기',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
