'use client';

import { useState } from 'react';
import { Button } from '../Button';
import { InputCheckbox } from '../InputCheckbox';
import { InputText } from '../InputText';
import { MarkdownEditor } from '../MarkdownEditor';

export function ManagePostForm() {
   const [contentValue, setContentValue] = useState('');

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

            <MarkdownEditor
               labelText='Conteúdo'
               disabled={false}
               textAreaName='content'
               value={contentValue}
               setValue={setContentValue}
            />

            <div className='mt-4'>
               <Button type='submit'>Enviar</Button>
            </div>
         </div>
      </form>
   );
}
