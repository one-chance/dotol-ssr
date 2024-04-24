import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 도감 - 한벌 효과',
};

export default function SetEffectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
