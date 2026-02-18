import { Button } from '@/components/Button';
import { InputText } from '@/components/InputText';
import { TrashIcon } from 'lucide-react';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
   return (
      <div className='flex flex-col gap-6'>
         <InputText
            labelText='Nome'
            placeholder='Digite seu nome'
            type='name'
         />

         <InputText
            labelText='Senha'
            placeholder='Digite seu nome'
            type='password'
         />
         <InputText labelText='Sobrenome' placeholder='Digite seu sobrenome' />
      </div>
   );
}
