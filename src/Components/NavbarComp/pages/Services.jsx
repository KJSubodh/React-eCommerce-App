import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shoppingBenefits = [
    {
      title: "Complimentary Styling",
      desc: "Book a 1-on-1 session with our fashion experts to curate a wardrobe that fits your unique personality.",
      icon: "✨",
      color: "bg-amber-100"
    },
    {
      title: "Priority Global Shipping",
      desc: "Our logistics network ensures your premium selections reach you within 3-5 business days, worldwide.",
      icon: "📦",
      color: "bg-blue-50"
    },
    {
      title: "Concierge Gifting",
      desc: "Premium hand-wrapped packaging and personalized notes for those special moments that matter.",
      icon: "🎁",
      color: "bg-rose-50"
    },
    {
      title: "Authenticity Shield",
      desc: "Every item is verified by our experts. We guarantee 100% original products from authorized creators.",
      icon: "🛡️",
      color: "bg-emerald-50"
    },
    {
      title: "Sustainable Trade-In",
      desc: "Exchange your gently used items for store credit and help us promote a circular fashion economy.",
      icon: "🔄",
      color: "bg-teal-50"
    },
    {
      title: "24/7 Lifestyle Support",
      desc: "Our dedicated concierge team is available around the clock to assist with orders and style advice.",
      icon: "📞",
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-20 font-sans text-gray-900">

      {/* 1. HERO HEADER SECTION */}
      <section className="relative py-28 overflow-hidden bg-gray-950 text-white">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Our Philosophy
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
            More than just <br />
            <span className="text-amber-500 italic">Shopping.</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-gray-500 max-w-2xl mx-auto">
            We provide a suite of premium services designed to make your journey with us as seamless and luxurious as the products we curate.
          </p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {shoppingBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon Bubble */}
              <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:rotate-6 transition-transform duration-500`}>
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                {benefit.desc}
              </p>

              <Link
                to="/contact"
                className="text-xs font-black uppercase tracking-widest text-amber-600 flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PREMIUM CTA SECTION */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 mt-40">
        <div className="bg-black rounded-[4rem] p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
            Become a <span className="text-amber-500 italic">VIP Member</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg">
            Unlock exclusive early access, free express shipping, and a dedicated personal shopper.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-black font-black rounded-full transition-all active:scale-95 uppercase text-xs tracking-widest">
              Join the Club
            </Link>
            <Link to="/products" className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black rounded-full transition-all backdrop-blur-md border border-white/10 uppercase text-xs tracking-widest">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;