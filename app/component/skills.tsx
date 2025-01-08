import { Badge } from '@/components/ui/badge'

const skills = [
  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn',
  'JavaScript', 'TypeScript', 'React', , 'Next.js', 'React Native',
  'Node.js', 'Express', 'MongoDB', 'GraphQL',
  , 'AWS', 'Git' , 'SQL' , 'Scikit-Learn' , 'Langchain'
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/50 dark:bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="text-lg py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary dark:text-primary-foreground dark:hover:bg-purple-400 dark:hover:text-white transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

