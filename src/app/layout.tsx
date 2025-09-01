import type { Metadata } from 'next';
import '@/styles/global.scss';
import { type JSX } from 'react';
import { pixelifySans } from '@/styles/_fonts';
import { GSAPInitializer } from '@/components/atoms/gsap-initializer';

export const metadata: Metadata = {
  title: '',
  description: ''
};

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => {
  return (
    <html lang="pt-br">
      <body className={pixelifySans.variable}>
        <GSAPInitializer />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
