import { Roboto } from "next/font/google";
import { ConfigProvider } from 'antd';
import classNames from 'classnames';

import Aside from '@/shared/components/aside'

import '../shared/styles/globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClasses = classNames('min-h-full flex flex-col', roboto.className)
  const antDesignTheme = {
    theme: {
      token: {
        fontFamily: roboto.style.fontFamily,
      },
    },
  }

  return (
    <html
      lang="ru"
      className={'h-full antialiased bg-black text-white text-base leading-relaxed'}
    >
      <ConfigProvider {...antDesignTheme}>
        <body className={bodyClasses}>
         <div className="grid-body">
            <Aside />
            
            <main>
              {children}
            </main>
          </div>
        </body>
      </ConfigProvider>
    </html>
  );
}
