import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeanding } from '@/components/PostHeading';
// import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/spinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function HomePage() {
   return (
      <Container>
         <Header />
         <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
            <Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
               <Image
                  className='w-full h-full object-center group-hover:scale-105 transition'
                  src='/images/bryen_0.png'
                  width={1200}
                  height={720}
                  alt='Título do post'
                  priority
               />
            </Link>
            <div className='flex flex-col sm:justify-center'>
               <time className='text-slate-600 text-sm' dateTime='2026-04-09'>
                  09/04/2026 10:00
               </time>
               <PostHeanding as='h1' url='#'>
                  Lorem ipsum dolor sit.
               </PostHeanding>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
               dolorem est dolor porro, doloribus neque, quidem mollitia
               doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam
               harum blanditiis mollitia?
            </div>
         </section>

         <Suspense fallback={<SpinLoader />}>{/* <PostsList /> */}</Suspense>
         <footer>
            <p className='text-6xl font-bold text-center py-8'>Footer</p>
         </footer>
      </Container>
   );
}
