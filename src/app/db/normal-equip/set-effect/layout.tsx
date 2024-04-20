import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 일반 장비 - 한벌효과',
};

export default function NormalEquipSetEffectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
