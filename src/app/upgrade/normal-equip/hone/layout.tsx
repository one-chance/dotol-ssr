import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 일반 장비 - 연마',
};

export default function NormalEquipEnahnceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
