import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';
import { ManagePostForm } from '@/components/ManageForms';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
   return <ManagePostForm />;
}
