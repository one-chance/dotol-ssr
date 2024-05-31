import type { Metadata } from 'next';

import { Provider } from 'jotai';
import { Footer, MobileHeader, Sidebar } from '@/components/layout';
import { sharedOpenGraph } from '@/app/shared-metadata';
import './globals.css';
import { checkIsAuthed } from '@/actions/auth.action';

export const metadata: Metadata = {
  title: '도톨 | 바람의나라 커뮤니티',
  description:
    '바람의나라 최신 정보 - 치장, 룩북, 장비, 제련, 연마, 장비마법, 환수장비, 신수유물, 업적, 탐험일지, 고고학, 신체강화',
  openGraph: {
    url: 'https://dotols.com',
    title: '도톨 | 바람의나라 커뮤니티',
    description:
      '바람의나라 최신 정보 - 치장, 룩북, 장비, 제련, 연마, 장비마법, 환수장비, 신수유물, 업적, 탐험일지, 고고학, 신체강화',
    ...sharedOpenGraph,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  test: React.ReactNode;
}>) {
  const isAuthed = await checkIsAuthed();

  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1794428900535088"
        ></script>
      </head>
      <body className="bg-[#223A54]">
        <Provider>
          <div className="flex flex-row max-w-[1280px] mx-auto">
            <Sidebar />

            <main className="flex flex-col w-full min-h-screen bg-white">
              <MobileHeader isAuthed={isAuthed} />
              {children}
              <Footer />
            </main>
          </div>

          <div id="modal" />
        </Provider>
      </body>
    </html>
  );
}
