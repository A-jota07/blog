import type { Metadata } from 'next';
import './globals.css';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
   title: {
      default: 'The Blog - Feito com nextJS',
      template: '%s | The Blog',
   },
   description: 'Blog criado utilizando NextJS',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='pt-BR'>
         <body>
            <Container>
               <Header />

               {children}

               <footer>
                  <p className='text-6xl font-bold text-center py-8'>Footer</p>
               </footer>
            </Container>
         </body>
      </html>
   );
}
