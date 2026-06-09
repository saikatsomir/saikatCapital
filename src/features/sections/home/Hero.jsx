import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import bg from '../../../assets/images/bg.png';
import thumbnail from '../../../assets/images/thumbnail2.png';
import showreel from '../../../assets/videos/saikatCapital-showreel.mp4';
import clutch from '../../../assets/images/clutch.png';
import { IoIosStar } from 'react-icons/io';

const TRUSTED_LOGOS = [
  'Notion',
  'Linear',
  'Vercel',
  'Loom',
  'Framer',
  'Resend',
];

const STATS = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 40, suffix: '+', label: 'SaaS Brands Scaled' },
  { value: 5, suffix: '★', label: 'Average Rating' },
];

const glassReveal = {
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

const statContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const logoContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const logoItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

function AnimatedCounter({ value, suffix }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function ShowreelPlayer() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!started) {
      video.muted = false;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play();
        });
      }
      setStarted(true);
      setPlaying(true);
    } else if (playing) {
      video.pause();
      setPlaying(false);
    } else {
      video.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className="mx-auto mt-8 sm:mt-12 md:mt-16 cursor-pointer w-full max-w-5xl"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden border border-[#0F2115] rounded">
        {/* Using inline borderRadius since rounded-full on aspect-video looks odd — capped at 16px pill */}
        <video
          ref={videoRef}
          src={showreel}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          loop
          muted
          playsInline
          preload="metadata"
          style={{ aspectRatio: '16/9' }}
        />
        <div style={{ paddingTop: '56.25%', position: 'relative' }}>
          <motion.img
            src={thumbnail}
            alt="Saikat Capital showreel thumbnail"
            className="absolute inset-0 w-full h-full object-cover object-center z-10"
            animate={{ opacity: started ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            style={{ pointerEvents: 'none' }}
          />

          <div
            className="absolute inset-0 transition-colors duration-500 z-20"
            style={{
              background: playing ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.22)',
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center group z-30">
            <motion.div
              className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded border border-white/30 bg-white/10 backdrop-blur-xl"
              animate={{ opacity: playing ? 0 : 1, scale: playing ? 0.85 : 1 }}
              whileHover={
                !playing
                  ? { scale: 1.12, backgroundColor: 'rgba(255,255,255,0.2)' }
                  : {}
              }
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              style={{ pointerEvents: 'none' }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
                className="ml-0.5"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>

            {playing && (
              <motion.div
                className="absolute flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded border border-white/25 bg-white/10 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ pointerEvents: 'none' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Hero = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  const logosRef = useRef(null);
  const logosInView = useInView(logosRef, { once: true, margin: '-60px' });

  return (
    <section
      className="relative w-full overflow-visible pb-32 sm:pb-44 pt-36 sm:pt-48 md:pt-60 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Radial highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

      <motion.div
        className="relative z-50 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          variants={glassReveal}
          className="flex justify-center mb-4 sm:mb-5"
        >
          <span
            className="rounded px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-widest"
            style={{
              color: '#A3FF12',
              background: 'rgba(163,255,18,0.08)',
              border: '1px solid rgba(163,255,18,0.18)',
            }}
          >
            Premium Design & Development Studio
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mx-auto max-w-5xl">
          <motion.h1
            className="font-title font-bold leading-[1.12] text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={glassReveal}
              className="block text-[clamp(30px,5vw,64px)] tracking-tight text-white"
            >
              We Build Digital Products
            </motion.span>
            <motion.span
              variants={glassReveal}
              className="block text-[clamp(30px,5vw,64px)] tracking-tight"
              style={{ color: '#A3FF12' }}
            >
              That Convert & Scale
            </motion.span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          variants={glassReveal}
          className="mx-auto mt-5 sm:mt-6 max-w-[480px] sm:max-w-[620px] text-sm sm:text-lg leading-relaxed px-2 sm:px-0"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Trusted by 150+ SaaS companies, agencies, and e-commerce brands
          worldwide — we design and build interfaces your users love and your
          competitors envy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={glassReveal}
          className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            className="rounded px-6 md:px-10 py-3 text-sm md:text-base font-semibold"
            style={{ background: '#A3FF12', color: '#071A0F' }}
            whileHover={{
              y: -2,
              boxShadow: '0 8px 32px rgba(163,255,18,0.4)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Start Your Project
          </motion.button>

          <motion.button
            className="cursor-pointer rounded border px-6 sm:px-10 py-3 text-sm md:text-base font-medium backdrop-blur-md"
            style={{
              borderColor: 'rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.75)',
            }}
            whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            See Our Work
          </motion.button>
        </motion.div>

        {/* Clutch social proof */}
        <div className="flex justify-center items-center gap-2.5 mt-5 sm:mt-6">
          <img src={clutch} className="w-7 sm:w-8" alt="Clutch" />
          <div className="flex items-center gap-0.5">
            <IoIosStar className="text-yellow-400 text-sm" />
            <IoIosStar className="text-yellow-400 text-sm" />
            <IoIosStar className="text-yellow-400 text-sm" />
            <IoIosStar className="text-yellow-400 text-sm" />
            <IoIosStar className="text-yellow-400 text-sm" />
          </div>
          <span style={{ color: 'rgba(255,255,255,0.25)' }}>|</span>
          <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            150+ Global Brands Served
          </span>
        </div>

        {/* Showreel */}
        <motion.div variants={glassReveal}>
          <ShowreelPlayer />
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="mx-auto mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 max-w-[340px] sm:max-w-[700px] overflow-hidden rounded"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            gap: '1px',
          }}
          variants={statContainerVariants}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              className="px-4 sm:px-6 py-5 sm:py-7 text-center"
              style={{ background: 'rgba(255,255,255,0.02)' }}
              variants={statItemVariants}
            >
              <p
                className="text-2xl sm:text-3xl font-bold leading-none tracking-tight"
                style={{ color: '#ffffff' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p
                className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-widest"
                style={{ color: 'rgba(255,255,255,0.35)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted logos */}
        <div ref={logosRef} className="mt-14 sm:mt-18">
          <motion.p
            className="mb-5 sm:mb-7 text-[10px] sm:text-[11px] uppercase tracking-widest"
            style={{ color: 'rgba(255,255,255,0.25)' }}
            initial={{ opacity: 0 }}
            animate={logosInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Trusted by teams at
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-10"
            variants={logoContainerVariants}
            initial="hidden"
            animate={logosInView ? 'visible' : 'hidden'}
          >
            {TRUSTED_LOGOS.map((name) => (
              <motion.span
                key={name}
                className="cursor-default select-none text-sm sm:text-base font-semibold"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                variants={logoItemVariants}
                whileHover={{ color: 'rgba(255,255,255,0.65)', scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
