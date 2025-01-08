import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    title: 'Senior AI/ML Developer',
    company: 'TechInnovate Solutions',
    period: '2020 - Present',
    description: 'Leading AI/ML initiatives and integrating machine learning models into production environments.'
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSphere Systems',
    period: '2018 - 2020',
    description: 'Developed and maintained large-scale web applications using the MERN stack.'
  },
  {
    title: 'Mobile App Developer',
    company: 'MobileFirst Creations',
    period: '2016 - 2018',
    description: 'Created cross-platform mobile applications using React Native and integrated RESTful APIs.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/50 dark:bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index}  className="group">
              <Card key={index} className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-purple-500/20 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl text-primary transition-transform duration-300 group-hover:scale-105">{exp.title}</CardTitle>
                  <CardDescription className="text-card-foreground">{exp.company} | {exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

