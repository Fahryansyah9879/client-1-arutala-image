import { useState, useEffect } from "react";
import { Instagram } from "lucide-react";

interface SocialLinks {
  instagram?: string;
  tiktok?: string;
  pinterest?: string;
}

interface HeaderProps {
  photographerName: string;
  whatsappNumber: string;
  socialLinks?: SocialLinks;
}

// Custom TikTok icon (not available in lucide-react)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

// Custom Pinterest icon
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const Header = ({ photographerName, whatsappNumber, socialLinks }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hi ${photographerName}, I saw your portfolio and I'm interested in your photography services.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#hero" 
          className="font-serif text-lg md:text-xl tracking-wide text-foreground hover:opacity-70 transition-opacity duration-300"
        >
          {photographerName}
        </a>

        <div className="flex items-center gap-6">
          {/* Social Links */}
          {socialLinks && (
            <div className="hidden md:flex items-center gap-4">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
              )}
              {socialLinks.tiktok && (
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              )}
              {socialLinks.pinterest && (
                <a
                  href={socialLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  aria-label="Pinterest"
                >
                  <PinterestIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
          
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs md:text-sm tracking-widest uppercase border border-foreground/20 px-4 py-2 md:px-6 md:py-2.5 hover:bg-foreground hover:text-background transition-all duration-400"
          >
            Inquire
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
