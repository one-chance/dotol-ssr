import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 비밀번호 변경',
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
