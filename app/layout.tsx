import '@/styles/globals.css'
import { Archivo, Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from "./component/theme-provider"

const archivo = Archivo({ 
  subsets: ['latin'],
  variable: '--font-archivo',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'Parth kalathiya - AI/ML & Full Stack Developer',
  description: 'Portfolio of an AI/ML specialist and MERN stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

