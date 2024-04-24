import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '도톨 | 신체 강화 - 능력치',
};

export default function BodyEnahnceAbilityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
