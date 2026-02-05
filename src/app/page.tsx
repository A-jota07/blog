import { Container } from '@/components/Container';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/spinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
   return (
      <Container>
         <header>
            <h1 className='text-6xl font-bold text-center py-8'>
               Aqui é a HEADER
            </h1>
         </header>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            nulla provident ipsum, aliquid magnam eum harum facere neque quia
            totam doloremque vel vero, autem dolorem ut suscipit repudiandae a
            velit? Ducimus, ex amet quidem cupiditate placeat reiciendis
            consectetur laboriosam. Ut minima illo perspiciatis cumque nihil hic
            tenetur quibusdam enim corrupti.
         </p>
         <Suspense fallback={<SpinLoader />}>{/* <PostsList /> */}</Suspense>
         <footer>
            <p className='text-6xl font-bold text-center py-8'>Footer</p>
         </footer>
      </Container>
   );
}
