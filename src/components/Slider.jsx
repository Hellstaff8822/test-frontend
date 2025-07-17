import { useState } from 'react';
import Card from './Card';
import { testimonialsData } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const items = Array(100).fill(testimonialsData).flat();
  const [currentIndex, setCurrentIndex] = useState(testimonialsData.length);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const desktopItemWidth = 380 + 16;

  return (
    <div className="relative w-full">
      <div className="hidden lg:flex items-center justify-center gap-5">
        <button
          onClick={handlePrev}
          className="bg-white w-[68px] h-[68px] rounded-full border border-[#d1cfcf] flex items-center justify-center flex-shrink-0 hover:scale-110 transition-all duration-300 z-10">
          <ChevronLeft color="#707070" size={48} />
        </button>
        <div className="overflow-hidden w-[1172px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * desktopItemWidth}px)`,
            }}>
            {items.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="mr-4 last:mr-0 flex-shrink-0">
                <Card {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="bg-white w-[68px] h-[68px] rounded-full border border-[#d1cfcf] flex items-center justify-center flex-shrink-0 hover:scale-110 transition-all duration-300 z-10">
          <ChevronRight color="#707070" size={48} />
        </button>
      </div>

      <div className="lg:hidden w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}>
            {items.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="w-full flex-shrink-0 px-4">
                <Card {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center gap-4 mt-6">
        <button onClick={handlePrev} className="bg-white p-2 rounded-full border shadow">
          <ChevronLeft color="#707070" size={48} />
        </button>
        <div className="flex justify-center space-x-2">
          {testimonialsData.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                currentIndex % testimonialsData.length === index ? 'bg-[#252B42]' : 'bg-[#B6B1B1]'
              }`}
            />
          ))}
        </div>
        <button onClick={handleNext} className="bg-white p-2 rounded-full border shadow">
          <ChevronRight color="#707070" size={24} />
        </button>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-3 mt-8">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex % testimonialsData.length === index
                ? 'bg-[#252B42] scale-125'
                : 'bg-[#B6B1B1]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
