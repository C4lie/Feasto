'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
}

const suggestions = [
  "Recommend something spicy",
  "Any healthy options?",
  "What's good for dessert?",
  "Tell me about the ingredients",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Greetings, epicurean! I am your personal Flavor Guide. Tell me, what is your palate craving today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = { id: Date.now().toString(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "An explicit choice! Our menu is curated to delight. Perhaps visit our Explore section to fully appreciate the visual artistry of our dishes.";
      
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('spicy') || lowerText.includes('hot') || lowerText.includes('fire')) {
        botResponse = "Ah, a seeker of heat! The **Firecracker Tacos** are a symphony of spice, featuring fresh jalapeños and seasoned beef that dances on the tongue.";
      } else if (lowerText.includes('healthy') || lowerText.includes('light') || lowerText.includes('diet') || lowerText.includes('veg')) {
        botResponse = "For a lighter yet fulfilling experience, I highly recommend the **Zen Bowl** or the **Avocado Toast Royale**. Both utilize fresh, organic produce sourced directly from our partner farms.";
      } else if (lowerText.includes('dessert') || lowerText.includes('sweet') || lowerText.includes('cake') || lowerText.includes('sugar')) {
        botResponse = "Indulgence is a virtue here. The **Midnight Berry Cake** offers a deep, rich chocolate experience, while the **Matcha Lava Cookie** provides a delicate balance of earthy and sweet notes.";
      } else if (lowerText.includes('ingredient') || lowerText.includes('source') || lowerText.includes('organic')) {
        botResponse = "We believe in transparency. All our ingredients are 100% organic and hand-selected. We treat food preparation as an art form, ensuring every element on your plate serves a purpose.";
      } else if (lowerText.includes('burger') || lowerText.includes('meat')) {
        botResponse = "The **Truffle Mushroom Burger** is a savory masterpiece. The truffle oil elevates the earthiness of the portobello to a new level of sophistication.";
      } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
        botResponse = "Hello! I am ready to guide your culinary journey. Are you in the mood for something savory, sweet, or perhaps something adventurous?";
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), type: 'bot', text: botResponse };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 right-0 w-[85vw] sm:w-96 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[60vh] sm:h-[500px]"
            >
              {/* Header */}
              <div className="bg-primary p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                  <Bot className="w-6 h-6" />
                  <span className="font-bold">Flavor Guide</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.type === 'user'
                          ? 'bg-primary text-white rounded-br-none'
                          : 'bg-white dark:bg-zinc-800 border border-border rounded-bl-none shadow-sm'
                      }`}
                    >
                      <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions */}
              <div className="p-2 bg-background border-t border-border overflow-x-auto flex gap-2 no-scrollbar">
                 {suggestions.map(s => (
                    <button 
                       key={s} 
                       onClick={() => handleSend(s)}
                       className="whitespace-nowrap text-xs px-3 py-1.5 bg-secondary text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                       {s}
                    </button>
                 ))}
              </div>

              {/* Input */}
              <div className="p-4 bg-background border-t border-border flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Ask about flavors..."
                  className="flex-1 bg-muted/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  autoFocus
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim()}
                  className="p-2 bg-primary text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-600 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </motion.button>
      </div>
    </>
  );
}
