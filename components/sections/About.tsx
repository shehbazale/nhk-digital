'use client';

import { motion } from 'framer-motion';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: Briefcase,
    value: '100+',
    label: 'Projects Completed',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Users,
    value: '80+',
    label: 'Happy Clients',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    value: '3+',
    label: 'Years Experience',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    value: '98%',
    label: 'Client Satisfaction',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Our Creative Journey
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            For over 8 years, we've been transforming ideas into stunning visual
            experiences. Our passion for design and commitment to excellence has
            made us a trusted partner for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.h3
                    className="text-4xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-700">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
                Why Choose NHK Digital?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">
                        Creative Excellence
                      </h4>
                      <p className="text-gray-700">
                        Award-winning designs that stand out and make an impact
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">
                        Fast Turnaround
                      </h4>
                      <p className="text-gray-700">
                        Quick delivery without compromising on quality
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">
                        Dedicated Support
                      </h4>
                      <p className="text-gray-700">
                        We're with you every step of the way
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-gray-900">
                        Affordable Pricing
                      </h4>
                      <p className="text-gray-700">
                        Premium quality at competitive rates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
