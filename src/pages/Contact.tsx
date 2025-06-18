import React from 'react';
import { PixelTransition } from "@/components/ui/pixel-transition";
import { User, Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect and turn your ideas into impactful digital solutions.
            Whether it's a project, partnership, or just a conversation — I'm here.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <PixelTransition
              firstContent={
                <div className="w-full h-full flex items-center justify-center bg-gray-800 p-6">
                  <User className="w-16 h-16 text-white" />
                </div>
              }
              secondContent={
                <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 p-6">
                  <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white text-lg font-semibold">Likhith Naik</p>
                  <div className="flex flex-col items-center space-y-2 mt-2">
                    <a 
                      href="mailto:likhithnaik01@gmail.com" 
                      className="text-gray-400 text-sm hover:text-white transition-colors flex items-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      likhithnaik01@gmail.com
                    </a>
                    <a 
                      href="https://linkedin.com/in/likhith-naik-051006327" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-white transition-colors flex items-center"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              }
              gridSize={12}
              pixelColor="white"
              animationStepDuration={0.4}
              style={{ width: "100%", maxWidth: "400px" }}
              aspectRatio="100%"
            />
            <h3 className="text-2xl font-semibold text-white mt-6">Connect With Me</h3>
            <p className="text-gray-400 mt-2 text-center max-w-md">
              Open to collaborations, freelance gigs, or full-time roles.
              Let's build something meaningful — together.
            </p>
            
            {/* Response time note */}
            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
              <p className="text-gray-300 text-sm text-center">
                💬 I usually respond within 24 hours. Don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}