import Link from 'next/link';
import { Instagram, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12 border-t border-muted mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
                <span>Flavor<span className="text-primary">Journey</span></span>
            </Link>
            <p className="text-sm text-muted-foreground">© 2026 FlavorJourney. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-background rounded-full hover:text-primary shadow-sm hover:shadow-md transition-all nav-item" 
              aria-label="Instagram"
            >
                <Instagram className="w-5 h-5" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
