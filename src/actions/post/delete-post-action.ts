'use server';

import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { postRepository } from '@/repositories/post';
import { logColor } from '@/utils/log-color';
import { eq } from 'drizzle-orm';
import { revalidateTag } from 'next/cache';

export async function deletePostAdction(id: string) {
   logColor('' + id);

   if (!id || typeof id !== 'string') {
      return {
         error: 'Dados inválidos',
      };
   }

   const post = await postRepository.findById(id).catch(() => undefined);

   if (!post) {
      return {
         error: 'post não existe',
      };
   }

   await drizzleDb.delete(postsTable).where(eq(postsTable.id, id));

   revalidateTag('posts', 'max');
   revalidateTag(`post-${post.slug}`, 'max');

   return {
      error: '',
   };
}
