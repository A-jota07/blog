import { postRepository } from '@/repositories/post';
import { cache } from 'react';

export const findAllPublicPosts = cache(
   async () => await postRepository.findAllPublic(),
);

export const findBySlugCached = cache(
   async (slug: string) => await postRepository.findBySlug(slug),
);

export const findByIdCache = cache(
   async (id: string) => await postRepository.findBySlug(id),
);
