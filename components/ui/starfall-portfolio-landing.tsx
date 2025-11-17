"use client"

import React, { useEffect, useRef, useState } from 'react';

import * as THREE from 'three';

import Image from 'next/image';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'

import { useTheme } from "next-themes"

// --- TYPE DEFINITIONS FOR PROPS ---

interface NavLink { label: string; href: string; }

interface Project { title: string; description: string; tags: string[]; imageContent?: React.ReactNode; link?: string; }

interface Stat { value: string; label: string; }

interface Certificate { 
  title: string; 
  issuer: string; 
  date: string; 
  description: string; 
  image?: React.ReactNode;
  imageSrc?: string | React.ComponentProps<typeof Image>['src'];
}

export interface PortfolioPageProps {

  logo?: { initials: React.ReactNode; name: React.ReactNode; };

  navLinks?: NavLink[];

  resume?: { label: string; onClick?: () => void; };

  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };

  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };

  projects?: Project[];

  stats?: Stat[];

  skills?: string[];

  certificates?: Certificate[];

  footer?: {
    socialLinks?: {
      github?: string;
      linkedin?: string;
      email?: string;
    };
    copyright?: string;
  };

  showAnimatedBackground?: boolean;

}

// --- INTERNAL ANIMATED BACKGROUND COMPONENT ---

const AuroraBackground: React.FC = () => {

    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!mountRef.current) return;

        const currentMount = mountRef.current;

        const scene = new THREE.Scene();

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.domElement.style.position = 'fixed';

        renderer.domElement.style.top = '0';

        renderer.domElement.style.left = '0';

        renderer.domElement.style.zIndex = '0';

        renderer.domElement.style.display = 'block';

        currentMount.appendChild(renderer.domElement);

        const material = new THREE.ShaderMaterial({

            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } },

            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,

            fragmentShader: `

                uniform float iTime; uniform vec2 iResolution;

                #define NUM_OCTAVES 3

                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }

                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }

                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}

                void main() {

                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;

                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}

                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;

                }`

        });

        const geometry = new THREE.PlaneGeometry(2, 2);

        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        let animationFrameId: number;

        const animate = () => { animationFrameId = requestAnimationFrame(animate); material.uniforms.iTime.value += 0.016; renderer.render(scene, camera); };

        const handleResize = () => { renderer.setSize(window.innerWidth, window.innerHeight); material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight); };

        window.addEventListener('resize', handleResize);

        animate();

        return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement); renderer.dispose(); material.dispose(); geometry.dispose(); };

    }, []);

    return <div ref={mountRef} />;

};

// --- DEFAULT DATA ---

const defaultData = {

  logo: { initials: 'MT', name: 'Meng To' },

  navLinks: [ { label: 'About', href: '#about' }, { label: 'Projects', href: '#projects' }, { label: 'Skills', href: '#skills' } ],

  resume: { label: 'Resume' },

  hero: { titleLine1: 'Creative Developer &', titleLine2Gradient: 'Digital Designer', subtitle: 'I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life.', },

  ctaButtons: { primary: { label: 'View My Work' }, secondary: { label: 'Get In Touch' }, },

  projects: [ { title: 'FinTech Mobile App', description: 'React Native app with AI-powered financial insights.', tags: ['React Native', 'Node.js'] }, { title: 'Data Visualization Platform', description: 'Interactive dashboard for complex data analysis.', tags: ['D3.js', 'Python'] }, { title: '3D Portfolio Site', description: 'Immersive WebGL experience with 3D elements.', tags: ['Three.js', 'WebGL'] }, ],

  stats: [ { value: '50+', label: 'Projects Completed' }, { value: '5+', label: 'Years Experience' }, { value: '15+', label: 'Happy Clients' }, ],

};

// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---

