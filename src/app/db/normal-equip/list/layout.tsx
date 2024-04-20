import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 일반 장비 - 목록',
};

export default function NormalEquipListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
