import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 캐릭터 룩북',
};

export default function LookBookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
