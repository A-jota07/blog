import { ZodFormattedError } from 'zod';

export function getZodErrorMessages<T>(error: ZodFormattedError<T>): string[] {
   return Object.values(error)
      .flatMap(field => {
         if (
            typeof field === 'object' &&
            field !== null &&
            '_errors' in field
         ) {
            return field._errors;
         }

         return [];
      })
      .filter(Boolean);
}
