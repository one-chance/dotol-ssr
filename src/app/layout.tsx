import type { Metadata } from 'next';
import './globals.css';
import { Footer, MobileHeader, Sidebar } from '@/components/layout';

export const metadata: Metadata = {
  title: '도톨 | 바람의나라 커뮤니티',
  description:
    '바람의나라 최신 정보 - 치장, 룩북, 장비, 제련, 연마, 장비마법, 환수장비, 신수유물, 업적, 탐험일지, 고고학, 신체강화',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#223A54]">
        <div className="flex flex-row max-w-[1280px] mx-auto">
          <Sidebar />

          <main className="flex flex-col w-full min-h-screen bg-white">
            <MobileHeader />
            {children}
            <Footer />
          </main>
        </div>

        <div id="modal" />
      </body>
    </html>
  );
}
