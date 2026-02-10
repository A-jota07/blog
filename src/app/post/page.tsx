import { findBySlugCached } from '@/lib/post/queries';

type PostSlugPageProps = {
   params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostSlugPageProps) {
   const { slug } = await params;

   const post = await findBySlugCached(slug);

   return (
      <div>
         <p>{post.content}</p>
      </div>
   );
}
