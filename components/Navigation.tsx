'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-blue-600 shadow-lg'
          : 'bg-blue-600'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/NHK_logo.jpeg"
              alt="NHK Digital"
              width={80}
              height={28}
              className="rounded-xl object-contain"
              priority
            />

          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium transition-colors hover:text-blue-200 text-white"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
              </motion.button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-white hover:bg-blue-50 text-blue-600"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
            ) : (
              <Menu className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 rounded-lg transition-colors hover:bg-blue-700 text-white"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
