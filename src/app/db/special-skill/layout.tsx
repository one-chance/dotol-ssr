import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 특수 마법',
  description: '특수 마법 - 한벌 마법, 출세가도 마법, 고고학 마법',
  openGraph: {
    title: '도톨 | 특수 마법',
    description: '특수 마법 - 한벌 마법, 출세가도 마법, 고고학 마법',
    ...sharedOpenGraph,
  },
};

export default function SetSkillLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
