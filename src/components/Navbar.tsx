'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: 'Featured', href: '#featured' },
    { name: 'Variety', href: '#variety' },
    { name: 'Journey', href: '#journey' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter group">
          <UtensilsCrossed className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span>Flavor<span className="text-primary">Journey</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors hover:underline underline-offset-4 decoration-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
           <button 
             onClick={() => router.push('/explore')}
             className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-600 transition-colors hover:shadow-lg active:scale-95 transform duration-200 cursor-pointer"
           >
              Explore
           </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-xl md:hidden z-40 flex flex-col pt-24 px-6 gap-6 overflow-hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link
                  href={link.href}
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 hover:to-primary transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
            >
              <Link 
                href="/explore" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-primary text-white w-full py-4 rounded-xl mt-4 font-bold text-xl hover:bg-orange-600 transition-colors shadow-lg"
              >
                  Explore Collection
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
