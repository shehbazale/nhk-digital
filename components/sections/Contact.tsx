'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const WHATSAPP_NUMBER = '+92 370 889 4826';
const WHATSAPP_LINK = 'https://wa.me/923708894826';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@nhkdigital.com',
    link: 'mailto:hello@nhkdigital.com',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Skardu, Pakistan',
    link: '#',
    color: 'from-blue-500 to-blue-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Let's Start Your Project
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us on WhatsApp and
            let's create something amazing together
          </p>
        </motion.div>

        {/* WhatsApp CTA - form ki jagah */}
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="block max-w-md mx-auto mb-12"
        >
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
            <CardContent className="p-8 md:p-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <WhatsAppIcon className="w-12 h-12 text-white" />
              </motion.div>
              <div className="text-center sm:text-left">
                <p className="text-green-100 text-sm font-semibold uppercase tracking-wider mb-1">
                  Chat on WhatsApp
                </p>
                <p className="text-2xl md:text-3xl font-bold">{WHATSAPP_NUMBER}</p>
                <p className="text-green-100 mt-1">Click to open chat</p>
              </div>
            </CardContent>
          </Card>
        </motion.a>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
