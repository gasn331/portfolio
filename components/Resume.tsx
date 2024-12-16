"use client"

import { useLanguage } from './language-provider'

const experiences = [
  {
    title: {
      en: "Software Developer",
      pt: "Desenvolvedor de Software"
    },
    company: "LG lugar de gente",
    period: {
      en: "Mar 2021 - Sep 2024",
      pt: "Mar 2021 - Set 2024"
    },
    responsibilities: {
      en: [
        "Enhanced system functionality through optimized back-end development in C#",
        "Contributed significantly to the development of Windows Forms, Web Forms e ASP.NET applications",
        "Designed and implemented user interfaces with Vue.js, reducing navigation errors and enhancing user satisfaction",
        "Database development using SQL Server and Oracle, consisting of modelling and optmization of queries, also using ORMs, such as NHibernate",
      ],
      pt: [
        "Aprimoramento do sistema de Workflows por meio de desenvolvimento back-end otimizado em C#",
        "Contribuí significativamente para o desenvolvimento de aplicações Windows Forms, Web Forms e ASP.NET",
        "Projetei e implementei interfaces de usuário com Vue.js de acordo com os padrões da indústria, garantindo uma experiência confortável para o usuário",
        "Desenvolvimento de banco de dados utilizando SQL Server e Oracle, consistindo de construção e otimização de consultas, com utilização de ORM, nesse caso NHibernate"
      ]
    },
  },
  {
    title: {
      en: "Software Developer",
      pt: "Desenvolvedor de Software"
    },
    company: "Inforsystem Tecnologia",
    period: {
      en: "Jun 2020 - Mar 2021",
      pt: "Jun 2020 - Mar 2021"
    },
    responsibilities: {
      en: [
        "Developed new features for Delphi applications, improving functionality and user experience",
        "Collaborated effectively with team members to integrate new features seamlessly",
        "Optimized Delphi back-end development for improved system performance",
        "Managed and optimized MySQL database operations, improving data management efficiency",       ,
      ],
      pt: [
        "Desenvolvi novas funcionalidades para aplicações Delphi, melhorando a experiência do usuário",
        "Colaborei de forma eficaz com os membros da equipe para integrar novos recursos",
        "Desenvolvimento back-end otimizado em Delphi para otimização do sistema",
        "Operações de banco de dados MySQL gerenciadas e otimizadas"
      ]
    },
  },
]

const education = [
  {
    degree: {
      en: "MBA in Big Data and Machine Learning",
      pt: "MBA em Big Data e Machine Learning"
    },
    institution: {
      en: "SENAI Goiás",
      pt: "SENAI Goiás"
    },
    year: "2024",
  },
  {
    degree: {
      en: "Bachelor of Science in Computer Science",
      pt: "Bacharelado em Ciência da Computação"
    },
    institution: {
      en: "Federal University of Goiás",
      pt: "Universidade Federal de Goiás"
    },
    year: "2020",
  },
]

export default function Resume() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Resume",
      experience: "Work Experience",
      education: "Education"
    },
    pt: {
      title: "Currículo",
      experience: "Experiência Profissional",
      education: "Educação"
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{content[language].experience}</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-6 border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-semibold">{exp.title[language]}</h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period[language]}</p>
                <ul className="list-disc list-inside mt-2">
                  {exp.responsibilities[language].map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">{content[language].education}</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 border-l-4 border-blue-500 pl-4">
                <h4 className="text-xl font-semibold">{edu.degree[language]}</h4>
                <p className="text-gray-600 dark:text-gray-400">{edu.institution[language]}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

