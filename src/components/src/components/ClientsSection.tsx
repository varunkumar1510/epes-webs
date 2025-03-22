
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Sample client data - replace with your actual clients
const clients = [
  {logo: '/client-logos/client1.jpeg' },
  { name: 'Ramco Cements', logo: '/client-logos/client2.webp' },
  { name: 'CEAT Tyres', logo: '/client-logos/client3.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client4.jpg' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.jpeg' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.webp' },
  { name: 'ABC Corporation', logo: '/client-logos/client9.jpeg' },
  { name: 'Tech Solutions', logo: '/client-logos/client10.jpeg' },
  { name: 'Global Industries', logo: '/client-logos/client11.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client12.jpeg' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.png' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.png' },
  { name: 'ABC Corporation', logo: '/client-logos/client1.jpeg' },
  { name: 'Tech Solutions', logo: '/client-logos/client2.jpeg' },
  { name: 'Global Industries', logo: '/client-logos/client3.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client4.png' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.png' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.png' },
  { name: 'ABC Corporation', logo: '/client-logos/client1.jpeg' },
  { name: 'Tech Solutions', logo: '/client-logos/client2.jpeg' },
  { name: 'Global Industries', logo: '/client-logos/client3.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client4.png' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.png' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.png' },
  { name: 'ABC Corporation', logo: '/client-logos/client1.jpeg' },
  { name: 'Tech Solutions', logo: '/client-logos/client2.jpeg' },
  { name: 'Global Industries', logo: '/client-logos/client3.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client4.png' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.png' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.png' },
  { name: 'ABC Corporation', logo: '/client-logos/client1.jpeg' },
  { name: 'Tech Solutions', logo: '/client-logos/client2.jpeg' },
  { name: 'Global Industries', logo: '/client-logos/client3.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client4.png' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.png' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.png' },
  { name: 'ABC Corporation', logo: '/client-logos/client1.jpeg' },
  { name: 'Tech Solutions', logo: '/client-logos/client2.jpeg' },
  { name: 'Global Industries', logo: '/client-logos/client3.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client4.png' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.png' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.png' },
  { name: 'ABC Corporation', logo: '/client-logos/client1.jpeg' },
  { name: 'Tech Solutions', logo: '/client-logos/client2.jpeg' },
  { name: 'Global Industries', logo: '/client-logos/client3.png' },
  { name: 'Innovate Systems', logo: '/client-logos/client4.png' },
  { name: 'Power Enterprises', logo: '/client-logos/client5.png' },
  { name: 'Dynamic Energy', logo: '/client-logos/client6.png' },
  { name: 'Summit Group', logo: '/client-logos/client7.png' },
  { name: 'Electric Solutions', logo: '/client-logos/client8.png' },
  // Add more clients as needed
];

const ClientsSection = () => {
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
    <section id="clients" className="section-spacing bg-background relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70"></div>
      
      <div className="container-section relative z-10" ref={sectionRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title reveal-item opacity-0 transition-opacity duration-300">Our Clients</span>
          <h2 className="heading-lg mb-6 reveal-item opacity-0 transition-opacity duration-300">Trusted by Industry Leaders</h2>
          <p className="subtitle reveal-item opacity-0 transition-opacity duration-300">
            We're proud to work with a diverse range of clients who trust our expertise and quality of service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center reveal-item opacity-0 transition-opacity duration-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-50 h-50 flex items-center justify-center mb-3">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-w-full max-h-full object-contain" 
                  onError={(e) => {
                    // Fallback for missing images
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
                {/*<p className="font-bold text-black">{client.name}</p>*/}
            </div>
          ))}
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
            Become Our Client
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
