'use client';

import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Car, Mail, Globe, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Car Trivia</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Challenge your automotive knowledge with our engaging puzzle games and trivia questions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></div>
              <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></div>
            </div>
          </div>

          {/* Games */}
          <div className="space-y-4">
            <h3 className="font-semibold">Games</h3>
            <div className="space-y-2 text-sm">
              <div><span className="text-primary font-medium">Car Trivia Puzzle</span></div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@cartriviagame.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                <span>www.cartriviagame.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Github className="h-4 w-4" />
                <span>Follow us for updates</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Car Trivia Puzzle Game. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}