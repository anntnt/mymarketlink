// import './globals.scss';

import './globals.css';
import localFont from 'next/font/local';
import Link from 'next/link';
import type { ReactNode } from 'react';
import itemsFromCart from '../util/itemsFromCart';
import NavbarConfig from './components/navbarConfig';

// import styles from './page.module.scss';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

type Props = {
  children: ReactNode;
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarConfig />

        <main>{children}</main>
      </body>
    </html>
  );
}
