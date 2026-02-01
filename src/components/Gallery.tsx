import { useEffect, useRef, useState } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [images]);

  return (
    <section id="gallery" className="bg-bone py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Portfolio
          </h2>
          <p className="editorial-body text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            A collection of timeless moments, captured with intention and artistry
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => {
            const isVisible = visibleItems.has(index);
            // Alternating layout pattern
            const isLarge = index % 3 === 0;
            
            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`
                  relative overflow-hidden group cursor-pointer
                  ${isLarge ? "md:col-span-2" : ""}
                  transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
                <div className={`relative ${isLarge ? "aspect-[16/9]" : "aspect-[3/4]"}`}>
                  <img
                    src={image}
                    alt={`Wedding photography ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
