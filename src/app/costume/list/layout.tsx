import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 치장 목록',
  description: '바람의나라 치장',
};

export default function CostumeListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
