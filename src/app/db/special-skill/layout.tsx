import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도감 | 특수 마법',
};

export default function SetSkillLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
