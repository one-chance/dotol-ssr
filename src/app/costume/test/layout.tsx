import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '도톨 | 캐릭터 룩북',
  description: '바람의나라 치장 - 목/어깨장식, 머리, 얼굴장식, 무기, 겉옷, 방패/보조무기, 망토, 신발, 장신구, 세트옷',
  openGraph: {
    url: 'https://dotols.com/costume/lookbook',
    title: '도톨 | 캐릭터 룩북',
    description: '바람의나라 치장 - 목/어깨장식, 머리, 얼굴장식, 무기, 겉옷, 방패/보조무기, 망토, 신발, 장신구, 세트옷',
    ...sharedOpenGraph,
  },
};

export default function LookbookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Suspense>{children}</Suspense>;
}
