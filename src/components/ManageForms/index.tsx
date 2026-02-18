'use client';

import { Button } from '../Button';
import { InputCheckbox } from '../InputCheckbox';
import { InputText } from '../InputText';

export function ManagePostForm() {
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
