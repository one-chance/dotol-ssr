import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 명품의 목록',
  description:
    '바람의나라 명품의 - 마법학교, 은하요술사, 풀잎, 악마사냥꾼, 은빛미호, 시간여행자, 월야산신, 인형술사, 잔혹천사, 천상의심포니, 달빛마중, 생명의바다, 오방지신',
};

export default function LuxuryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
