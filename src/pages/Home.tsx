import React from 'react';
import { SplineSceneBasic } from '@/components/ui/demo';
import { AnimatedTestimonialsDemo } from '@/components/ui/demo-testimonials';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Home() {
  return (
    <div className="flex-grow">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center pt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            BeyondLogic || Likhith Naik
          </h1>
          <p className="text-gray-400 text-lg">
            "Creating What Others Imagine. Securing What Others Miss."
          </p>
        </header>
        
        <SplineSceneBasic />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-8">
          <div className="bg-gray-800 p-6 rounded-lg text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-3">
              Modern Development
            </h2>
            <p>
              I build fast, responsive, and scalable applications using the latest 
              technologies and industry best practices. Clean code, optimal 
              performance, and seamless user experiences are my standards.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg text-gray-300">
            <h2 className="text-xl font-semibold text-white mb-3">
              Custom Solutions
            </h2>
            <p>
              Every project is tailored to your specific needs and goals. From 
              AI integration to secure backends, I create unique solutions that 
              give you a competitive edge in your market.
            </p>
          </div>
        </div>

        {/* My Project Works Section - Only Title and Connect Button */}
        <div className="mt-16 p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Project Works
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing real-world solutions that combine innovation, security, and performance. 
              Each project represents a unique challenge solved with cutting-edge technology.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              Want to see more projects or discuss a collaboration?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/25"
            >
              Let's Connect
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        <AnimatedTestimonialsDemo />
      </div>
    </div>
  );
}