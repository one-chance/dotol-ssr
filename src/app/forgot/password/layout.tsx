import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 아이디 찾기',
};

export default function ForgotUserIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
