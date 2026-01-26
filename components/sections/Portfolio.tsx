'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Luxus Tour Branding',
    category: 'Branding',
    image: '/luxus_tour.jpg',
    description:
      'Complete branding package for luxury travel agency including logo design, brand guidelines, and marketing materials.',
  },
  {
    id: 2,
    title: 'Restaurant Menu Design',
    category: 'Menu Design',
    image: '/food_menu.jpg',
    description:
      'Elegant menu design for upscale restaurant featuring modern typography and appetizing food photography.',
  },
  {
    id: 3,
    title: 'Gym Fitness Thumbnail',
    category: 'YouTube Thumbnails',
    image: '/gym_thumbnail.png',
    description:
      'High-impact YouTube thumbnail design for fitness channel that increased click-through rates by 45%.',
  },
  {
    id: 4,
    title: 'Real Estate Flyer',
    category: 'Flyer & Poster Design',
    image: '/real_state.png',
    description:
      'Professional real estate marketing materials designed to showcase premium properties.',
  },
  {
    id: 5,
    title: 'Cafe Menu Board',
    category: 'Menu Design',
    image: '/menu.png',
    description:
      'Modern cafe menu board design with clean layout and beautiful typography.',
  },
  {
    id: 6,
    title: 'Social Media Campaign',
    category: 'Social Media Posts & Ads',
    image: '/luxus_tour.jpg',
    description:
      'Complete social media campaign with engaging posts and ads for travel industry.',
  },
];

const categories = [
  'All',
  'Branding',
  'Menu Design',
  'YouTube Thumbnails',
  'Flyer & Poster Design',
  'Social Media Posts & Ads',
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped brands shine
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={
                selectedCategory === category
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : ''
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-blue-400 text-sm font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-4">
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-96 rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
