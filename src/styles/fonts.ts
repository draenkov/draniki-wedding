import { Montserrat_Alternates } from 'next/font/google';
import localFont from 'next/font/local';

export const fontPrimary = Montserrat_Alternates({ weight: ['400', '600'] });
export const fontAccent = localFont({
    src: 'fonts/Caravan.otf',
    weight: '400',
});
