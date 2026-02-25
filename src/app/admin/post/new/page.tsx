import { ManagePostForm } from '@/components/admin/ManageForms';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
   title: 'Criar Post',
};

export default async function AdminPostNewPage() {
   return (
      <div className='flex flex-col gap-6'>
         <h1 className='text-xl font-extrabold'>Criar Post</h1>
         <ManagePostForm mode='create' />
      </div>
   );
}
