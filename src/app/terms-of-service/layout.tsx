import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 이용약관',
  description: '바람의나라 커뮤니티 - 정보, 치장, 룩북, 장비, 환수장비, 신수유물, 업적, 탐험일지, 고고학, 신체강화',
};

export default function TermsOfServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
