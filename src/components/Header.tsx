import { useState, useEffect } from "react";

interface HeaderProps {
  photographerName: string;
  whatsappNumber: string;
}

const Header = ({ photographerName, whatsappNumber }: HeaderProps) => {
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
        
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-xs md:text-sm tracking-widest uppercase border border-foreground/20 px-4 py-2 md:px-6 md:py-2.5 hover:bg-foreground hover:text-background transition-all duration-400"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
};

export default Header;
