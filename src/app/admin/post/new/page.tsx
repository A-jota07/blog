import { ManagePostForm } from '@/components/admin/ManageForms';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
   return <ManagePostForm />;
}
