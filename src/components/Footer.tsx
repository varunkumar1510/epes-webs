
import React from 'react';
import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground/5 py-12 md:py-16">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <img 
                src="/uploads/epes-logo.png" 
                alt="EXCELLENT POWER ENGINEERING SERVICES Logo" 
                className="h-8 w-auto" 
              />
              <div className="font-display font-bold text-lg md:text-xl text-primary font-serif">EXCELLENT POWER ENGINEERING SERVICES</div>
            </div>
            <p className="text-muted-foreground text-sm mt-2">
              Delivering reliable and innovative power solutions
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-standard">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-standard">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-standard">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-standard">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        
        <hr className="border-foreground/10 my-8" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-sm text-muted-foreground">
            &copy; {currentYear} EXCELLENT POWER ENGINEERING SERVICES. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-x-8 gap-y-2">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-standard">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-standard">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-standard">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
