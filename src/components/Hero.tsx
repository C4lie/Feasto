'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/30 to-background relative">
       {/* Decorative Elements */}
       <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
       <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl" />

       <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="text-center md:text-left space-y-6"
          >
             <motion.span 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.5 }}
               className="inline-block px-4 py-1.5 bg-secondary text-primary font-medium text-sm rounded-full mb-2"
             >
                New Seasonal Menu
             </motion.span>
             <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
                Discover the <span className="text-primary">Art</span> of <br className="hidden md:block" /> Premium Flavors
             </h1>
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3, duration: 1 }}
               className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0"
             >
                Curated ingredients, minimal aesthetics, and a journey through taste. Experience food like never before.
             </motion.p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <Link 
                 href="/explore"
                 className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition-all cursor-pointer text-center"
               >
                  Start Exploring
               </Link>
               <Link 
                 href="#journey"
                 className="px-8 py-4 bg-transparent border-2 border-primary text-primary text-lg font-semibold rounded-full hover:bg-primary/10 hover:scale-105 transition-all cursor-pointer text-center"
               >
                  Our Story
               </Link>
             </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
             initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="relative w-full max-w-lg mx-auto aspect-square flex justify-center items-center"
          >
             {/* Abstract blob */}
             <div className="absolute inset-0 bg-secondary rounded-full opacity-50 blur-3xl transform scale-110 animate-pulse" />
             
             {/* Floating Image Container */}
             <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10"
             >
                <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
                alt="Gourmet Food"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
                />
             </motion.div>
             
             {/* Floating Badge */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.8 }}
               whileHover={{ scale: 1.1, rotate: 5 }}
               className="absolute -bottom-4 -right-4 md:right-10 bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-xl flex items-center gap-3 cursor-default"
             >
                <div className="text-3xl">🌿</div>
                <div>
                   <p className="text-xs text-muted-foreground font-bold uppercase">100% Organic</p>
                   <p className="font-bold text-foreground">Fresh Ingredients</p>
                </div>
             </motion.div>
          </motion.div>
       </div>
    </section>
  );
}
