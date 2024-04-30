import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 신수 유물',
  description: '신수 유물 - 무기유물, 투구유물, 갑옷유물, 장갑유물, 보조유물, 영옥',
  openGraph: {
    url: 'https://dotols.com/db/artifact-equip',
    title: '도톨 | 신수 유물',
    description: '신수 유물 - 무기유물, 투구유물, 갑옷유물, 장갑유물, 보조유물, 영옥',
    ...sharedOpenGraph,
  },
};

export default function AntiquityEquipLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
