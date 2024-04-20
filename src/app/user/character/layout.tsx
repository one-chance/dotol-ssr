import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 캐릭터 관리',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
