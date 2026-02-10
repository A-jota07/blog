type PostSlugPageProps = {
   params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostSlugPageProps) {
   const { slug } = await params;
   return <h1 className='text-7xl font-extrabold py-16'>PostPage: {slug}</h1>;
}