const PortfolioPage: React.FC<PortfolioPageProps> = ({

  logo = defaultData.logo,

  navLinks = defaultData.navLinks,

  resume = defaultData.resume,

  hero = defaultData.hero,

  ctaButtons = defaultData.ctaButtons,

  projects = defaultData.projects,

  stats = defaultData.stats,

  skills = [],

  certificates = [],

  footer,

  showAnimatedBackground = true,

}) => {

  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

    <div className="bg-background text-foreground geist-font relative min-h-screen">

      {showAnimatedBackground && <AuroraBackground />}

      <div className="relative z-10">

        <nav className="w-full px-6 py-4">

            <div className="max-w-7xl mx-auto flex justify-between items-center">

                <div className="flex items-center space-x-2">

                    <div className="w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center">

                        <span className="geist-font text-sm font-bold text-foreground">{logo.initials}</span>

                    </div>

                    <span className="geist-font text-lg font-medium text-foreground">{logo.name}</span>

                </div>

                <div className="hidden md:flex items-center space-x-8">

                    {navLinks.map(link => (

                        <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors inter-font text-sm">{link.label}</a>

                    ))}

                </div>

                <div className="flex items-center gap-3">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="glass-button p-2 rounded-lg text-foreground transition-all duration-300 hover:scale-110 relative w-9 h-9 flex items-center justify-center"
                            aria-label="Toggle theme"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
                            <Moon className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
                        </button>
                    )}
                    <button onClick={resume.onClick} className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium inter-font">{resume.label}</button>
                </div>

            </div>

        </nav>

        <div className="divider" />

        <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">

            <div className="max-w-6xl mx-auto text-center">

                <div className="mb-8 float-animation">

                    <h1 className="md:text-6xl lg:text-7xl leading-[1.1] geist-font text-5xl font-light text-foreground tracking-tight mb-4">

                        {hero.titleLine1}

                        <span className="gradient-text block tracking-tight">{hero.titleLine2Gradient}</span>

                    </h1>

                    <p className="md:text-xl max-w-3xl leading-relaxed inter-font text-lg font-light text-muted-foreground mx-auto">{hero.subtitle}</p>

                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">

                    <button onClick={ctaButtons.primary.onClick} className="primary-button px-6 py-3 text-foreground rounded-lg font-medium text-sm min-w-[160px]">{ctaButtons.primary.label}</button>

                    <button onClick={ctaButtons.secondary.onClick} className="glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3">{ctaButtons.secondary.label}</button>

                </div>

                <div className="divider mb-16" />

                <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">

                    {projects.map((project, index) => {

                        const ProjectContent = () => (
                            <>
                                <div className="project-image rounded-xl h-32 mb-4 flex items-center justify-center overflow-hidden bg-muted/5">{project.imageContent}</div>

                                <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">{project.title}</h3>

                                <p className="text-muted-foreground text-sm inter-font mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2">

                                    {project.tags.map(tag => (

                                        <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">{tag}</span>

                                    ))}

                                </div>
                            </>
                        );

                        return project.link ? (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-card rounded-2xl p-6 text-left cursor-pointer hover:scale-105 transition-transform block"
                            >
                                <ProjectContent />
                            </a>
                        ) : (
                            <div key={index} className="glass-card rounded-2xl p-6 text-left">
                                <ProjectContent />
                            </div>
                        );
                    })}

                </div>

                <div className="divider mb-16" />

                <div id="stats" className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center mb-16">

                    {stats.map((stat, index) => (

                        <React.Fragment key={stat.label}>

                            <div>

                                <div className="text-3xl md:text-4xl font-light text-foreground mb-1 geist-font tracking-tight">{stat.value}</div>

                                <div className="text-muted-foreground text-sm inter-font font-normal">{stat.label}</div>

                            </div>

                            {index < stats.length - 1 && <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-input to-transparent" />}

                        </React.Fragment>

                    ))}

                </div>

                {skills.length > 0 && (
                    <>
                        <div className="divider mb-16" />
                        <div id="skills" className="w-full mb-16">
                            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 geist-font text-center tracking-tight">Skills & Technologies</h2>
                            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                                {skills.filter(skill => skill && skill.trim()).map((skill, index) => (
                                    <span 
                                        key={index} 
                                        className="skill-badge px-4 py-2 rounded-lg text-sm font-medium text-foreground inter-font cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {certificates.length > 0 && (
                    <>
                        <div className="divider mb-16" />
                        <div id="certificates" className="w-full mb-16">
                            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8 geist-font text-center tracking-tight">Certificates</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {certificates.map((cert, index) => (
                                    <div 
                                        key={index} 
                                        onClick={() => setSelectedCertificate(cert)}
                                        className="glass-card rounded-2xl p-6 text-left cursor-pointer hover:scale-105 transition-transform"
                                    >
                                        {cert.image && (
                                            <div className="rounded-xl h-32 mb-4 flex items-center justify-center overflow-hidden">
                                                {cert.image}
                                            </div>
                                        )}
                                        <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">{cert.title}</h3>
                                        <p className="text-muted-foreground text-xs inter-font mb-2">{cert.issuer} - {cert.date}</p>
                                        <p className="text-muted-foreground text-sm inter-font">{cert.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

            </div>

        </main>

      </div>

      {/* Certificate Dialog */}
      <Dialog open={selectedCertificate !== null} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl glass-dialog">
          <DialogHeader>
            <DialogTitle className="geist-font text-2xl">{selectedCertificate?.title}</DialogTitle>
            <DialogDescription className="inter-font">
              {selectedCertificate?.issuer} - {selectedCertificate?.date}
            </DialogDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 glass-button"
              onClick={() => setSelectedCertificate(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </Button>
          </DialogHeader>
          {selectedCertificate && (
            <div className="mt-4">
              {(selectedCertificate.image || selectedCertificate.imageSrc) && (
                <div className="rounded-xl overflow-hidden mb-4 max-h-[70vh] flex items-center justify-center bg-muted/10 p-4">
                  <div className="w-full h-full flex items-center justify-center">
                    {selectedCertificate.imageSrc ? (
                      <Image
                        src={selectedCertificate.imageSrc}
                        alt={selectedCertificate.title}
                        width={800}
                        height={600}
                        className="rounded-xl object-contain w-full h-auto max-h-[70vh]"
                      />
                    ) : selectedCertificate.image ? (
                      <div className="w-full [&>img]:!w-full [&>img]:!h-auto [&>img]:!max-h-[70vh] [&>img]:!object-contain [&>img]:!rounded-xl">
                        {selectedCertificate.image}
                      </div>
                    ) : null}
                  </div>
                </div>
              )}
              <p className="text-muted-foreground inter-font text-sm">{selectedCertificate.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      {footer && (
        <footer className="w-full py-8 px-6 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4">
              {footer.socialLinks && (footer.socialLinks.github || footer.socialLinks.linkedin || footer.socialLinks.email) && (
                <div className="flex space-x-4">
                  {footer.socialLinks.github && (
                    <a
                      href={footer.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="glass-button p-3 rounded-lg hover:scale-110 transition-transform"
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </a>
                  )}
                  {footer.socialLinks.linkedin && (
                    <a
                      href={footer.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="glass-button p-3 rounded-lg hover:scale-110 transition-transform"
                    >
                      <Linkedin className="h-5 w-5 text-foreground" />
                    </a>
                  )}
                  {footer.socialLinks.email && (
                    <a
                      href={`mailto:${footer.socialLinks.email}`}
                      aria-label="Email"
                      className="glass-button p-3 rounded-lg hover:scale-110 transition-transform"
                    >
                      <Mail className="h-5 w-5 text-foreground" />
                    </a>
                  )}
                </div>
              )}
              {footer.copyright && (
                <p className="text-muted-foreground text-sm inter-font text-center">
                  {footer.copyright}
                </p>
              )}
            </div>
          </div>
        </footer>
      )}

    </div>

  );

};

export {PortfolioPage};

