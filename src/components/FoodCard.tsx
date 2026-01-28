'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { FoodItem } from '@/types';

interface FoodCardProps {
  item: FoodItem;
  onClick: (item: FoodItem) => void;
}

export default function FoodCard({ item, onClick }: FoodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border/50"
      onClick={() => onClick(item)}
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        
        {/* Floating Tag */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-foreground shadow-lg"
        >
          {item.category}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
           <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
        </div>
        
        {/* Ingredient Preview */}
        <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted-foreground">
          {item.ingredients.slice(0, 3).map((ing, idx) => (
            <span key={idx} className="bg-secondary/50 px-2 py-1 rounded-md group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              {ing}
            </span>
          ))}
          {item.ingredients.length > 3 && (
            <span className="px-1 py-1">+more</span>
          )}
        </div>

        {/* Action Hint */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
          <span>View Details</span>
          <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
