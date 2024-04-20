import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 신수 유물 - 목록',
};

export default function AntiquityEquipListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
