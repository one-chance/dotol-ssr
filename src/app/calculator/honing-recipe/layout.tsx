import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 연마 재료 계산기',
};

export default function HoningRecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
