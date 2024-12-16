"use client"

import { useLanguage } from './language-provider'

export default function Contact() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Contact Me",
      description: "Feel free to reach out to me through the following platforms:",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-antonio-da-silva" },
        { name: "GitHub", href: "https://github.com/gasn331" },
        { name: "Email", href: "mailto:gabriel.gbss@gmail.com" }
      ]
    },
    pt: {
      title: "Entre em Contato",
      description: "Sinta-se à vontade para entrar em contato comigo pelas seguintes plataformas:",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-antonio-da-silva" },
        { name: "GitHub", href: "https://github.com/gasn331" },
        { name: "Email", href: "mailto:gabriel.gbss@gmail.com" }
      ]
    }
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{content[language].title}</h2>
        <p className="text-lg mb-8">{content[language].description}</p>
        <div className="flex flex-col items-center space-y-4">
          {content[language].links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
