'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FoodCard from '@/components/FoodCard';
import FoodModal from '@/components/FoodModal';
import { foodItems } from '@/data/mockData';
import { FoodItem } from '@/types';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const filteredItems = foodItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />

      <div className="pt-32 pb-12 container mx-auto px-6">
        {/* Header & Search */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-8">
           <motion.h1 
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl font-bold"
           >
             Explore <span className="text-primary">Flavors</span>
           </motion.h1>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.1 }}
             className="relative flex items-center"
           >
             <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
             <input
               type="text"
               placeholder="Search for dishes, ingredients, or tags..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-muted/20 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg shadow-sm"
               autoFocus
             />
           </motion.div>
        </div>

        {/* Results Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
             {filteredItems.map(item => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                   <FoodCard item={item} onClick={setSelectedFood} />
                </motion.div>
             ))}
           </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
           <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No nutritious results found for "{searchTerm}".</p>
           </div>
        )}
      </div>

      <Footer />

      {selectedFood && (
         <FoodModal item={selectedFood} onClose={() => setSelectedFood(null)} />
      )}
    </main>
  );
}
