import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

// Images
import heroImage from "@/assets/hero-wedding.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

// ============================================
// DATA CONFIGURATION - Edit your details here
// ============================================
const DATA_CONFIG = {
  photographerName: "Élise Laurent",
  tagline: "Wedding Photography",
  aboutText:
    "I believe in the quiet moments—the stolen glances, the trembling hands, the tears of joy. My approach is unobtrusive yet intentional, capturing the authentic narrative of your love story with a timeless, editorial sensibility that transcends trends.",
  whatsappNumber: "1234567890", // Include country code without + or spaces
  socialLinks: {
    instagram: "https://instagram.com/eliselaurent",
    tiktok: "https://tiktok.com/@eliselaurent",
    pinterest: "https://pinterest.com/eliselaurent",
  },
  portfolioImages: [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ],
};
// ============================================

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header 
        photographerName={DATA_CONFIG.photographerName} 
        whatsappNumber={DATA_CONFIG.whatsappNumber}
        socialLinks={DATA_CONFIG.socialLinks}
      />
      
      <Hero 
        photographerName={DATA_CONFIG.photographerName}
        tagline={DATA_CONFIG.tagline}
        heroImage={heroImage}
      />
      
      <Gallery images={DATA_CONFIG.portfolioImages} />
      
      <About aboutText={DATA_CONFIG.aboutText} />
      
      <Services />
      
      <Footer 
        photographerName={DATA_CONFIG.photographerName}
        whatsappNumber={DATA_CONFIG.whatsappNumber}
        socialLinks={DATA_CONFIG.socialLinks}
      />
    </main>
  );
};

export default Index;
