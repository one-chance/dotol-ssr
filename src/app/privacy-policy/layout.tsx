import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 개인정보 처리방침',
  description: '바람의나라 커뮤니티 - 정보, 치장, 룩북, 장비, 환수장비, 신수유물, 업적, 탐험일지, 고고학, 신체강화',
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
