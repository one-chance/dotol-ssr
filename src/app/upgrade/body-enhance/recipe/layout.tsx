import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 신체 강화 - 재료',
};

export default function BodyEnahnceRecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
