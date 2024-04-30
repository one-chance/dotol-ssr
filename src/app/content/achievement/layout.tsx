import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 업적 정보',
  description:
    '바람의나라 업적 - 탐험일지, 고고학, 전장, 세시마을, 환웅의유산, 안시성 전투, 환상의시련, 영웅의 기억, 그 외, 레이드, 가이드',
  openGraph: {
    title: '도톨 | 업적 정보',
    description:
      '바람의나라 업적 - 탐험일지, 고고학, 전장, 세시마을, 환웅의유산, 안시성 전투, 환상의시련, 영웅의 기억, 그 외, 레이드, 가이드',
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
