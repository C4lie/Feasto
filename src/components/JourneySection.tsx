'use client';

import { motion } from 'framer-motion';
import { journeySteps } from '@/data/mockData';
import { Lightbulb, Leaf, ChefHat } from 'lucide-react';

const icons = {
  Lightbulb: Lightbulb,
  Leaf: Leaf,
  ChefHat: ChefHat,
};

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Our <span className="text-primary">Journey</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
             How we turn simple ideas into unforgettable experiences.
          </p>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {journeySteps.map((step, index) => {
                 const Icon = icons[step.icon as keyof typeof icons] || Lightbulb;
                 
                 return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative flex flex-col items-center bg-background md:bg-transparent p-6 rounded-2xl md:p-0 shadow-sm md:shadow-none"
                    >
                       <div className="w-24 h-24 bg-background border-4 border-muted rounded-full flex items-center justify-center mb-6 shadow-sm z-10 mx-auto">
                          <Icon className="w-10 h-10 text-primary" />
                       </div>
                       
                       <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                       <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                       </p>
                    </motion.div>
                 );
              })}
           </div>
        </div>
      </div>
    </section>
  );
}
