import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import CHAT from '@/app/Asets/CHAT.png'
import LMS from '@/app/Asets/LMS.png'
import RAG from '@/app/Asets/RAG.png'

const projects = [
  {
    title: 'CalcBaba Automation Engine',
    description: 'Developed a fully automated personal finance platform with 8 distinct AI-driven pipelines. Built an autonomous content engine using Groq\'s LLaMA 3.3 to draft, deploy, and index daily articles. Engineered a self-healing SEO system that pulls weekly Google Search Console metrics, uses the Tavily API for live financial rate research, and automatically patches TSX meta tags if CTR drops. Includes automated internal link meshing and PageSpeed monitoring.',
    tags: ['Next.js', 'TypeScript', 'Python', 'LLaMA 3.3', 'SEO Automation'],
    link: 'https://www.calcbaba.in',
    image: '/calcbaba.png'
  },
  {
    title: 'Virtual-Try-On-System',
    description: 'Engineered an advanced Generative AI computer vision application that allows users to virtually try on clothing. Utilized HuggingFace Diffusers and Transformers to handle complex image synthesis and clothing warping. Built a robust image preprocessing pipeline with OpenCV and scikit-image, and served the model interactively using a Gradio web interface.',
    tags: ['Python', 'Diffusers', 'Computer Vision', 'Generative AI', 'Gradio'],
    link: 'https://github.com/parth-105/Virtual-Try-On-System',
    image: '/virtual_try_on.png'
  },
  {
    title: 'Csv-Analytics-Agent',
    description: 'Built a modern, highly responsive React frontend for an AI-powered CSV Analytics Agent. Utilized Vite for rapid build tooling and Tailwind CSS for a sleek, utility-first design. The interface allows users to upload datasets and interact with an AI agent to extract insights, visualize data, and generate analytical reports seamlessly.',
    tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'AI Agent'],
    link: 'https://github.com/parth-105/Csv-Analytics-Agent',
    image: '/csv_analytics.png'
  },
  {
    title: 'Cotton-Leaf Disease Detection',
    description: 'Developed an end-to-end Machine Learning solution to aid farmers in crop management. Trained a deep learning image classification model using TensorFlow and Keras to accurately detect various diseases from images of cotton leaves. Deployed the model via a Flask web application that cross-references a JSON database to recommend specific agricultural cures.',
    tags: ['Python', 'TensorFlow', 'Flask', 'Machine Learning', 'Computer Vision'],
    link: 'https://github.com/parth-105/Cotton-Leaf-Disease-Detection-Cure-Recommendation-System',
    image: '/cotton_leaf.png'
  },
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
            <Card className="bg-card h-[450px] border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-purple-500/40 hover:-translate-y-1 dark:hover:bg-gray-800 flex flex-col">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="flex flex-col h-full">
                <ProjectContent project={project} />
              </a>
            ) : (
              <div className="flex flex-col h-full">
                <ProjectContent project={project} />
              </div>
            )}
            </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectContent({ project }: { project: any }) {
  return (
    <>
      <CardHeader>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={200}
            className="rounded-t-lg transition-all duration-300 group-hover:brightness-110"
          />
        ) : (
          <div className="h-48 w-full bg-muted rounded-t-lg flex items-center justify-center text-muted-foreground text-sm font-medium">
            {project.title}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <CardTitle className="text-xl mb-2 transition-transform duration-300 group-hover:scale-105">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-4">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-primary text-primary-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </>
  )
}

