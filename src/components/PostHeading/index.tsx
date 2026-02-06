import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
   children: React.ReactNode;
   url: string;
   as?: 'h1' | 'h2';
};

export function PostHeanding({
   children,
   url,
   as: Tag = 'h2',
}: PostHeadingProps) {
   const headingClassesMap = {
      h1: 'text-2xl block mb-4 sm:text-4xl',
      h2: 'text-2xl block mb-4 sm:text-4xl',
   };

   const commonClasses = 'font-extrabold';
   return (
      <Tag className={clsx(headingClassesMap[Tag], commonClasses)}>
         <Link href={url}>{children}</Link>
      </Tag>
   );
}
