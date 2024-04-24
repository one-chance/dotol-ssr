import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 도감 - 환수 장비',
};

export default function PetEquipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
