import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 신체 강화 재료',
  description: '신체 강화 재료 - 신체강화비약, 전표, 누적 신체강화비약, 누적 전표',
  openGraph: {
    url: 'https://dotols.com/upgrade/body-enhance/recipe',
    title: '도톨 | 신체 강화 재료',
    description: '신체 강화 재료 - 신체강화비약, 전표, 누적 신체강화비약, 누적 전표',
    ...sharedOpenGraph,
  },
};

export default function BodyEnahnceRecipeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
