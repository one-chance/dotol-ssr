import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 장비 제작',
  description: '장비 제작 - 용 전설, 중국 전설, 일본 전설, 환웅 전설, 타계 전설, 기타',
  openGraph: {
    title: '도톨 | 장비 제작',
    description: '장비 제작 - 용 전설, 중국 전설, 일본 전설, 환웅 전설, 타계 전설, 기타',
    ...sharedOpenGraph,
  },
};

export default function NormalEquipLMakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
