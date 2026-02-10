import { findBySlugCache } from '@/lib/post/queries';
import { notFound } from 'next/navigation';

type PostSlugPageProps = {
   params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostSlugPageProps) {
   const { slug } = await params;

   let post;

   try {
      post = await findBySlugCache(slug);
   } catch {
      post = undefined;
   }

   if (!post) notFound();

   return <h1 className='text-7xl font-extrabold py-16'>PostPage: {slug}</h1>;
}
