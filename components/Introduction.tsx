"use client"

import Image from 'next/image'
import { useLanguage } from './language-provider'

export default function Introduction() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Hi, I'm Gabriel Silva",
      subtitle: "Software Developer",
      description: "Experienced in .NET and Python, I specialize in building scalable APIs, cloud-based solutions, and modern web applications. Passionate about solving challenges through efficient and maintainable code."
    },
    pt: {
      title: "Olá, sou Gabriel Silva",
      subtitle: "Desenvolvedor de Software",
      description: "Experiente em .NET e Python, especializado no desenvolvimento de APIs escaláveis, soluções em nuvem e aplicações web modernas. Apaixonado por resolver desafios com código eficiente e de fácil manutenção."
    }
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="/GB.jpg"
          alt="Gabriel Silva"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">{content[language].title}</h1>
        <h2 className="text-2xl mb-6 text-blue-600 dark:text-blue-400">{content[language].subtitle}</h2>
        <p className="max-w-2xl mx-auto text-lg">{content[language].description}</p>
      </div>
    </section>
  )
}

