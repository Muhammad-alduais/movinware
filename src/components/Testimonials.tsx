import React, { useRef } from "react";
import { useTranslation } from "@/lib/translations";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}


const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" 
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10 rtl:right-auto rtl:left-0"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20 rtl:pr-0 rtl:pl-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl rtl:text-right">{author}</h4>
          <p className="text-white/80 rtl:text-right">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: TestimonialProps[] = [
    {
      content: t('testimonials.testimonial1.content'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      gradient: "from-blue-700 via-indigo-800 to-purple-900",
      backgroundImage: "/background-section1.png"
    },
    {
      content: t('testimonials.testimonial2.content'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      gradient: "from-green-600 via-teal-700 to-blue-800",
      backgroundImage: "/background-section2.png"
    },
    {
      content: t('testimonials.testimonial3.content'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      gradient: "from-orange-600 via-red-500 to-purple-600",
      backgroundImage: "/background-section3.png"
    }
  ];
  return (
    <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2 rtl:mr-0 rtl:ml-2">04</span>
            <span data-i18n="testimonials.badge">{t('testimonials.badge')}</span>
          </div>
        </div>
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left rtl:text-right" data-i18n="testimonials.title">{t('testimonials.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              gradient={testimonial.gradient} 
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;