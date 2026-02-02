import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Wedding Day',
    description:
      'Dokumentasi lengkap hari bahagia Anda, mulai dari persiapan hingga resepsi.',
  },
  {
    title: 'Pre-Wedding',
    description:
      'Sesi foto konseptual yang menceritakan perjalanan cinta Anda sebelum hari besar.',
  },
  {
    title: 'Engagement',
    description:
      'Mengabadikan momen intim lamaran dan komitmen awal Anda berdua.',
  },
  {
    title: 'Special Events',
    description:
      'Layanan dokumentasi untuk acara keluarga, siraman, atau momen spesial lainnya.',
  },
];

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id='services' className='bg-bone py-24 md:py-32 lg:py-40'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-3xl mx-auto'>
          <div className='text-center mb-16 md:mb-20'>
            <h2 className='editorial-heading text-3xl md:text-4xl lg:text-5xl text-foreground'>
              Services
            </h2>
          </div>

          <div className='space-y-0'>
            {services.map((service, index) => {
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={service.title}
                  ref={(el) => (itemRefs.current[index] = el)}
                  data-index={index}
                  className={`
                    group py-8 md:py-10 border-t border-foreground/10 last:border-b
                    transition-all duration-600
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  `}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8'>
                    <h3 className='font-serif text-xl md:text-2xl lg:text-3xl text-foreground group-hover:tracking-wider transition-all duration-400'>
                      {service.title}
                    </h3>
                    <p className='editorial-body text-muted-foreground text-sm md:text-base max-w-sm'>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
