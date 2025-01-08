import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./component/theme-provider"

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

