import { useState, useEffect } from 'react';

interface MobilePreviewProps {
  isBlueStyle?: boolean;
}

export default function MobilePreview({ isBlueStyle = false }: MobilePreviewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // App screenshots - Replace these URLs with your own app screenshots
  // Recommended dimensions: 1170x2532 (iPhone Pro Max resolution)
  const images = [
    "https://res.cloudinary.com/ddeb9n2ur/image/upload/v1748340138/page_splitly_mes_listes.png",
    "https://res.cloudinary.com/ddeb9n2ur/image/upload/v1748340138/page_splitly_mes_d%C3%A9penses.png",
    "https://res.cloudinary.com/ddeb9n2ur/image/upload/v1748340138/page_splitly_mes_rembousements.png",
    "https://res.cloudinary.com/ddeb9n2ur/image/upload/v1748340138/page_splitly_mes_donn%C3%A9es.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((current) => (current + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate phone dimensions based on image dimensions (1170x2532)
  const imageAspectRatio = 1170 / 2532; // Width / Height
  const originalPhoneWidth = 280; // Original phone width
  const phoneWidth = Math.round(originalPhoneWidth); // Keep original size
  const phoneHeight = Math.round(phoneWidth / imageAspectRatio); // Height calculated to maintain ratio

  return (
    <div className="relative flex flex-col items-center w-full max-w-[280px] lg:max-w-[320px] mx-auto">
      <div className="relative flex justify-center mb-6 w-full">
        {/* Phone Frame */}
        <div
          className="relative border-gray-800 bg-gray-800 border-[12px] lg:border-[14px] rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-shadow duration-300"
          style={{
            width: `${phoneWidth}px`,
            height: `${phoneHeight}px`,
          }}
        >
          {/* Side buttons */}
          <div className="h-[26px] w-[3px] bg-gray-800 absolute -start-[15px] lg:-start-[17px] top-[58px] rounded-s-lg"></div>
          <div className="h-[37px] w-[3px] bg-gray-800 absolute -start-[15px] lg:-start-[17px] top-[99px] rounded-s-lg"></div>
          <div className="h-[37px] w-[3px] bg-gray-800 absolute -start-[15px] lg:-start-[17px] top-[142px] rounded-s-lg"></div>
          <div className="h-[51px] w-[3px] bg-gray-800 absolute -end-[15px] lg:-end-[17px] top-[114px] rounded-e-lg"></div>

          {/* Screen Content with Carousel */}
          <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative">
            <div
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Splito App Interface ${index + 1}`}
                  className="w-full h-full object-cover flex-shrink-0"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements - Hidden on mobile for cleaner look */}
        <div className="hidden lg:block absolute -right-8 -top-8 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl" />
        <div className="hidden lg:block absolute -left-8 -bottom-8 w-40 h-40 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      {/* Carousel Indicators */}
      <div className="flex gap-2 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'w-6 bg-primary-600'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Voir l'écran ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}