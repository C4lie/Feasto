'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
           {/* Image Side */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
           >
              <Image 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop"
                alt="Chefs cooking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                 <p className="text-3xl font-bold">Est. 2024</p>
                 <p className="opacity-80">Crafting joy, one plate at a time.</p>
              </div>
           </motion.div>

           {/* Content Side */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
              <h2 className="text-4xl font-bold mb-6">More Than Just <span className="text-primary">Food</span></h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                 We believe that food is an experience that connects people. Our mission is to bring you the freshest ingredients, curated by top chefs, in an atmosphere that inspires creativity and conversation.
              </p>

              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="p-3 bg-secondary rounded-xl h-fit">
                       <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-1">Made with Love</h3>
                       <p className="text-sm text-muted-foreground">Every dish is prepared with passion and attention to detail.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="p-3 bg-secondary rounded-xl h-fit">
                       <ShieldCheck className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-1">Quality Guaranteed</h3>
                       <p className="text-sm text-muted-foreground">We partner with verified local suppliers for the best produce.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="p-3 bg-secondary rounded-xl h-fit">
                       <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold mb-1">Fast & Fresh</h3>
                       <p className="text-sm text-muted-foreground">Served fresh from the kitchen to your table in minutes.</p>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
