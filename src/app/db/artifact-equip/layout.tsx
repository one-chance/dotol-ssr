import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 도감 - 신수 유물',
};

export default function AntiquityEquipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
