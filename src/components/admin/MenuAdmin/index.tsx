import clsx from 'clsx';
import { FileTextIcon, HouseIcon } from 'lucide-react';
import Link from 'next/link';

export function MenuAdmin() {
   const navCalsses = clsx(
      'bg-slate-900 text-slate-100 rounded-lg',
      'flex flex-col mb-8',
      'sm:flex-row sm:flex-wrap',
      'h-10',
   );
   const linkClasses = clsx(
      '[&>svg]:w-4 [&>svg]:h-4 px-4',
      'flex items-center justify-start gap-2',
      'transition hover:bg-slate-800 rounded-lg',
      'h-10',
      'shrink-0',
   );

   return (
      <nav className={navCalsses}>
         <a className={linkClasses} href='/' target='_blank'>
            <HouseIcon />
            Home
         </a>

         <Link className={linkClasses} href='/admin/post'>
            <FileTextIcon />
            Posts
         </Link>
      </nav>
   );
}
