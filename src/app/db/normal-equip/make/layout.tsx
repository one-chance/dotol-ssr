import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 일반 장비 - 제작 재료',
};

export default function NormalEquipLMakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
