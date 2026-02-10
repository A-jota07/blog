import { findBySlugCached } from '@/lib/post/queries';

type SinglePostProps = {
   slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
   const post = await findBySlugCached(slug);

   return (
      <div>
         <p>{post.content}</p>
      </div>
   );
}
