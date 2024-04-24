import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 신수 유물 - 분해',
};

export default function ArtifactEquipDisassembleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
