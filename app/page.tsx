import Header from './component/header'
import Hero from './component/hero'
import Skills from './component/skills'
import Projects from './component/projects'
import Experience from './component/experience'
import Certificates from './component/certificates'
import Contact from './component/contact'
import Footer from './component/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary text-foreground">
      <div className="absolute inset-0 bg-[url('/ai-pattern.svg')] opacity-5 bg-repeat dark:opacity-10"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Certificates />
        {/* <Contact /> */}
        <Footer />
      </div>
    </main>
  )
}

