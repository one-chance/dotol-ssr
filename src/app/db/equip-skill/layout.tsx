import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 장비 마법',
};

export default function EquipSkillLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
