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

  const itemWidth = 380 + 16;

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
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}>
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

      <div className="hidden sm:flex lg:hidden items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-white w-14 h-14 rounded-full border border-[#d1cfcf] flex items-center justify-center flex-shrink-0 z-10 hover:scale-110 transition-all">
          <ChevronLeft color="#707070" size={32} />
        </button>
        <div className="overflow-hidden" style={{ width: `${2 * 380 + 16}px` }}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}>
            {items.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="mr-4 last:mr-0 flex-shrink-0">
                <Card {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="bg-white w-14 h-14 rounded-full border border-[#d1cfcf] flex items-center justify-center flex-shrink-0 z-10 hover:scale-110 transition-all">
          <ChevronRight color="#707070" size={32} />
        </button>
      </div>

      <div className="sm:hidden w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}>
            {items.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-full flex-shrink-0 px-4 min-[480px]:px-7 min-[540px]:px-[18px] ">
                <Card {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button onClick={handlePrev} className="lg:hidden bg-white p-2 rounded-full border shadow">
          <ChevronLeft color="#707070" size={24} />
        </button>
        <div className="flex justify-center space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(testimonialsData.length + index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex % testimonialsData.length === index
                  ? 'bg-[#252B42] scale-125'
                  : 'bg-[#B6B1B1]'
              }`}
            />
          ))}
        </div>
        <button onClick={handleNext} className="lg:hidden bg-white p-2 rounded-full border shadow">
          <ChevronRight color="#707070" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
