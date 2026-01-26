'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gray-800"
    >
      {/* Video covering full hero section */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onError={(e) => {
            // Show fallback if video fails to load
            const target = e.target as HTMLVideoElement;
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to make video darker */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Fallback if video doesn't load */}
        <div className="absolute inset-0 hidden items-center justify-center bg-gray-800">
          <p className="text-gray-400">Video will play here</p>
        </div>
      </div>

      {/* NHK Digital Text at Bottom - Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-2 md:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-bold text-blue-600">
            NHK Digital
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
