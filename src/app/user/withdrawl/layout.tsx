import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 회원탈퇴',
};

export default function WithdrawlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
