import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <Introduction />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
}

