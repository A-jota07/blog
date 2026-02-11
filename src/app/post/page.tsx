import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/spinLoader';
import { findAllPublicPosts, findBySlugCached } from '@/lib/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
   params: Promise<{ slug: string }>;
};

export async function generateMetadata({
   params,
}: PostSlugPageProps): Promise<Metadata> {
   const { slug } = await params;
   const post = await findBySlugCached(slug);

   return {
      title: post.title,
      description: post.excerpt,
   };
}

export async function generateStaticParams() {
   const posts = await findAllPublicPosts();
   const params = posts.map(post => {
      return {
         slug: post.slug,
      };
   });

   console.log(params);

   return params;
}

export default async function PostPage({ params }: PostSlugPageProps) {
   const { slug } = await params;

   return (
      <Suspense fallback={<SpinLoader className='min-20 mb-16' />}>
         <SinglePost slug={slug} />
      </Suspense>
   );
}
