'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { foodItems } from '@/data/mockData';
import FoodCard from './FoodCard';
import FoodModal from './FoodModal';
import { FoodItem } from '@/types';

export default function FeaturedSection() {
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  
  // Select top 3 items
  const featuredItems = foodItems.slice(0, 3);

  return (
    <section id="featured" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Curated <span className="text-primary">Masterpieces</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Our chefs' top picks for the season, blending visual art with unforgettable taste.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
             <motion.div
               key={item.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
             >
                <FoodCard item={item} onClick={setSelectedFood} />
             </motion.div>
          ))}
        </div>
      </div>

      {selectedFood && (
        <FoodModal item={selectedFood} onClose={() => setSelectedFood(null)} />
      )}
    </section>
  );
}
