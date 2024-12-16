"use client"

import { useLanguage } from './language-provider'

const projects = [
  {
    title: {
      en: "Store API",
      pt: "Store API"
    },
    description: {
      en: "The goal of this project is to create a Web API in ASP.NET Core that allows users to manage orders in an e-commerce store. The API includes functionalities such as adding/removing products to/from an order, closing orders, and retrieving orders by their ID.",
      pt: "O objetivo desse projeto é implementar uma Web API em ASP.NET Core que permite ao usuário gerenciar pedidos em um ambiente de e-commerce. Essa API inclui funcionalidades para adicionar/remover produtos de um pedido, fechar pedidos e consultar pedidos pelo seu ID."
    },
    technologies: ['C#', 'ASP.NET Core', 'DDD'],
    github: "https://github.com/gasn331/Store",
  },
  {
    title: {
      en: "This website",
      pt: "Este site"
    },
    description: {
      en: "This website has the purpose of introducing me as a professional and showcase some of my skills with Front-end development.",
      pt: "Esse site tem o propósito de me apresentar como profissional e demonstrar parte das minhas habilidades com desenvolvimento Frond-end."
    },
    technologies: ['Next.js', 'React', 'TailwindCSS'],
    github: "https://github.com/gasn331/portfolio",
  },
  {
    title: {
      en: "Short-term Forecast using Multi-layer Perceptron",
      pt: "Previsão do Tempo de Curto Prazo Utilizando Multi-layer Perceptron"
    },
    description: {
      en: "This project implements a temperature forecaster that predicts hourly temperatures for the next 24 hours using data from INMET. Data from Goiânia, Goiás (2015–2024) were used for training.",
      pt: "Nesse projeto implementei um previsor de temperatura que prevê a temperatura horária das próximas 24 horas, os dados utilizados vieram do INMET. Dados da cidade de Goiânia, Goiás no período de 2015 à 2024 foram utilizados para treinamento."
    },
    technologies: ['Python', 'PyTorch', 'Scikit-learn'],
    github: "https://github.com/gasn331/ShortTermForecastMLP",
  },
  {
    title: {
      en: "Convolutional Neural Network For Vegetable Classification",
      pt: "Rede Neural Convolucional para Reconhecimento de Vegetais"
    },
    description: {
      en: "This project implements a convolutional neural network (CNN) in PyTorch to classify vegetable images. The goal is to correctly classify different types of vegetables based on a training image dataset.",
      pt: "Este projeto implementa uma rede neural convolucional (CNN) em PyTorch para o reconhecimento de imagens de vegetais. O objetivo é classificar corretamente diferentes tipos de vegetais com base em um conjunto de imagens de treinamento."
    },
    technologies: ['Python', 'PyTorch', 'Scikit-learn'],
    github: "https://github.com/gasn331/CNNClassificadorDeAlimentos",
  },
  {
    title: {
      en: "Data Analysis for Fuel Sales",
      pt: "Análise de Dados de Vendas de Combustíveis"
    },
    description: {
      en: "This project is an application for fuel sales data analysis, using Apache Spark for data processing and Dash for visualization. The system is orchestrated with Docker to facilitate the configuration and execution of all required services.",
      pt: "Este projeto é uma aplicação de análise de dados de vendas de combustíveis, com processamento de dados utilizando Apache Spark e visualização por meio de uma aplicação Dash. O sistema é orquestrado com Docker para facilitar a configuração e execução de todos os serviços necessários."
    },
    technologies: ['Python', 'PySpark', 'PyMongo', 'MongoDB', 'FastAPI', 'Dash', 'Docker'],
    github: "https://github.com/gasn331/VendasCombustiveis",
  },
]

export default function Projects() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Projects"
    },
    pt: {
      title: "Projetos"
    }
  }

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{content[language].title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-800 font-medium text-sm mt-4"
                  >
                    GitHub Repository →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
