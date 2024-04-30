import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 신수 유물 분해',
  description:
    "신수 유물 - 신수의정수, 사신정기, 오성정기, 유물의영험, 신수극왕의영체, 변이된신수의힘'병, 변이된신수의힘'갑, 변이된신수의힘'투",
  openGraph: {
    url: 'https://dotols.com/upgrade/artifact-equip/disassemble',
    title: '도톨 | 신수 유물 - 분해',
    description:
      "신수 유물 - 신수의정수, 사신정기, 오성정기, 유물의영험, 신수극왕의영체, 변이된신수의힘'병, 변이된신수의힘'갑, 변이된신수의힘'투",
    ...sharedOpenGraph,
  },
};

export default function ArtifactEquipDisassembleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
