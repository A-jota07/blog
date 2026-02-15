import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/spinLoader';
import { findPostBySlugCached } from '@/lib/post/queries/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
   params: Promise<{ slug: string }>;
};

export async function generateMetadata({
   params,
}: PostSlugPageProps): Promise<Metadata> {
   const { slug } = await params;
   const post = await findPostBySlugCached(slug);

   return {
      title: post.title,
      description: post.excerpt,
   };
}

export default async function PostPage({ params }: PostSlugPageProps) {
   const { slug } = await params;

   return (
      <Suspense fallback={<SpinLoader className='min-20 mb-16' />}>
         <SinglePost slug={slug} />
      </Suspense>
   );
}
