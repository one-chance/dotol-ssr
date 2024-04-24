import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 일반 장비 - 분해',
};

export default function NormalEquipLDisassembleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
