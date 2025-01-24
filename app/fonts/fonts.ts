import { Montserrat, Poppins } from 'next/font/google'

export const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    adjustFontFallback: false,
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['600', '700'],
    variable: '--font-heading',
    display: 'swap',
})