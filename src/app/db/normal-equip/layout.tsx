import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 도감 - 일반 장비',
};

export default function NormalEquipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
