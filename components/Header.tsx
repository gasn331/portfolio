"use client"

import { useTheme } from 'next-themes'
import { useLanguage } from './language-provider'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gabriel Silva</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
            className="px-3 py-1 rounded bg-blue-500 text-white"
          >
            {language === 'en' ? 'PT' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  )
}

