import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Swiper Components & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Assets
import shoppingImg from '/src/assets/shopping.jpg';
import fashionImg from '/src/assets/fashion.jpg';
import productsImg from '/src/assets/products.jpg';
import gadgetsImg from '/src/assets/electronic-gadgets.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slides = [
    { title: 'Curated Shopping', desc: 'Discover the best deals from around the globe.', image: shoppingImg, tag: 'Limited Edition' },
    { title: 'Fashion Forward', desc: 'Redefining style with our latest seasonal collections.', image: fashionImg, tag: 'New Season' },
    { title: 'Smart Electronics', desc: 'Future-proof your life with cutting-edge gadgets.', image: gadgetsImg, tag: 'Tech Savvy' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          effect={'fade'}
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="absolute inset-0">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
              </div>

              <div className="relative z-10 h-full flex items-center px-6 lg:px-20">
                <div className="max-w-2xl text-left">
                  <span className="bg-amber-500 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 inline-block">
                    {slide.tag}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-200 mb-8 max-w-lg">
                    {slide.desc} High-end quality meets everyday affordability.
                  </p>
                  <div className="flex gap-4">
                    <Link to="/products" className="bg-white text-black px-8 py-4 font-bold hover:bg-amber-500 transition-colors rounded-sm">
                      SHOP COLLECTION
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 2. TRUST BADGES */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🚚", label: "Free Shipping", sub: "On orders over $50" },
            { icon: "🛡️", label: "Secure Payment", sub: "100% protected" },
            { icon: "🔄", label: "Easy Returns", sub: "30-day window" },
            { icon: "📞", label: "24/7 Support", sub: "Dedicated help" },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-sm uppercase">{item.label}</h3>
              <p className="text-xs text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRENDING CATEGORIES (Visual Grid) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold italic">Top Categories</h2>
            <div className="h-1 w-20 bg-amber-500 mt-2"></div>
          </div>
          <Link to="/products" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
            BROWSE ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard img={fashionImg} name="Apparel" count="120+ Items" />
          <CategoryCard img={gadgetsImg} name="Gadgets" count="45+ Items" />
          <CategoryCard img={productsImg} name="Lifestyle" count="80+ Items" />
        </div>
      </section>
    </div>
  );
};

// Helper Component for Categories
const CategoryCard = ({ img, name, count }) => (
  <div className="relative group overflow-hidden cursor-pointer h-80">
    <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
    <div className="absolute bottom-8 left-8 text-white">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm opacity-80">{count}</p>
    </div>
  </div>
);

export default Home;