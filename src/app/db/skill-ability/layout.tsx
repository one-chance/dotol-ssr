import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 기술 능력',
};

export default function SkillAbilityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
