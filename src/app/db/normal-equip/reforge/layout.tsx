import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 일반 장비 - 제련',
};

export default function NormalEquipReforgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
