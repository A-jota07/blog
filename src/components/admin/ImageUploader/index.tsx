'use client';

import { Button } from '@/components/Button';
import clsx from 'clsx';
import { ImageUpIcon } from 'lucide-react';
import { useRef } from 'react';

export function ImageUploader() {
   const fileInputRef = useRef<HTMLInputElement>(null);

   function handleChooseFile() {
      if (!fileInputRef.current) return;

      fileInputRef.current.click();
   }

   const ImageClasses = clsx(
      'bg-slate-400 text-slate-800 ',
      'flex flex-wrap items-center justify-start',
      'w-fit gap-2 px-3 py-2',
      'text-sm rounded-md cursor-pointer hover:bg-slate-500',
      'transition-transform duration-300 hover:scale-110',
   );

   return (
      <div className='flex flex-col gap-2 py-4'>
         <Button
            onClick={handleChooseFile}
            type='button'
            className={ImageClasses}
         >
            <ImageUpIcon />
            Enviar uma imagem
         </Button>

         <input
            ref={fileInputRef}
            className='hidden'
            name='file'
            type='file'
            accept='image/*'
         />
      </div>
   );
}
