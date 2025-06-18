import React from 'react';
import { motion } from 'framer-motion';
import { RadialOrbitalTimelineDemo } from '@/components/ui/demo-orbital';
import { LampContainer } from '@/components/ui/lamp';

export function Services() {
  return (
    <div className="flex-grow bg-slate-950 relative overflow-hidden">
      {/* Hero Section with Lamp Background */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl md:text-8xl font-bold tracking-tight text-transparent leading-tight"
        >
          Premium Services <br /> for Your Success
        </motion.h1>
      </LampContainer>

      {/* Project Approach Section */}
      <div className="relative bg-slate-950 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            My Project Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 mb-12"
          >
            Turning plans into working products.
          </motion.p>
        </div>

        {/* Orbital Timeline */}
        <div className="w-full" style={{ transform: 'scale(1.2)', transformOrigin: 'center' }}>
          <RadialOrbitalTimelineDemo />
        </div>
      </div>
    </div>
  );
}