import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

// Images
import heroImage from '@/assets/test2.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';
import gallery11 from '@/assets/gallery-11.jpg';
import gallery12 from '@/assets/gallery-12.jpg';

// ============================================
// DATA CONFIGURATION - Edit your details here
// ============================================
const DATA_CONFIG = {
  photographerName: 'Arutala Image',
  tagline: 'Freelance Photography',
  aboutText:
    'I believe in the quiet moments—the stolen glances, the trembling hands, the tears of joy. My approach is unobtrusive yet intentional, capturing the authentic narrative of your love story with a timeless, editorial sensibility that transcends trends.',
  whatsappNumber: '62895801837890', // Include country code without + or spaces
  socialLinks: {
    instagram: 'https://www.instagram.com/arutala.img/',
    tiktok: 'https://tiktok.com',
    pinterest: 'https://pinterest.com',
  },
  portfolioImages: [
    gallery1,
    gallery3,
    gallery9,
    gallery7,
    gallery11, // potrait
    gallery5,
    gallery8,
    gallery4,
    gallery6,
    gallery10, // potrait
    gallery12,
    gallery2, // potrait
  ],
};
// ============================================

const Index = () => {
  return (
    <main className='min-h-screen bg-background'>
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
