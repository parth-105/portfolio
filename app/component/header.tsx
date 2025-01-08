import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    //['Home', 'Skills', 'Projects', 'Experience', 'Certificates', 'Contact']
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-6 md:space-x-8">
          {['Home', 'Skills', 'Projects', 'Certificates'].map((item) => (
            <li key={item}>
              <Link 
                href={`#${item.toLowerCase()}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}

