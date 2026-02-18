import { Button } from '@/components/Button';
import { InputCheckbox } from '@/components/InputCheckbox';
import { InputText } from '@/components/InputText';

export const dynamic = 'force-static';

export default async function AdminPostNewPage() {
   return (
      <form action='' className='mb-16'>
         <div className='flex flex-col gap-6'>
            <InputText
               labelText='Nome'
               placeholder='Digite seu nome'
               type='password'
            />
            <InputText
               labelText='Sobrenome'
               placeholder='Digite seu sobrenome'
            />

            <InputCheckbox labelText='Sobrenome' />

            <div className='mt-4'>
               <Button type='submit'>Enviar</Button>
            </div>
         </div>
      </form>
   );
}
