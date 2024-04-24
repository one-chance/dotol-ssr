import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 연마 분해 계산기',
};

export default function HoningDisassembleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
