import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 신수 유물 - 제작',
};

export default function ArtifactEquipMakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
