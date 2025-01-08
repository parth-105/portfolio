import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import CHAT from '@/app/Asets/CHAT.png'
import LMS from '@/app/Asets/LMS.png'
import RAG from '@/app/Asets/RAG.png'

const projects = [
  {
    title: 'RAG app',
    description: 'Our RAG app leverages Gemini, FAISS, Python, and LangChain to deliver efficient, accurate, and contextually rich information retrieval and generation.',
    image: RAG,
    tags: ['Gemini', 'FAISS', 'Python' , 'LangChain'],
    link: 'https://chatpdf-one-ebon.vercel.app'
  },
  {
    title: 'Next.js LMS Platform',
    description: 'Our LMS leverages Next.js, MongoDB, JavaScript, and Stripe to deliver an efficient, scalable, and secure learning experience with live classes, assignment submission, exams, and results.',
    image: LMS,
    tags: ['MongoDB', 'stripe', 'Next.js', 'Node.js'],
    // link: 'https://github.com/parth-105/e-lms'https://chatpdf-one-ebon.vercel.app/
    link: 'https://github.com/parth-105/e-lms'
  },
  {
    title: 'MERN stack chat app',
    description: 'chat app leverages the MERN stack to deliver a real-time, scalable, and user-friendly messaging experience.',
    image: CHAT,
    tags: ['Node.js', 'React', 'Web-sokects', 'MongoDB' , 'firebase'],
    link: 'https://github.com/parth-105/chates'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
            <Card key={index} className="bg-card h-[450px] border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-purple-500/40 hover:-translate-y-1 dark:hover:bg-gray-800">
            <a href={project.link} target="_blank">
              <CardHeader>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg transition-all duration-300 group-hover:brightness-110"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2 transition-transform duration-300 group-hover:scale-105">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
              </a>
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

