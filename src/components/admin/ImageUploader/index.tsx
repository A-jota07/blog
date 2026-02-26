'use client';

import { uploadImageAction } from '@/actions/upload/upload-image-action';
import { Button } from '@/components/Button';
import clsx from 'clsx';
import { ImageUpIcon } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';
import { toast } from 'react-toastify';

type ImageUploaderProps = {
   disabled?: boolean;
};

export function ImageUploader({ disabled = false }: ImageUploaderProps) {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [isUploading, startTransition] = useTransition();
   const [imgUrl, setImgUrl] = useState('');

   function handleChooseFile() {
      if (!fileInputRef.current) return;

      fileInputRef.current.click();
   }

   function handleChange() {
      toast.dismiss();

      if (!fileInputRef.current) {
         setImgUrl('');
         return;
      }

      const fileInput = fileInputRef.current;
      const file = fileInput?.files?.[0];

      if (!file) {
         setImgUrl('');
         return;
      }

      const uploadMaxSize =
         Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE) || 921600;

      if (file.size > uploadMaxSize) {
         const readableMaxSize = uploadMaxSize / 1024;
         toast.error(`Imagem muito grande. Máx.: ${readableMaxSize}KB.`);

         fileInput.value = '';
         setImgUrl('');
         return;
      }

      const formData = new FormData();
      formData.append('file', file);

      startTransition(async () => {
         const result = uploadImageAction(formData);

         if ((await result).error) {
            toast.error((await result).error);
            fileInput.value = '';
            setImgUrl('');
            return;
         }

         setImgUrl((await result).url);
         toast.success('Imagem enviada');
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
            disabled={isUploading || disabled}
         >
            <ImageUpIcon />
            Enviar uma imagem
         </Button>

         {!!imgUrl && (
            <div className='flex flex-col gap-4 py-4'>
               <p>
                  <b>URL:</b> {imgUrl}
               </p>
               {/* eslint-disable-next-line */}
               <img
                  className={clsx(
                     'transition-transform duration-300 hover:scale-110',
                     'rounded-lg',
                  )}
                  src={imgUrl}
               />
            </div>
         )}
         <input
            onChange={handleChange}
            ref={fileInputRef}
            className='hidden'
            name='file'
            type='file'
            accept='image/*'
            disabled={isUploading || disabled}
         />
      </div>
   );
}
