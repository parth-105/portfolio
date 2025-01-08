"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

import LLM from '@/app/Asets/LLM.jpg'
import AWS from '@/app/Asets/AWS.jpg'
import NLP from '@/app/Asets/NLP.jpg'

const certificates = [
    {
      title: 'Large language models',
      issuer: 'Google-Cloud',
      date: 'December 2024',
      description: 'developing and integrating applications with Large Language Models (LLMs) and other enterprise services.',
      image: LLM
    },
    {
      title: 'AWS Certified technical essentials',
      issuer: 'Amazon Web Services',
      date: 'January 2025',
      description: 'Expertise in essential of AWS services and common solutions.',
      image: AWS
    },
    {
      title: 'Natural language processing',
      issuer: 'simplilearn',
      date: 'December 2024',
      description: 'Proficiency in building and training neural networks using NLP.',
      image: NLP
    }
  ]
  

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const openCertificate = (cert) => {
    setSelectedCertificate(cert)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  return (
    <section id="certificates" className="py-20 bg-secondary/50 dark:bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 dark:hover:shadow-purple-500/40 hover:-translate-y-1 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => openCertificate(cert)}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{cert.title}</CardTitle>
                <CardDescription>{cert.issuer} - {cert.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedCertificate !== null} onOpenChange={closeCertificate}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCertificate?.title}</DialogTitle>
            <DialogDescription>
              {selectedCertificate?.issuer} - {selectedCertificate?.date}
            </DialogDescription>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={closeCertificate}
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
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-lg"
              />
              <p className="mt-4 text-muted-foreground">{selectedCertificate.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

