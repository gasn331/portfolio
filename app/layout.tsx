import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import { LanguageProvider } from '../components/language-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Silva - Software Developer Portfolio'
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
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

