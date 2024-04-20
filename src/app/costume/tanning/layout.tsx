import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 태닝 목록',
};

export default function TanningListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
