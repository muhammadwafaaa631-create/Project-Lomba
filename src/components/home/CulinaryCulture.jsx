import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight, Utensils, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function CulinaryAndCulture() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const culinaryItems = [
    { 
      id: 19,
      title: "Batagor", 
      img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800", 
      desc: "Fried fish dumplings with rich savory peanut sauce.",
      tag: "Must Try",
      time: "15 min",
      rating: 4.8
    },
    { 
      id: 20,
      title: "Mie Kocok", 
      img: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800", 
      desc: "Flat noodles served in rich beef tendon soup with bean sprouts.",
      tag: "Iconic",
      time: "25 min",
      rating: 4.8
    },
    { 
      id: 21,
      title: "Seblak", 
      img: "https://images.unsplash.com/photo-1626082872481-22923e597c88?q=80&w=800", 
      desc: "Spicy and savory wet crackers with diversos toppings.",
      tag: "Spicy Lover",
      time: "12 min",
      rating: 4.5
    },
    { 
      id: 22,
      title: "Surabi", 
      img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=800", 
      desc: "Warm traditional pancakes cooked on clay charcoal stoves.",
      tag: "Best Snack",
      time: "10 min",
      rating: 4.9
    },
    { 
      id: 23,
      title: "Peuyeum", 
      img: "https://images.unsplash.com/photo-1584285404554-1590fc981f96?q=80&w=800", 
      desc: "Sweet and soft fermented cassava traditionally from Bandung.",
      tag: "Legendary",
      time: "24h+",
      rating: 4.7
    },
    { 
      id: 24,
      title: "Cuanki", 
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800", 
      desc: "Savory fish balls and dumplings served in warm clear broth.",
      tag: "Street Food",
      time: "10 min",
      rating: 4.8
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 500);
    }
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden transition-colors duration-700">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 dark:bg-orange-900/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100/20 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-semibold mb-4 border border-white/20 dark:border-white/10 backdrop-blur-md"
            >
              <Utensils size={14} />
              <span>Taste of Bandung</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
            >
              Culinary <span className="text-orange-500 dark:text-orange-400 underline decoration-orange-200 dark:decoration-orange-500/20 decoration-8 underline-offset-8">Heritage</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 dark:text-gray-400 text-lg md:text-xl font-medium"
            >
              Discover the legendary flavors that define the soul of the city.
            </motion.p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-4 rounded-full border-2 transition-all ${
                canScrollLeft 
                ? "border-white/20 dark:border-white/10 text-slate-800 dark:text-gray-300 backdrop-blur-md hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-slate-900 dark:hover:border-white shadow-sm" 
                : "border-white/10 dark:border-white/5 text-slate-300 dark:text-gray-700 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-4 rounded-full border-2 transition-all ${
                canScrollRight 
                ? "border-white/20 dark:border-white/10 text-slate-800 dark:text-gray-300 backdrop-blur-md hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-slate-900 dark:hover:border-white shadow-sm" 
                : "border-white/10 dark:border-white/5 text-slate-300 dark:text-gray-700 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Draggable/Scrollable Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-8 overflow-x-auto pb-12 pt-4 scrollbar-hide snap-x no-scrollbar select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {culinaryItems.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="min-w-[320px] md:min-w-[400px] snap-start bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none hover:shadow-[0_45px_100px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 border border-white/20 dark:border-white/10 group flex-shrink-0 cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-black px-4 py-1.5 rounded-full shadow-xl uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <Clock size={14} />
                    <span className="text-xs font-semibold">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold">{item.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">{item.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-orange-100 dark:group-hover:bg-orange-500/20 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    <Utensils size={18} />
                  </div>
                </div>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed font-medium mb-6">
                  {item.desc}
                </p>
                <Link 
                  to={item.id ? `/budaya/${item.id}` : "/budaya"}
                  className="flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all duration-300"
                >
                  <span>Explore Heritage</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
