import { useEffect, useRef, useState } from 'react';

interface AboutProps {
  aboutText: string;
}

const About = ({ aboutText }: AboutProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='about'
      className='bg-background py-24 md:py-32 lg:py-40'
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-3xl mx-auto text-center'>
          <span
            className={`
              inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            About
          </span>

          <p
            className={`
              font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/90
              transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {aboutText}
          </p>

          <div
            className={`
              w-16 h-px bg-foreground/20 mx-auto mt-12
              transition-all duration-700 delay-400
              ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            `}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
