import { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.06 } },
};

function CtaBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1280 560"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Pure black base */}
        <linearGradient id="baseBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="50%" stopColor="#010D05" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>

        {/* Deep aurora — top left, very saturated */}
        <radialGradient id="aurora1" cx="10%" cy="15%" r="70%">
          <stop offset="0%" stopColor="#0D5C28" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#073D1A" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Deep aurora — bottom right */}
        <radialGradient id="aurora2" cx="92%" cy="90%" r="65%">
          <stop offset="0%" stopColor="#136B2E" stopOpacity="0.75" />
          <stop offset="40%" stopColor="#0A4520" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Mid aurora — top right */}
        <radialGradient id="aurora3" cx="90%" cy="10%" r="55%">
          <stop offset="0%" stopColor="#1A7A38" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#0C4A22" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>

        {/* Neon core bloom — punchy center */}
        <radialGradient id="neonCore" cx="50%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#A3FF11" stopOpacity="0.28" />
          <stop offset="30%" stopColor="#5FD660" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#A3FF11" stopOpacity="0" />
        </radialGradient>

        {/* Neon top-right spike */}
        <radialGradient id="neonTR" cx="100%" cy="0%" r="50%">
          <stop offset="0%" stopColor="#A3FF11" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#A3FF11" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#A3FF11" stopOpacity="0" />
        </radialGradient>

        {/* Neon bottom-left spike */}
        <radialGradient id="neonBL" cx="0%" cy="100%" r="45%">
          <stop offset="0%" stopColor="#A3FF11" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#A3FF11" stopOpacity="0" />
        </radialGradient>

        {/* Curve gradients — bolder opacity */}
        <linearGradient id="cL1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A3FF11" stopOpacity="0" />
          <stop offset="25%" stopColor="#A3FF11" stopOpacity="0.6" />
          <stop offset="55%" stopColor="#7FFF00" stopOpacity="0.85" />
          <stop offset="80%" stopColor="#A3FF11" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#A3FF11" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="cL2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A3FF11" stopOpacity="0" />
          <stop offset="30%" stopColor="#A3FF11" stopOpacity="0.55" />
          <stop offset="65%" stopColor="#A3FF11" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#A3FF11" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="cL3" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#A3FF11" stopOpacity="0" />
          <stop offset="20%" stopColor="#A3FF11" stopOpacity="0.45" />
          <stop offset="50%" stopColor="#A3FF11" stopOpacity="0.75" />
          <stop offset="80%" stopColor="#A3FF11" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#A3FF11" stopOpacity="0" />
        </linearGradient>

        {/* Dot pattern — brighter */}
        <pattern
          id="ctaDots"
          width="36"
          height="36"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.9" fill="#A3FF11" opacity="0.35" />
        </pattern>

        {/* Hard vignette — stronger darkening at edges */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="black" stopOpacity="0" />
          <stop offset="70%" stopColor="black" stopOpacity="0.4" />
          <stop offset="100%" stopColor="black" stopOpacity="0.82" />
        </radialGradient>
      </defs>

      {/* ── Base ── */}
      <rect width="1280" height="560" fill="url(#baseBg)" />

      {/* ── Aurora layers ── */}
      <rect width="1280" height="560" fill="url(#aurora1)" />
      <rect width="1280" height="560" fill="url(#aurora2)" />
      <rect width="1280" height="560" fill="url(#aurora3)" />
      <rect width="1280" height="560" fill="url(#neonTR)" />
      <rect width="1280" height="560" fill="url(#neonBL)" />
      <rect width="1280" height="560" fill="url(#neonCore)" />

      {/* ── Dot matrix ── */}
      <rect width="1280" height="560" fill="url(#ctaDots)" opacity="0.55" />

      {/* ── Curves — bolder strokes ── */}

      {/* Curve 1 */}
      <path
        d="M -80 180 C 200 40, 520 340, 820 180 S 1160 50, 1400 280"
        fill="none"
        stroke="url(#cL1)"
        strokeWidth="1.8"
        opacity="0.9"
      />
      <path
        d="M -80 215 C 200 75, 520 375, 820 215 S 1160 85, 1400 315"
        fill="none"
        stroke="url(#cL1)"
        strokeWidth="0.7"
        opacity="0.45"
      />

      {/* Curve 2 */}
      <path
        d="M -80 390 C 200 510, 480 200, 740 370 S 1100 510, 1400 240"
        fill="none"
        stroke="url(#cL2)"
        strokeWidth="1.6"
        opacity="0.85"
      />
      <path
        d="M -80 355 C 200 475, 480 165, 740 335 S 1100 475, 1400 205"
        fill="none"
        stroke="url(#cL2)"
        strokeWidth="0.6"
        opacity="0.4"
      />

      {/* Curve 3 — main hero wave, thickest */}
      <path
        d="M -60 280 C 160 130, 400 430, 640 280 S 980 130, 1340 300"
        fill="none"
        stroke="url(#cL3)"
        strokeWidth="2.2"
        opacity="1"
      />
      {/* Glow echo */}
      <path
        d="M -60 280 C 160 130, 400 430, 640 280 S 980 130, 1340 300"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="8"
        opacity="0.07"
      />
      <path
        d="M -60 280 C 160 130, 400 430, 640 280 S 980 130, 1340 300"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="20"
        opacity="0.03"
      />

      {/* Curve 4 — upper tight arc */}
      <path
        d="M 160 0 C 360 140, 580 20, 780 150 S 1060 270, 1280 60"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="1.0"
        opacity="0.38"
      />

      {/* Curve 5 — lower tight arc */}
      <path
        d="M 0 500 C 240 400, 480 540, 700 420 S 1000 320, 1280 500"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="1.0"
        opacity="0.35"
      />

      {/* ── Neon accent dots — on wave ── */}
      {[
        { cx: 160, cy: 232 },
        { cx: 380, cy: 360 },
        { cx: 640, cy: 280 },
        { cx: 900, cy: 210 },
        { cx: 1120, cy: 292 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.cx} cy={p.cy} r="7" fill="#A3FF11" opacity="0.12" />
          <circle cx={p.cx} cy={p.cy} r="3" fill="#A3FF11" opacity="0.35" />
          <circle cx={p.cx} cy={p.cy} r="1.5" fill="#A3FF11" opacity="0.9" />
        </g>
      ))}

      {/* ── Corner brackets — bolder ── */}
      <path
        d="M 36 36 L 36 82 M 36 36 L 82 36"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="1.8"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M 1244 36 L 1244 82 M 1244 36 L 1198 36"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="1.8"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M 36 524 L 36 478 M 36 524 L 82 524"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="1.8"
        opacity="0.5"
        strokeLinecap="round"
      />
      <path
        d="M 1244 524 L 1244 478 M 1244 524 L 1198 524"
        fill="none"
        stroke="#A3FF11"
        strokeWidth="1.8"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* ── Vignette — stronger ── */}
      <rect width="1280" height="560" fill="url(#vignette)" />

      {/* ── Edge lines — bolder ── */}
      <line
        x1="180"
        y1="1"
        x2="1100"
        y2="1"
        stroke="#A3FF11"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="180"
        y1="559"
        x2="1100"
        y2="559"
        stroke="#A3FF11"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

