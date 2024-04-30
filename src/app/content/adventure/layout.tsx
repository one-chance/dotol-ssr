import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 탐험일지 정보',
  description:
    '바람의나라 탐험일지 - 환상의섬, 백두촌, 용궁, 지옥, 백제, 금천군, 흉수계, 인도. 괴수, 물품, 임무, 탐방, 보상',
  openGraph: {
    url: 'https://dotols.com/content/adventure',
    title: '도톨 | 탐험일지 정보',
    description:
      '바람의나라 탐험일지 - 환상의섬, 백두촌, 용궁, 지옥, 백제, 금천군, 흉수계, 인도. 괴수, 물품, 임무, 탐방, 보상',
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
