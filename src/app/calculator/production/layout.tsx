import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 생산 재료 계산기',
};

export default function ProductionCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
