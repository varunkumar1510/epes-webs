
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

// Sample gallery images - replace with your actual images
const galleryImages = [
  { 
    src: '/gallery/project1.jpg', 
    alt: 'Power substation installation',
    caption: 'High-voltage substation installation for industrial client'
  },
  { 
    src: '/gallery/project2.jpg', 
    alt: 'Transformer maintenance',
    caption: 'Preventive maintenance on power transformers'
  },
  { 
    src: '/gallery/project3.jpg', 
    alt: 'Testing equipment',
    caption: 'High precision testing of electrical safety systems'
  },
  { 
    src: '/gallery/project4.jpg', 
    alt: 'Cable installation',
    caption: 'High-voltage cable installation and testing'
  },
  { 
    src: '/gallery/project5.jpg', 
    alt: 'Control panel',
    caption: 'Custom control panel design and implementation'
  },
  { 
    src: '/gallery/project6.jpg', 
    alt: 'Thermal imaging',
    caption: 'Thermal imaging analysis of electrical equipment'
  },
];

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = sectionRef.current?.querySelectorAll('.reveal-item');
    children?.forEach((child) => observer.observe(child));

    return () => {
      children?.forEach((child) => observer.unobserve(child));
    };
  }, []);

  return (
    <section id="gallery" className="section-spacing bg-background relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container-section relative z-10" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title reveal-item opacity-0 transition-opacity duration-300">Our Gallery</span>
          <h2 className="heading-lg mb-6 reveal-item opacity-0 transition-opacity duration-300">See Our Work in Action</h2>
          <p className="subtitle reveal-item opacity-0 transition-opacity duration-300">
            Browse through our project gallery to see examples of our electrical engineering solutions and services.
          </p>
        </div>
        
        <div className="reveal-item opacity-0 transition-opacity duration-300">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardContent className="p-0">
                        <AspectRatio ratio={16 / 9}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              // Fallback for missing images
                              const target = e.target as HTMLImageElement;
                              target.onerror = null;
                              target.src = '/placeholder.svg';
                            }}
                          />
                        </AspectRatio>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground">{image.caption}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:-left-4" />
            <CarouselNext className="md:-right-4" />
          </Carousel>
        </div>
        
        <div className="mt-16 text-center reveal-item opacity-0 transition-opacity duration-300">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-standard inline-block focus-ring"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
