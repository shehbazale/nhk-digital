'use client';

import { motion } from 'framer-motion';
import {
  Palette,
  FileText,
  Instagram,
  CreditCard,
  Youtube,
  Menu as MenuIcon,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Palette,
    title: 'Logo Design',
    description:
      'Unique, memorable logos that capture your brand essence and make a lasting impression.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: FileText,
    title: 'Flyer & Poster Design',
    description:
      'Eye-catching flyers and posters that grab attention and communicate your message effectively.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Instagram,
    title: 'Social Media Posts & Ads',
    description:
      'Engaging social media content that drives engagement and builds your online presence.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: CreditCard,
    title: 'Business Card Design',
    description:
      'Professional business cards that leave a memorable first impression with potential clients.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Youtube,
    title: 'YouTube Thumbnails',
    description:
      'Click-worthy thumbnails that increase views and make your content stand out.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: MenuIcon,
    title: 'Menu Design',
    description:
      'Appetizing menu designs that showcase your offerings and enhance the dining experience.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            What We Do Best
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            From concept to execution, we deliver exceptional design solutions
            tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
