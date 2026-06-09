import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CARDS_DATA_URL = '/data/caseStudy.json';

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}

const itemReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const VideoCard = ({ item, index, topOffset }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    className="sticky overflow-hidden rounded mb-4"
    style={{
      top: `${topOffset + index * 20}px`,
      zIndex: index + 1,
      backgroundColor: item.accentColor,
    }}
  >
    <Link to={item.to} className="block p-5 sm:p-8 lg:p-10">
      {/* Card header */}
      <div className="mb-5 flex items-center justify-between">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          0{index + 1} — Case Study
        </span>
        <span
          className="text-[11px] font-semibold tracking-wide rounded border px-3 py-1"
          style={{
            color: 'rgba(255,255,255,0.45)',
            borderColor: 'rgba(255,255,255,0.12)',
          }}
        >
          {item.tag ?? 'Featured'}
        </span>
      </div>

      {/* Title + subtitle */}
      <div className="mb-6">
        <h3
          className="hidden md:block text-2xl sm:text-3xl font-bold font-title leading-tight mb-1.5"
          style={{ color: '#ffffff' }}
        >
          {item.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          {item.subtitle}
        </p>
      </div>

      {/* Video + testimonial */}
      <div className="group flex flex-col lg:flex-row gap-4">
        {/* Video */}
        <div className="relative flex-[0_0_100%] lg:flex-[0_0_63%] overflow-hidden rounded">
          <video
            src={item.videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        {/* Testimonial */}
        <div
          className="flex-1 flex flex-col justify-between rounded p-6 sm:p-7"
          style={{ background: '#ffffff' }}
        >
          <div>
            {/* Brand */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded flex items-center justify-center font-black text-xs flex-shrink-0"
                style={{ background: '#A3FF12', color: '#071A0F' }}
              >
                {item.avatar}
              </div>
              <span className="text-sm font-bold" style={{ color: '#0D1A04' }}>
                {item.logoText}
              </span>
            </div>

            {/* Quote */}
            <p
              className="text-sm leading-[1.85]"
              style={{ color: 'rgba(13,26,4,0.6)' }}
            >
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>

          {/* Author */}
          <div
            className="border-t pt-4 mt-5 flex items-center justify-between"
            style={{ borderColor: 'rgba(0,0,0,0.06)' }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-8 h-8 rounded flex items-center justify-center font-bold text-[10px] flex-shrink-0"
                style={{ background: '#0D1A04', color: '#ffffff' }}
              >
                {item.avatar}
              </div>
              <div>
                <p
                  className="text-[13px] font-semibold"
                  style={{ color: '#0D1A04' }}
                >
                  {item.author}
                </p>
                <p
                  className="text-[11px] mt-0.5"
                  style={{ color: 'rgba(13,26,4,0.4)' }}
                >
                  {item.role}, {item.company}
                </p>
              </div>
            </div>
            {/* Arrow CTA */}
            <div
              className="w-8 h-8 rounded border flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-[#A3FF12] group-hover:border-[#A3FF12] group-hover:text-[#071A0F]"
              style={{
                borderColor: 'rgba(0,0,0,0.1)',
                color: 'rgba(13,26,4,0.3)',
              }}
            >
              →
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      {item.stats?.length > 0 && (
        <div className="hidden lg:flex gap-3 mt-6">
          {item.stats.map((s) => (
            <div
              key={s.label}
              className="flex-1 rounded p-4"
              style={{ background: 'rgba(0,0,0,0.18)' }}
            >
              <p
                className="text-2xl font-bold leading-none"
                style={{ color: '#ffffff' }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.16em] mt-1.5"
                style={{ color: 'rgba(255,255,255,0.38)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </Link>
  </motion.div>
);

export default function HomeCaseStudy() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(CARDS_DATA_URL)
      .then((r) => r.json())
      .then(setProjects)
      .catch(console.error);
  }, []);

  const windowWidth = useWindowWidth();
  const topOffset = windowWidth < 1024 ? 16 : 72;

  return (
    <section className="py-20 sm:py-24" style={{ background: '#F4F4F0' }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div className="max-w-2xl">
            <motion.span
              variants={itemReveal}
              className="inline-block rounded px-3 py-1 text-[11px] font-semibold uppercase tracking-widest mb-4"
              style={{
                color: '#3a7d00',
                background: 'rgba(163,255,18,0.12)',
                border: '1px solid rgba(163,255,18,0.25)',
              }}
            >
              Case Studies
            </motion.span>

            <motion.h2
              variants={itemReveal}
              className="font-title text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight"
              style={{ color: '#0D1A04' }}
            >
              Real results for SaaS, agencies & e-commerce brands.
            </motion.h2>
          </div>

          <motion.p
            variants={itemReveal}
            className="text-sm sm:text-base leading-relaxed sm:max-w-[260px] flex-shrink-0 sm:pb-2"
            style={{ color: 'rgba(13,26,4,0.5)' }}
          >
            A selection of projects across SaaS, startups, and growing digital
            brands — crafted to convert and scale.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div>
          {projects.map((item, index) => (
            <VideoCard
              key={item.id}
              item={item}
              index={index}
              topOffset={topOffset}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <motion.button
            whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(0,0,0,0.14)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="inline-flex items-center gap-2.5 rounded px-6 py-3 text-sm font-semibold"
            style={{ background: '#0D1A04', color: '#ffffff' }}
          >
            View All Case Studies
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
