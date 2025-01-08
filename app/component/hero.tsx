import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-purple-400 dark:to-pink-600">
          Parth kalathiya 
        </h1>
        <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-purple-400 dark:to-pink-600">
          AI/ML & Full Stack Developer
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Crafting intelligent solutions with MERN stack, React Native, and cutting-edge AI/ML technologies.
        </p>
        <Button asChild>
          <a href="mailto:parthkalathiya2005@gmail.com" aria-label="Email" className="bg-primary hover:bg-primary/90 dark:hover:bg-purple-400 text-white font-bold py-2 px-6 rounded-full transition-colors">
          <Mail className="h-6 w-6" /> Get in Touch
          </a>
        </Button>
      </div>
    </section>
  )
}