function MagneticButton({ children, dark }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        background: dark ? 'rgba(255,255,255,0.06)' : '#A3FF11',
        color: dark ? 'rgba(255,255,255,0.8)' : '#061B0F',
        border: dark ? '1px solid rgba(255,255,255,0.14)' : 'none',
        backdropFilter: dark ? 'blur(12px)' : 'none',
      }}
      whileTap={{ scale: 0.96 }}
      whileHover={
        dark
          ? { backgroundColor: 'rgba(255,255,255,0.11)' }
          : {
              boxShadow:
                '0 0 50px rgba(163,255,17,0.65), 0 10px 32px rgba(163,255,17,0.35)',
            }
      }
      className="rounded px-6 py-3 text-sm font-semibold transition-shadow duration-300"
    >
      {children}
    </motion.button>
  );
}

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative w-full px-4 py-20 sm:py-24 overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div
          className="relative w-full overflow-hidden rounded"
          style={{ minHeight: '500px' }}
        >
          <CtaBackground />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-6"
            >
              <motion.span
                className="h-1.5 w-1.5 rounded"
                style={{ background: '#A3FF11' }}
                animate={{ scale: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <span
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: '#A3FF11' }}
              >
                Ready to build?
              </span>
              <motion.span
                className="h-1.5 w-1.5 rounded"
                style={{ background: '#A3FF11' }}
                animate={{ scale: [1, 0.5, 1], opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </motion.div>

            {/* Headline — bigger, bolder */}
            <motion.h2
              variants={fadeUp}
              className="font-title font-bold leading-[1.06] tracking-tight max-w-3xl"
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                color: '#ffffff',
                textShadow: '0 0 80px rgba(163,255,17,0.15)',
              }}
            >
              Your next chapter
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #A3FF11 0%, #e0ff80 45%, #A3FF11 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                starts with one call.
              </span>
            </motion.h2>

            {/* Sub-copy — brighter */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-sm sm:text-base leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              Most projects kick off within 48 hours. No fluff, no templates —
              just a focused team building your brand exactly the way it
              deserves.
            </motion.p>

            {/* Trust badges — brighter */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center justify-center gap-2"
            >
              {[
                '✦ 150+ projects delivered',
                '✦ 48hr kickoff',
                '✦ 5.0★ rated',
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-medium"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <MagneticButton>Book a Free Strategy Call →</MagneticButton>
              <MagneticButton dark>View Our Work</MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
