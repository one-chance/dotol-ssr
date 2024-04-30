import { Metadata } from 'next';
import { sharedOpenGraph } from '@/app/shared-metadata';

export const metadata: Metadata = {
  title: '도톨 | 연마 분해 계산기',
  description:
    '연마 분해 - 연마석(용), 연마석(중국), 연마석(일본), 연마석(환웅), 연마석(타계), 연마석(기타), 연마돌파석',
  openGraph: {
    title: '도톨 | 연마 분해 계산기',
    description:
      '연마 분해 - 연마석(용), 연마석(중국), 연마석(일본), 연마석(환웅), 연마석(타계), 연마석(기타), 연마돌파석',
    ...sharedOpenGraph,
  },
};

export default function HoningDisassembleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
