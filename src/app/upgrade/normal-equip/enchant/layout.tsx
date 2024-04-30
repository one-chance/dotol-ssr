import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 기술 능력 부여',
  description: '기술 능력 부여 - 전사, 도적, 주술사, 도사, 궁사, 천인, 마도사, 영술사, 차사, 살수사',
  openGraph: {
    url: 'https://dotols.com/upgrade/normal-equip/enchant',
    title: '도톨 | 기술 능력 부여',
    description: '기술 능력 부여 - 전사, 도적, 주술사, 도사, 궁사, 천인, 마도사, 영술사, 차사, 살수사',
    ...sharedOpenGraph,
  },
};

export default function SkillAbilityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
