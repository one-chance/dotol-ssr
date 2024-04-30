import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 신체 강화 보너스',
  description:
    '신체 강화 - 방어구관통, 방어도무시, 방어도, 공격력증가, 마법치명, 마력증강, 직타저항, 시전향상, 명중률, 명중회피, 마법치명무시',
  openGraph: {
    url: 'https://dotols.com/upgrade/body-enhance/bonus',
    title: '도톨 | 신체 강화 - 보너스',
    description:
      '신체 강화 - 방어구관통, 방어도무시, 방어도, 공격력증가, 마법치명, 마력증강, 직타저항, 시전향상, 명중률, 명중회피, 마법치명무시',
    ...sharedOpenGraph,
  },
};

export default function CalendarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
