'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import { IMAGE_UPLOAD_MAX_SIZE } from '@/lib/constants';
import clsx from 'clsx';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useTransition } from 'react';
import { toast } from 'react-toastify';

export function ImageUploader() {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [isUploading, startTransition] = useTransition();

   function handleChooseFile() {
      if (!fileInputRef.current) return;

      fileInputRef.current.click();
   }

   function handleChange() {
      toast.dismiss();

      if (!fileInputRef.current) return;

      const fileInput = fileInputRef.current;
      const file = fileInput?.files?.[0];

      if (!file) return;

      if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
         const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
         toast.error(`Imagem muito grande. Máx.: ${readableMaxSize}KB.`);

         fileInput.value = '';
         return;
      }

      const formData = new FormData();
      formData.append('file', file);

      startTransition(async () => {
         const result = uploadImageAction(formData);

         if (result.error) {
            toast.error((await result).error);
            return;
         }

         toast.success((await result).url);
      });

      fileInput.value = '';
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
            onChange={handleChange}
            ref={fileInputRef}
            className='hidden'
            name='file'
            type='file'
            accept='image/*'
         />
      </div>
   );
}
