import { findBySlugCached } from '@/lib/post/queries';
import { Metadata } from 'next';

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

export default async function PostPage({ params }: PostSlugPageProps) {
   const { slug } = await params;

   const post = await findBySlugCached(slug);

   return (
      <div>
         <p>{post.content}</p>
      </div>
   );
}
