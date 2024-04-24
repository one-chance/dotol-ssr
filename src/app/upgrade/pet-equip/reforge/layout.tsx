import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 환수 장비 - 재련',
};

export default function PetEquipReforgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
