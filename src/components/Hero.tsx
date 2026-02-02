interface HeroProps {
  photographerName: string;
  tagline: string;
  heroImage: string;
}

const Hero = ({ photographerName, tagline, heroImage }: HeroProps) => {
  return (
    <section id='hero' className='relative h-screen w-full overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src={heroImage}
          alt='Wedding Photography'
          className='w-full h-full  object-cover object-[43%_50%]'
        />
        <div className='absolute inset-0 bg-foreground/20' />
      </div>

      {/* Content */}
      <div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-6'>
        <h1
          className='editorial-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-background mb-6 opacity-0 animate-fade-up'
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          {photographerName}
        </h1>
        <p
          className='editorial-body text-sm md:text-base lg:text-lg text-background/90 tracking-[0.3em] uppercase opacity-0 animate-fade-up'
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          {tagline}
        </p>

        {/* Scroll Indicator */}
        <div
          className='absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up'
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <div className='w-px h-16 bg-background/50 mx-auto mb-3' />
          <span className='text-background/70 text-xs tracking-[0.2em] uppercase font-sans'>
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
