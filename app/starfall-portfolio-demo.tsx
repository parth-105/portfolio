"use client"

import { useState } from 'react'
import Image from 'next/image'
import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import CHAT from '@/app/Asets/CHAT.png'
import LMS from '@/app/Asets/LMS.png'
import RAG from '@/app/Asets/RAG.png'
import LLM from '@/app/Asets/LLM.jpg'
import AWS from '@/app/Asets/AWS.jpg'
import NLP from '@/app/Asets/NLP.jpg'

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
    subtitle: 'Crafting intelligent solutions with MERN stack, React Native, and cutting-edge AI/ML technologies. Specializing in building scalable web applications and integrating machine learning models into production environments.',
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
      title: 'RAG App',
      description: 'Our RAG app leverages Gemini, FAISS, Python, and LangChain to deliver efficient, accurate, and contextually rich information retrieval and generation.',
      tags: ['Gemini', 'FAISS', 'Python', 'LangChain'],
      link: 'https://chatpdf-one-ebon.vercel.app',
      imageContent: (
        <Image
          src={RAG}
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
          src={LMS}
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
          src={CHAT}
          alt="Chat App"
          width={300}
          height={200}
          className="rounded-xl object-cover w-full h-full"
        />
      ),
    },
  ],
  stats: [
    { value: '3+', label: 'Featured Projects' },
    { value: '15+', label: 'Technologies' },
    { value: '3', label: 'Certifications' },
  ],
  skills: [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn',
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'React Native',
    'Node.js', 'Express', 'MongoDB', 'GraphQL',
    'AWS', 'Git', 'SQL', 'Langchain'
  ],
  certificates: [
    {
      title: 'Large language models',
      issuer: 'Google-Cloud',
      date: 'December 2024',
      description: 'Developing and integrating applications with Large Language Models (LLMs) and other enterprise services.',
      imageSrc: LLM,
      image: (
        <Image
          src={LLM}
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
      imageSrc: AWS,
      image: (
        <Image
          src={AWS}
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
      imageSrc: NLP,
      image: (
        <Image
          src={NLP}
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

