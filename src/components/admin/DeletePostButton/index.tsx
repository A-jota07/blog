'use client';

import clsx from 'clsx';
import { Trash2Icon } from 'lucide-react';
import { useTransition } from 'react';

type DeletePostButtonProps = {
   id: string;
   title: string;
};

export function DeletePostButton({ id, title }: DeletePostButtonProps) {
   const [isPending, startTransition] = useTransition();

   function handleClick() {
      if (!confirm('tem certeza?')) return;

      startTransition(async () => {});
   }

   return (
      <button
         className={clsx(
            'text-red-500 cursor-pointer transition',
            '[&_svg]:w-4 [&_svg]:h-4 ',
            'hover:scale-130 hover:text-red-700',
            'disabled:text-slate-300 disabled:cursor-not-allowed',
         )}
         aria-label={`Apagar post: ${id}`}
         title={`Apagar post: ${title}`}
         onClick={handleClick}
         disabled={isPending}
      >
         <Trash2Icon />
      </button>
   );
}
