import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 환수 장비 - 목록',
};

export default function PetEquipListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
