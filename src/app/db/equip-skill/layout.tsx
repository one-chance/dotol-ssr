import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 장비 마법',
  description: '장비 마법 - 고유 마법, 부여 마법, 기술서 마법, 자동버프 마법',
  openGraph: {
    title: '도톨 | 도감 - 장비 마법',
    description: '장비 마법 - 고유 마법, 부여 마법, 기술서 마법, 자동버프 마법',
    ...sharedOpenGraph,
  },
};

export default function EquipSkillLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
