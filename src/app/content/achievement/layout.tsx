import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 업적 정보',
  description:
    '바람의나라 업적 정보 - 탐험일지, 고고학, 전장, 세시마을, 환웅의유산, 안시성 전투, 환상의시련, 영웅의 기억, 그 외',
};

export default function AchievementLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
