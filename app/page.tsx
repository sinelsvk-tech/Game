'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, X } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const [showAvatar, setShowAvatar] = useState(false);

  return (
    <main className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
      
      {/* Glassmorphism Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl p-8 md:p-16 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center gap-8"
      >
        {/* Icon Header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20"
        >
          <Compass className="w-10 h-10 text-white" />
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            Embark on a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Journey</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-blue-200/60 text-lg md:text-xl max-w-md mx-auto leading-relaxed"
          >
            Discover the secrets hidden within the mists of time and explore realms beyond imagination.
          </motion.p>
        </div>

        {/* Action Button */}
        <motion.button
          onClick={() => setShowAvatar(true)}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="group relative px-8 py-4 bg-white text-blue-950 font-semibold rounded-full flex items-center gap-3 transition-all hover:bg-blue-50"
        >
          <span>Depart to the Forgotten World</span>
          <span className="text-lg leading-none transition-transform group-hover:translate-x-1">▶︎</span>
          
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.button>

        {/* Decorative Elements */}
        <div className="absolute top-8 right-8 text-blue-400/20">
          <Sparkles className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Avatar Interaction */}
      <AnimatePresence>
        {showAvatar && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <div className="relative flex flex-col items-center max-w-lg w-full">
              {/* Close Button */}
              <button 
                onClick={() => setShowAvatar(false)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative bg-white p-6 rounded-3xl rounded-bl-none shadow-2xl mb-8 border-4 border-blue-500/20"
              >
                <p className="text-blue-950 text-xl font-medium leading-tight">
                  &quot;Эй! Странник куда так спешишь? Куда путь держишь, если не секрет!?&quot;
                </p>
                {/* Bubble Tail */}
                <div className="absolute -bottom-4 left-0 w-8 h-8 bg-white transform rotate-45 -translate-x-2" />
              </motion.div>

              {/* Character Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative w-64 h-64 md:w-80 md:h-80"
              >
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles (Decorative) */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { top: '10%', left: '20%' },
          { top: '30%', left: '80%' },
          { top: '70%', left: '15%' },
          { top: '85%', left: '75%' },
          { top: '45%', left: '50%' },
          { top: '20%', left: '60%' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={pos}
          />
        ))}
      </div>
    </main>
  );
}
