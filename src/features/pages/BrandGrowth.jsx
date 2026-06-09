import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import upworkThumbnail from '../../assets/images/upwork_case_thumbnail.png';
import upworkLogo from '../../assets/images/upwork_logo.png';
import uberalThumbnail from '../../assets/images/uberal_case_thumbnail.png';
import uberalLogo from '../../assets/images/uberal_logo.png';
import trustlyThumbnail from '../../assets/images/trustly_case_thumbnail.png';
import trustlyLogo from '../../assets/images/trustly_logo.svg';

// ─── Data ─────────────────────────────────────────────────────────────────────

const CASES = [
  {
    id: 0,
    src: 'https://r2.vidzflow.com/source/fe96a9b2-cf76-444c-89b7-7091cce9df73.mp4',
    thumbnail: uberalThumbnail,
    logo: uberalLogo,
    tags: ['SaaS', 'Web Design', 'Development'],
    quote:
      'Highly recommend for a migration from another CMS. We came for a Volkswagen, they delivered a Ferrari.',
    author: 'Andrea Lotito',
    role: 'Digital Marketing Manager at Uberall',
    href: '/case-studies/uberall',
    stats: [
      { value: '21.4%', label: 'YoY demo increase' },
      { value: '300+', label: 'Pages per language' },
    ],
  },
  {
    id: 1,
    src: 'https://r2.vidzflow.com/source/8e8a08f4-6f92-45a7-83cb-2d82bc718a53.mp4',
    thumbnail: upworkThumbnail,
    logo: upworkLogo,
    tags: ['E-commerce', 'UI/UX', 'Development'],
    quote:
      "We're able to create and modify pages quickly and continually improve the performance of our content.",
    author: 'Robert McCauley',
    role: 'Sr. Dir, Content Marketing at Upwork',
    href: '/case-studies/upwork',
    stats: [
      { value: '3.2×', label: 'Content output' },
      { value: '40%', label: 'Faster page updates' },
    ],
  },
  {
    id: 2,
    src: 'https://r2.vidzflow.com/source/4039ecc7-38da-49e3-b25d-bba19bd3f5c4.mp4',
    thumbnail: trustlyThumbnail,
    logo: trustlyLogo,
    tags: ['Agency', 'Brand Design', 'Strategy'],
    quote:
      "It's like having a fully integrated core team that helps you with everything from strategy to design to development.",
    author: 'Nico Bonassi',
    role: 'Brand Director at Trustly',
    href: '/case-studies/trustly',
    stats: [
      { value: '$100K', label: 'Annual cost savings' },
      { value: '16', label: 'Locales launched' },
    ],
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Video Card ───────────────────────────────────────────────────────────────

function VideoCard({ card }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const handleMouseEnter = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="flex flex-col group"
    >
      {/* Video container */}
      <div
        className="relative w-full rounded overflow-hidden cursor-pointer"
        style={{ background: 'rgba(255,255,255,0.03)' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Thumbnail */}
        <img
          src={card.thumbnail}
          alt={card.author}
          className={`w-full h-auto block transition-opacity duration-500 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Video */}
        <video
          ref={videoRef}
          src={card.src}
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85 pointer-events-none" />

        {/* Border — neon on hover */}
        <div
          className="absolute inset-0 rounded pointer-events-none transition-all duration-500 border"
          style={{
            borderColor: playing
              ? 'rgba(163,255,18,0.22)'
              : 'rgba(255,255,255,0.07)',
            boxShadow: playing
              ? '0 0 36px rgba(163,255,18,0.07) inset'
              : 'none',
          }}
        />

        {/* Tags — top */}
        <div className="absolute top-4 left-0 right-0 flex justify-center flex-wrap gap-1.5 px-4 pointer-events-none">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2.5 py-1 rounded border backdrop-blur-md uppercase tracking-[0.15em]"
              style={{
                color: 'rgba(255,255,255,0.7)',
                background: 'rgba(255,255,255,0.08)',
                borderColor: 'rgba(255,255,255,0.12)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Logo — center, fades on play */}
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            src={card.logo}
            alt={card.author}
            className="w-28 h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Quote + author — bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-center text-center pointer-events-none">
          <p
            className="text-sm leading-snug font-light italic line-clamp-3"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            "{card.quote}"
          </p>
          <p
            className="text-sm font-semibold mt-2"
            style={{ color: '#ffffff' }}
          >
            {card.author}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            {card.role}
          </p>
        </div>
      </div>

      {/* Stats — below card */}
      {card.stats.length > 0 && (
        <div
          className="flex mt-3 rounded overflow-hidden border divide-x"
          style={{
            borderColor: 'rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.03)',
          }}
        >
          {card.stats.map((s) => (
            <div
              key={s.label}
              className="flex-1 flex flex-col items-center text-center px-4 py-4"
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <p
                className="font-title text-2xl font-bold leading-none"
                style={{ color: '#A3FF12' }}
              >
                {s.value}
              </p>
              <p
                className="text-[10px] mt-1.5 uppercase tracking-[0.18em]"
                style={{ color: 'rgba(255,255,255,0.3)' }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {card.stats.length === 0 && <div className="mt-3 h-[72px]" />}
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export const BrandGrowth = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      className="relative w-full overflow-hidden py-20 sm:py-24"
      style={{ background: '#071A0F' }}
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[480px] w-[700px] -translate-x-1/2 opacity-[0.10]"
          style={{
            background: 'radial-gradient(ellipse, #A3FF12 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />
        <div
          className="absolute left-1/2 bottom-0 h-[280px] w-[500px] -translate-x-1/2 opacity-[0.05]"
          style={{
            background: 'radial-gradient(ellipse, #A3FF12 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Dot grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.022]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="bg-dots"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.9" fill="#A3FF12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-dots)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          ref={headerRef}
          variants={stagger}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="mb-12 sm:mb-16"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-px w-8" style={{ background: '#A3FF12' }} />
            <span
              className="text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: '#A3FF12' }}
            >
              Growth Results
            </span>
          </motion.div>

          {/* Headline + subtext split */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              variants={fadeUp}
              className="font-title text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight"
              style={{ color: '#ffffff' }}
            >
              Real growth for{' '}
              <span style={{ color: 'rgba(255,255,255,0.22)' }}>
                real brands.
              </span>{' '}
              <br className="hidden lg:block" />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #A3FF12 0%, #d4ff80 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                150+ clients worldwide.
              </span>
            </motion.h2>

            <motion.div variants={fadeUp} className="lg:max-w-[260px]">
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                We've partnered with SaaS companies, agencies, and e-commerce
                brands worldwide to design and build products that actually
                grow. Hover any card to see the work.
              </p>
              <motion.button
                className="mt-5 inline-flex items-center gap-2.5 rounded px-6 py-3 text-sm font-semibold"
                style={{ background: '#A3FF12', color: '#071A0F' }}
                whileHover={{
                  y: -2,
                  boxShadow: '0 8px 28px rgba(163,255,18,0.35)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                View All Work
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASES.map((card) => (
            <VideoCard key={card.id} card={card} />
          ))}
        </div>

        {/* Bottom proof strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded border"
          style={{
            borderColor: 'rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.07)',
          }}
        >
          {[
            { value: '150+', label: 'Projects delivered' },
            { value: '40+', label: 'SaaS brands scaled' },
            { value: '$2M+', label: 'Client revenue driven' },
            { value: '5.0★', label: 'Average rating' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-1.5 px-6 py-7 text-center"
              style={{ background: '#071A0F' }}
            >
              <span
                className="font-title text-3xl font-bold leading-none"
                style={{ color: '#A3FF12' }}
              >
                {s.value}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.2em]"
                style={{ color: 'rgba(255,255,255,0.28)' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
