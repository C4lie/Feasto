'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Flame, ChefHat, Leaf, Clock, Users, ArrowLeft, Utensils } from 'lucide-react';
import { FoodItem } from '@/types';

interface FoodModalProps {
  item: FoodItem | null;
  onClose: () => void;
}

export default function FoodModal({ item, onClose }: FoodModalProps) {
  const [view, setView] = useState<'details' | 'recipe'>('details');

  // Reset view when item changes
  useEffect(() => {
    setView('details');
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Image Side */}
          <div className="relative w-full md:w-1/2 h-48 md:h-auto">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
             <button
              onClick={onClose}
              className="absolute top-4 left-4 md:hidden bg-black/50 p-2 rounded-full text-white z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute inset-0 bg-black/30 md:hidden" />
          </div>

          {/* Content Side */}
          <div className="flex-1 p-8 overflow-y-auto relative bg-background">
             {/* Header */}
             <div className="flex justify-between items-start mb-6">
               <div>
                  <h2 className="text-3xl font-bold mb-2">{item.name}</h2>
                  <div className="flex flex-wrap gap-2">
                     {item.tags.map(tag => (
                        <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-primary bg-secondary px-2 py-1 rounded">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
               <button
                  onClick={onClose}
                  className="hidden md:block p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
             </div>

             <AnimatePresence mode="wait">
               {view === 'details' ? (
                 <motion.div
                   key="details"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   className="space-y-6"
                 >
                    <div>
                       <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                         <ChefHat className="w-5 h-5 text-primary" />
                         Description
                       </h3>
                       <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                       </p>
                    </div>

                    <div>
                       <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                         <Leaf className="w-5 h-5 text-accent" />
                         Ingredients
                       </h3>
                       <div className="flex flex-wrap gap-2">
                          {item.ingredients.map((ing, idx) => (
                             <span key={idx} className="px-3 py-2 bg-muted rounded-lg text-sm font-medium">
                                {ing}
                             </span>
                          ))}
                       </div>
                    </div>

                    {item.calories && (
                        <div className="flex items-center gap-2 text-muted-foreground p-3 border border-border rounded-xl w-fit">
                            <Flame className="w-5 h-5 text-red-500" />
                            <span className="font-semibold">{item.calories}</span> <span className="text-sm">kcal</span>
                        </div>
                    )}

                    <div className="pt-4">
                      <button 
                        onClick={() => setView('recipe')}
                        className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg active:scale-[0.99] transform duration-100 flex items-center justify-center gap-2"
                      >
                         <Utensils className="w-5 h-5" />
                         View Full Recipe
                      </button>
                    </div>
                 </motion.div>
               ) : (
                 <motion.div
                   key="recipe"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-6"
                 >
                    {/* Recipe Header Info */}
                    <div className="grid grid-cols-3 gap-4 text-center">
                       <div className="bg-muted/30 p-3 rounded-xl">
                          <Clock className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <p className="text-xs text-muted-foreground uppercase">Prep</p>
                          <p className="font-bold text-sm">{item.recipe?.prepTime || 'N/A'}</p>
                       </div>
                       <div className="bg-muted/30 p-3 rounded-xl">
                          <Flame className="w-5 h-5 mx-auto mb-1 text-red-500" />
                          <p className="text-xs text-muted-foreground uppercase">Cook</p>
                          <p className="font-bold text-sm">{item.recipe?.cookTime || 'N/A'}</p>
                       </div>
                        <div className="bg-muted/30 p-3 rounded-xl">
                          <Users className="w-5 h-5 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground uppercase">Serves</p>
                          <p className="font-bold text-sm">{item.recipe?.servings || 'N/A'}</p>
                       </div>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                           Instructions
                        </h3>
                        <div className="space-y-4">
                           {item.recipe?.instructions.map((step, index) => (
                              <div key={index} className="flex gap-4">
                                 <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                 </span>
                                 <p className="text-sm text-foreground/80 leading-relaxed pt-1">
                                    {step}
                                 </p>
                              </div>
                           ))}
                        </div>
                    </div>

                    <div className="pt-4">
                       <button 
                        onClick={() => setView('details')}
                        className="w-full py-3 border border-border text-foreground rounded-xl font-bold hover:bg-muted transition-colors flex items-center justify-center gap-2"
                      >
                         <ArrowLeft className="w-4 h-4" />
                         Back to Details
                      </button>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
