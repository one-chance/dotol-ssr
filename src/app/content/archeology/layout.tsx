import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 고고학 정보',
  description: '바람의나라 고고학 - 산적굴, 북방대초원, 백두산, 12지신의유적, 일본, 용궁, 환상의섬, 극지방, 중국',
  openGraph: {
    title: '도톨 | 고고학 정보',
    description: '바람의나라 고고학 - 산적굴, 북방대초원, 백두산, 12지신의유적, 일본, 용궁, 환상의섬, 극지방, 중국',
    ...sharedOpenGraph,
  },
};

export default function AchievementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
