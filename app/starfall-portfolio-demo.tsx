"use client"

import Image from 'next/image'
import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";

const customPortfolioData: PortfolioPageProps = {
  logo: {
    initials: 'PK',
    name: 'Parth Kalathiya',
  },
  navLinks: [
    { label: 'Home', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certificates', href: '#certificates' },
  ],
  resume: {
    label: 'Resume',
    onClick: () => {
      const pdfUrl = '/Resume_Parth_Kalathiya.pdf';
      const fileName = 'Resume_Parth_Kalathiya.pdf';
      
      // Open PDF in new tab
      window.open(pdfUrl, '_blank');
      
      // Trigger download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  hero: {
    titleLine1: 'AI/ML & Full Stack',
    titleLine2Gradient: 'Developer',
    subtitle: (
      <>
        Crafting intelligent solutions with{' '}
        <span className="font-semibold text-primary dark:text-cyan-300 bg-primary/10 dark:bg-cyan-500/15 border border-primary/30 dark:border-cyan-400/30 px-2 py-0.5 rounded-md shadow-[0_0_12px_rgba(59,130,246,0.25)] inline-block my-0.5">
          MERN stack
        </span>
        ,{' '}
        <span className="font-semibold text-primary dark:text-cyan-300 bg-primary/10 dark:bg-cyan-500/15 border border-primary/30 dark:border-cyan-400/30 px-2 py-0.5 rounded-md shadow-[0_0_12px_rgba(59,130,246,0.25)] inline-block my-0.5">
          React Native
        </span>
        , and cutting-edge{' '}
        <span className="font-semibold text-primary dark:text-cyan-300 bg-primary/10 dark:bg-cyan-500/15 border border-primary/30 dark:border-cyan-400/30 px-2 py-0.5 rounded-md shadow-[0_0_12px_rgba(59,130,246,0.25)] inline-block my-0.5">
          AI/ML technologies
        </span>
        . Specializing in building{' '}
        <span className="font-medium text-foreground underline decoration-primary/50 underline-offset-4">
          scalable web applications
        </span>{' '}
        and integrating{' '}
        <span className="font-medium text-foreground underline decoration-primary/50 underline-offset-4">
          machine learning models
        </span>{' '}
        into production environments.
      </>
    ),
  },
  ctaButtons: {
    primary: {
      label: 'View My Work',
      onClick: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      },
    },
    secondary: {
      label: 'Get In Touch',
      onClick: () => {
        window.location.href = 'mailto:parthkalathiya2005@gmail.com';
      },
    },
  },
  projects: [
    {
      title: 'CalcBaba Automation Engine',
      description: 'Developed a fully automated personal finance platform with 8 distinct AI-driven pipelines. Built an autonomous content engine using Groq\'s LLaMA 3.3 to draft, deploy, and index daily articles. Engineered a self-healing SEO system that pulls weekly Google Search Console metrics, uses the Tavily API for live financial rate research, and automatically patches TSX meta tags if CTR drops. Includes automated internal link meshing and PageSpeed monitoring.',
      tags: ['Next.js', 'TypeScript', 'Python', 'LLaMA 3.3', 'SEO Automation'],
      link: 'https://www.calcbaba.in',
      imageContent: (
        <Image
          src="/calcbaba.png"
          alt="CalcBaba Automation Engine"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'Virtual-Try-On-System',
      description: 'Engineered an advanced Generative AI computer vision application that allows users to virtually try on clothing. Utilized HuggingFace Diffusers and Transformers to handle complex image synthesis and clothing warping. Built a robust image preprocessing pipeline with OpenCV and scikit-image, and served the model interactively using a Gradio web interface.',
      tags: ['Python', 'Diffusers', 'Computer Vision', 'Generative AI', 'Gradio'],
      link: 'https://github.com/parth-105/Virtual-Try-On-System',
      imageContent: (
        <Image
          src="/virtual_try_on.png"
          alt="Virtual Try-On System"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'Csv-Analytics-Agent',
      description: 'Built a modern, highly responsive React frontend for an AI-powered CSV Analytics Agent. Utilized Vite for rapid build tooling and Tailwind CSS for a sleek, utility-first design. The interface allows users to upload datasets and interact with an AI agent to extract insights, visualize data, and generate analytical reports seamlessly.',
      tags: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'AI Agent'],
      link: 'https://github.com/parth-105/Csv-Analytics-Agent',
      imageContent: (
        <Image
          src="/csv_analytics.png"
          alt="CSV Analytics Agent"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'Cotton-Leaf Disease Detection',
      description: 'Developed an end-to-end Machine Learning solution to aid farmers in crop management. Trained a deep learning image classification model using TensorFlow and Keras to accurately detect various diseases from images of cotton leaves. Deployed the model via a Flask web application that cross-references a JSON database to recommend specific agricultural cures.',
      tags: ['Python', 'TensorFlow', 'Flask', 'Machine Learning', 'Computer Vision'],
      link: 'https://github.com/parth-105/Cotton-Leaf-Disease-Detection-Cure-Recommendation-System',
      imageContent: (
        <Image
          src="/cotton_leaf.png"
          alt="Cotton Leaf ML"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'RAG App',
      description: 'Our RAG app leverages Gemini, FAISS, Python, and LangChain to deliver efficient, accurate, and contextually rich information retrieval and generation.',
      tags: ['Gemini', 'FAISS', 'Python', 'LangChain'],
      link: 'https://chatpdf-one-ebon.vercel.app',
      imageContent: (
        <Image
          src="/RAG.png"
          alt="RAG App"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'Next.js LMS Platform',
      description: 'Our LMS leverages Next.js, MongoDB, JavaScript, and Stripe to deliver an efficient, scalable, and secure learning experience with live classes, assignment submission, exams, and results.',
      tags: ['MongoDB', 'Stripe', 'Next.js', 'Node.js'],
      link: 'https://github.com/parth-105/e-lms',
      imageContent: (
        <Image
          src="/LMS.png"
          alt="LMS Platform"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'MERN Stack Chat App',
      description: 'Chat app leverages the MERN stack to deliver a real-time, scalable, and user-friendly messaging experience.',
      tags: ['Node.js', 'React', 'Web-sockets', 'MongoDB', 'Firebase'],
      link: 'https://github.com/parth-105/chates',
      imageContent: (
        <Image
          src="/CHAT.png"
          alt="Chat App"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    }
  ],
  stats: [
    { value: '7+', label: 'Featured Projects' },
    { value: '20+', label: 'Technologies' },
    { value: '3', label: 'Certifications' },
  ],
  skills: [
    'MERN stack', 'React Native', 'AI/ML', 'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Diffusers',
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS',
    'Node.js', 'Express', 'Flask', 'MongoDB', 'GraphQL',
    'AWS', 'Git', 'SQL', 'Langchain', 'LLaMA 3.3', 'Groq'
  ],
  certificates: [
    {
      title: 'Large language models',
      issuer: 'Google-Cloud',
      date: 'December 2024',
      description: 'Developing and integrating applications with Large Language Models (LLMs) and other enterprise services.',
      imageSrc: "/LLM.jpg",
      image: (
        <Image
          src="/LLM.jpg"
          alt="Large Language Models Certificate"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'AWS Certified technical essentials',
      issuer: 'Amazon Web Services',
      date: 'January 2025',
      description: 'Expertise in essential of AWS services and common solutions.',
      imageSrc: "/AWS.jpg",
      image: (
        <Image
          src="/AWS.jpg"
          alt="AWS Certificate"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
    {
      title: 'Natural language processing',
      issuer: 'simplilearn',
      date: 'December 2024',
      description: 'Proficiency in building and training neural networks using NLP.',
      imageSrc: "/NLP.jpg",
      image: (
        <Image
          src="/NLP.jpg"
          alt="NLP Certificate"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
  ],
  footer: {
    socialLinks: {
      github: 'https://github.com/parth-105',
      linkedin: 'https://www.linkedin.com/in/parth-kalathiya-7bb521302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      email: 'parthkalathiya2005@gmail.com',
    },
    copyright: `© ${new Date().getFullYear()} Parth Kalathiya. All rights reserved.`,
  },
  showAnimatedBackground: true,
};

const StarfallPortfolioDemo = () => {
  return <PortfolioPage {...customPortfolioData} />;
};

export { StarfallPortfolioDemo };

