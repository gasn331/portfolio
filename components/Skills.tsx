"use client"

import { useLanguage } from './language-provider'

const skills = ['C#', '.NET', 'ASP.NET', 'VB.NET', 'Python', 'PyTorch', 'PySpark', 'Data Analysis', 'Data Engineering', 'SQL Server', 'MySQL', 'MongoDB', 'Vue.js', 'JavaScript', 'CSS', 'HTML', 'React', 'Next.js', 'Docker', 'Kafka']

export default function Skills() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Skills"
    },
    pt: {
      title: "Habilidades"
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 bg-blue-500 text-white rounded-full text-lg">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

