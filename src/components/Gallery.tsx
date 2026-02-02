import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X } from 'lucide-react';

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  // 1. Memoize fungsi onVisible agar referensinya tetap stabil dan mencegah re-render loop
  const handleVisible = useCallback((idx: number) => {
    setVisibleItems((prev) => {
      if (prev.has(idx)) return prev; // Jika sudah ada, jangan update state
      const next = new Set(prev);
      next.add(idx);
      return next;
    });
  }, []);

  // 2. Membagi 12 gambar ke dalam 3 kolom dengan tetap membawa INDEX ASLI
  const columns = useMemo(
    () => [
      images
        .map((src, i) => ({ src, originalIndex: i }))
        .filter((_, i) => i % 3 === 0),
      images
        .map((src, i) => ({ src, originalIndex: i }))
        .filter((_, i) => i % 3 === 1),
      images
        .map((src, i) => ({ src, originalIndex: i }))
        .filter((_, i) => i % 3 === 2),
    ],
    [images]
  );

  return (
    <section id='gallery' className='bg-[#FAF9F6] py-24 md:py-32 lg:py-40'>
      <div className='px-4 md:px-6 mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16 md:mb-24'>
          <h2 className='editorial-heading text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4'>
            Portfolio
          </h2>
          <p className='editorial-body text-muted-foreground text-sm md:text-base max-w-md mx-auto'>
            A collection of timeless moments, captured with intention and
            artistry.
          </p>
        </div>

        {/* 3-Column Flexbox Masonry */}

        <div className='flex flex-col md:flex-row gap-[15px] mx-auto'>
          {columns.map((column, colIdx) => (
            <div key={colIdx} className='flex-1 flex flex-col gap-[15px]'>
              {column.map((item) => (
                <GalleryItem
                  key={item.originalIndex}
                  src={item.src}
                  index={item.originalIndex}
                  isVisible={visibleItems.has(item.originalIndex)}
                  onVisible={handleVisible}
                  onClick={() => setSelectedImage(item.src)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md p-6'
            onClick={() => setSelectedImage(null)}
          >
            <button className='absolute top-10 right-10 text-charcoal p-2 hover:rotate-90 transition-transform duration-300'>
              <X size={32} strokeWidth={1.5} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className='max-w-4xl w-full flex justify-center'
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                className='max-h-[80vh] w-auto shadow-2xl rounded-sm object-contain'
                alt='Enlarged view'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/**
 * Komponen Item Gallery dengan kontrol animasi presisi
 */
const GalleryItem = ({ src, index, isVisible, onVisible, onClick }) => {
  const ref = useRef(null);

  // Deteksi jika elemen masuk viewport (Threshold 15% seperti kode awal Anda)
  const inView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: '0px 0px -50px 0px',
  });

  // Efek untuk memicu status visible tanpa memicu infinite loop
  useEffect(() => {
    if (inView && !isVisible) {
      onVisible(index);
    }
  }, [inView, index, isVisible, onVisible]);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`
        relative overflow-hidden group cursor-pointer rounded-[12px] bg-white shadow-sm
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{
        // Delay berjenjang sesuai index asli (ritme zig-zag)
        transitionDelay: `${(index % 4) * 100}ms`,
      }}
    >
      <div className='relative h-full w-full'>
        <img
          src={src}
          alt={`Gallery work ${index + 1}`}
          loading='lazy'
          className='w-full h-auto object-cover block transition-transform duration-700 ease-out group-hover:scale-105'
        />
        {/* Subtle hover effect */}
        <div className='absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500' />
      </div>
    </div>
  );
};

export default Gallery;
