import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 프로필',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
