import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { DisplaySerif, TechnicalMono } from '../ui/Typography';
import { ArrowRight } from 'lucide-react';

const GrainOverlay = () => (
  <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.08] mix-blend-multiply">
    <svg className='w-full h-full'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='0.8' 
          numOctaves='3' 
          stitchTiles='stitch' 
        />
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
    </svg>
  </div>
);

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax for the content
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Magnetic Mouse Interaction
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const yMouse = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPos = (clientX / innerWidth - 0.5) * 2; 
    const yPos = (clientY / innerHeight - 0.5) * 2;
    x.set(xPos);
    yMouse.set(yPos);
  };

  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(yMouse, springConfig);

  const xCore = useTransform(mouseX, [-1, 1], [-15, 15]);
  const yCore = useTransform(mouseY, [-1, 1], [-15, 15]);
  const xRing = useTransform(mouseX, [-1, 1], [-30, 30]);
  const yRing = useTransform(mouseY, [-1, 1], [-30, 30]);

  return (
    <section 
        className="relative w-full h-[120vh] flex flex-col items-center justify-center bg-[#F9F9F9] overflow-hidden"
        onMouseMove={handleMouseMove}
    >
      {/* 1. Full-Bleed Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <motion.div 
           initial={{ opacity: 0 }} 
           animate={{ opacity: 1 }} 
           transition={{ duration: 2 }}
           className="w-full h-full relative"
         >
           <video
             autoPlay
             loop
             muted
             playsInline
             className="w-full h-full object-cover mix-blend-multiply opacity-80 filter grayscale contrast-125"
           >
             {/* Single Drop Ink Diffusion */}
             <source src="https://videos.pexels.com/video-files/4238515/4238515-hd_1920_1080_30fps.mp4" type="video/mp4" />
           </video>
           
           {/* Softening Overlay to maintain the #F9F9F9 feel */}
           <div className="absolute inset-0 bg-[#F9F9F9] opacity-30 mix-blend-overlay" />
           
           {/* Vignette to focus center */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#F9F9F9_100%)] opacity-80" />
         </motion.div>
      </div>

      <GrainOverlay />
      
      {/* 2. Content Container - Layered Above */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-30 flex flex-col items-center justify-center w-full max-w-7xl px-6 md:px-12"
      >
        {/* The Visual Centerpiece: Resonant Void (Interactive Element) */}
        <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] flex items-center justify-center mb-12 pointer-events-none">
            {/* Outer Ring */}
            <motion.div 
                style={{ x: xRing, y: yRing }}
                className="absolute inset-0 border border-black/5 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                transition={{ 
                   rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                   scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
            />
            
            {/* Inner Dashed Ring */}
            <motion.div 
                style={{ x: xRing, y: yRing }}
                className="absolute w-[65%] h-[65%] border border-dashed border-black/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />

            {/* The Core */}
            <motion.div 
                style={{ x: xCore, y: yCore }}
                className="relative z-10 w-20 h-20 bg-[#1A1A1A] rounded-full shadow-2xl flex items-center justify-center"
                animate={{ scale: [1, 0.9, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
            </motion.div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
             <DisplaySerif className="text-6xl md:text-8xl lg:text-9xl text-[#1A1A1A] mb-8 leading-[0.95] tracking-tighter">
              The Architecture <br/> of Rest.
             </DisplaySerif>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="font-sans text-base md:text-lg text-[#1A1A1A] max-w-md mx-auto leading-relaxed">
               An operating system designed to disappear.
               <br/>
               <span className="opacity-60">No notifications. Just presence.</span>
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
         style={{ opacity }}
         className="absolute bottom-12 left-0 w-full flex justify-center z-30 pointer-events-none"
      >
         <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-16 bg-black/10 overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-1/3 bg-black/60"
                  animate={{ y: ['-100%', '300%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </div>
         </div>
      </motion.div>
    </section>
  );
};
