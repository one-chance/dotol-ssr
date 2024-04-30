import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 한벌 효과',
  description:
    '한벌 효과 - 용 전설, 중국 전설, 일본 전설, 환웅 전설, 타계 전설, 북방, 백제/황산벌, 전우치/구미호, 흉수계/봉래산, 생산, 격전지/전장, 귀문, 기타',
  openGraph: {
    title: '도톨 | 한벌 효과',
    description:
      '한벌 효과 - 용 전설, 중국 전설, 일본 전설, 환웅 전설, 타계 전설, 북방, 백제/황산벌, 전우치/구미호, 흉수계/봉래산, 생산, 격전지/전장, 귀문, 기타',
    ...sharedOpenGraph,
  },
};

export default function SetEffectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
