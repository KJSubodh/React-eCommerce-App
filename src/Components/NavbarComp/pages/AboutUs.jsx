import React, { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: 'Founded', value: '2022' },
    { label: 'Happy Customers', value: '120K+' },
    { label: 'Products Curated', value: '5K+' },
    { label: 'Global Warehouses', value: '04' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      
      {/* 1. HERO SECTION - Lifestyle Focus */}
      <section className="relative py-28 overflow-hidden bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Our Philosophy
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
            Redefining the art of <br />
            <span className="text-amber-500 italic">Modern Living.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            We don't just sell products; we curate experiences. Our mission is to bring world-class 
            craftsmanship and cutting-edge design directly to your doorstep.
          </p>
        </div>
        
        {/* Background Subtle Gradient */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gray-800 rounded-full blur-[100px]"></div>
        </div>
      </section>

      {/* 2. STATS SECTION - Performance & Trust */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <p className="text-5xl font-black text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                  {stat.value}
                </p>
                <div className="h-1 w-8 bg-amber-500 mx-auto my-3"></div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE BRAND STORY - Quality Commitment */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Image Placeholder with Styling */}
            <div className="lg:w-1/2 w-full relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-amber-50">
                   <span className="text-amber-200 font-black text-9xl select-none">EST</span>
                </div>
                {/* When you have an image, replace the div above with this:
                <img src="/src/assets/brand-story.jpg" className="w-full h-full object-cover" alt="Our Workspace" /> 
                */}
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded-xl hidden md:block">
                <p className="text-3xl font-bold text-amber-500">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Authenticity Guarantee</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight uppercase tracking-tighter">
                Quality is not an act, <br />
                <span className="text-amber-600 italic">It is a habit.</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  What started as a passion for finding the world's most unique gadgets and 
                  apparel turned into a global destination for those who refuse to settle for the ordinary.
                </p>
                <p>
                  Every product in our catalog undergoes a rigorous selection process. We partner 
                  directly with creators and manufacturers to ensure that every item bearing the 
                  <span className='font-bold text-gray-900'> BrandName </span> seal meets our 
                  standard for excellence, ethics, and longevity.
                </p>
                <div className="pt-6">
                   <button className="border-b-2 border-black pb-2 text-sm font-black hover:text-amber-600 hover:border-amber-600 transition-all">
                      LEARN ABOUT OUR SOURCING →
                   </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
                title="Ethical Sourcing" 
                desc="We prioritize fair labor and sustainable materials in every partnership."
            />
            <ValueCard 
                title="Customer First" 
                desc="Our support team is human, responsive, and dedicated to your satisfaction."
            />
            <ValueCard 
                title="Rapid Delivery" 
                desc="Global logistics that get your favorite items to you in record time."
            />
        </div>
      </section>
    </div>
  );
};

// Helper Component for Values
const ValueCard = ({ title, desc }) => (
    <div className="p-10 bg-white border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all rounded-2xl group">
        <div className="w-12 h-1 bg-amber-500 mb-6 group-hover:w-20 transition-all duration-500"></div>
        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{title}</h3>
        <p className="text-gray-500 text-sm leading-6">{desc}</p>
    </div>
);

export default AboutUs; 