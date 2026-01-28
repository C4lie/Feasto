'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { foodItems, categories } from '@/data/mockData';
import FoodCard from './FoodCard';
import FoodModal from './FoodModal';
import { FoodItem } from '@/types';

export default function VarietySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.category === activeCategory);

  return (
    <section id="variety" className="py-24">
      <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
               <h2 className="text-4xl font-bold mb-4">Explore by <span className="text-primary">Category</span></h2>
               <p className="text-muted-foreground">Find the perfect dish to match your mood.</p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
               {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                       activeCategory === cat.value 
                       ? 'bg-primary text-white shadow-md scale-105' 
                       : 'bg-secondary/50 text-foreground hover:bg-secondary hover:scale-105'
                    }`}
                  >
                     {cat.name}
                  </button>
               ))}
            </div>
         </div>

         <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
         >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                 <motion.div
                   layout
                   key={item.id}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.3 }}
                 >
                    <FoodCard item={item} onClick={setSelectedFood} />
                 </motion.div>
              ))}
            </AnimatePresence>
         </motion.div>
         
         {filteredItems.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
               No items found in this category.
            </div>
         )}
      </div>

      {selectedFood && (
        <FoodModal item={selectedFood} onClose={() => setSelectedFood(null)} />
      )}
    </section>
  );
}
