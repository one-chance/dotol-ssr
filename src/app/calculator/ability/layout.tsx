import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 능력치 계산기',
  description: '방어구관통, 방어도무시, 방어도, 공격력증가, 마법치명, 마력증강',
};

export default function AbilityCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
