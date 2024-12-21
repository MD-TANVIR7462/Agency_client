"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalleryModal } from './GalleryModal';
import { galleryImages } from '@/components/data/gallery';


export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6  lg:px-8 bg-gradient-to-b from-[#2A1B3D] to-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Life at SiSCOTEK</h2>
        <p className="text-gray-400 text-center mb-12">Get a glimpse of our vibrant workplace culture</p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <motion.img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <GalleryModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage || ''}
      />
    </section>
  );
};