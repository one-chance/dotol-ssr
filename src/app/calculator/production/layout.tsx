import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 생산 계산기',
};

export default function ProductionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
