import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';

interface SocialLinks {
  instagram?: string;
  tiktok?: string;
  pinterest?: string;
}

interface FooterProps {
  photographerName: string;
  whatsappNumber: string;
  socialLinks?: SocialLinks;
}

// Custom TikTok icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z' />
  </svg>
);

// Custom Pinterest icon
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox='0 0 24 24' fill='currentColor' className={className}>
    <path d='M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z' />
  </svg>
);

const Footer = ({
  photographerName,
  whatsappNumber,
  socialLinks,
}: FooterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Halo ${photographerName}, saya lihat portofolio di website dan tertarik dengan jasanya. Bisa tanya-tanya?`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer
      ref={sectionRef}
      id='contact'
      className='bg-foreground text-background py-24 md:py-32 lg:py-40'
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2
            className={`
              editorial-heading text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-12 md:mb-16
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            Let's capture
            <br />
            your story
          </h2>

          <a
            href={whatsappLink}
            target='_blank'
            rel='noopener noreferrer'
            className={`
              inline-flex items-center gap-3 
              bg-background text-foreground 
              px-8 py-4 md:px-12 md:py-5
              font-sans text-sm md:text-base tracking-widest uppercase
              hover:bg-background/90 
              transition-all duration-400
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            <svg
              viewBox='0 0 24 24'
              className='w-5 h-5 md:w-6 md:h-6'
              fill='currentColor'
            >
              <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
            </svg>
            Get in Touch
          </a>

          {/* Social Links */}
          {socialLinks && (
            <div
              className={`
                flex items-center justify-center gap-6 mt-12
                transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: '300ms' }}
            >
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-background/50 hover:text-background transition-colors duration-300'
                  aria-label='Instagram'
                >
                  <Instagram className='w-5 h-5' strokeWidth={1.5} />
                </a>
              )}
              {socialLinks.tiktok && (
                <a
                  href={socialLinks.tiktok}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-background/50 hover:text-background transition-colors duration-300'
                  aria-label='TikTok'
                >
                  <TikTokIcon className='w-5 h-5' />
                </a>
              )}
              {socialLinks.pinterest && (
                <a
                  href={socialLinks.pinterest}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-background/50 hover:text-background transition-colors duration-300'
                  aria-label='Pinterest'
                >
                  <PinterestIcon className='w-5 h-5' />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Bottom Credits */}
        <div
          className={`
            mt-24 md:mt-32 pt-8 border-t border-background/10
            transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-background/50 text-xs tracking-widest uppercase font-sans'>
            <span>
              © {new Date().getFullYear()} {photographerName}
            </span>
            <span>Crafting Timeless Memories</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
