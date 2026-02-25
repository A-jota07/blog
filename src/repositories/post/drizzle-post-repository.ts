import { drizzleDb } from '@/db/drizzle';
import { PostModel } from '@/models/post/post-model';
import { logColor } from '@/utils/log-color';
import { PostRepository } from './post-repository';

export class DrizzlePostRepository implements PostRepository {
   async findAllPublic(): Promise<PostModel[]> {
      logColor('findAllPublic', Date.now());

      const posts = await drizzleDb.query.posts.findMany({
         orderBy: (posts, { desc }) => desc(posts.createdAt),
         where: (posts, { eq }) => eq(posts.published, true),
      });

      // @ts-expect-error published esta utilizando boolean
      return posts;
   }

   async findBySlugPublic(slug: string): Promise<PostModel> {
      logColor('findBySlugPublic', Date.now());

      const post = await drizzleDb.query.posts.findFirst({
         where: (posts, { eq, and }) =>
            and(eq(posts.published, true), eq(posts.slug, slug)),
      });

      if (!post) throw new Error('Post não encontrado para Slug');

      // @ts-expect-error published esta utilizando boolean
      return post;
   }

   async findAll(): Promise<PostModel[]> {
      logColor('findAll', Date.now());

      const posts = await drizzleDb.query.posts.findMany({
         orderBy: (posts, { desc }) => desc(posts.createdAt),
      });

      // @ts-expect-error published esta utilizando boolean
      return posts;
   }

   async findById(id: string): Promise<PostModel> {
      const post = await drizzleDb.query.posts.findFirst({
         where: (posts, { eq }) => eq(posts.id, id),
      });

      if (!post) throw new Error('Post não encontrado para ID');

      // @ts-expect-error published esta utilizando boolean
      return post;
   }
}
