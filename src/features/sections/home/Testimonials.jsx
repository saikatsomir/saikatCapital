import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    id: 0,
    quote:
      "Our SaaS onboarding had a 58% drop-off at step two — we'd lived with it for months. Saikat Capital identified the exact friction point in day one, rebuilt the flow, and our activation rate jumped from 31% to 67% within three weeks of launch.",
    author: 'Marcus Reynolds',
    role: 'CEO',
    company: 'Trackful',
    avatar: 'MR',
    category: 'SaaS Product',
    metric: '+36pt',
    metricLabel: 'Activation rate',
  },
  {
    id: 1,
    quote:
      "I handed them a Figma file that was basically a graveyard — four button styles, no spacing system, components named 'button copy 3 final (2)'. They delivered a proper design system in five days. Engineers actually thanked me for once.",
    author: 'Anika Sharma',
    role: 'Head of Product',
    company: 'Loopwise',
    avatar: 'AS',
    category: 'UI/UX Design',
    metric: '5 days',
    metricLabel: 'Design system delivered',
  },
  {
    id: 2,
    quote:
      'We were 10 days from a Series A pitch with no brand identity. Saikat Capital built the entire visual system — logo, type, color, deck — in eight days. Every single investor commented on how polished the presentation looked.',
    author: 'David Osei',
    role: 'Co-founder',
    company: 'Vaultly',
    avatar: 'DO',
    category: 'Brand Design',
    metric: '8 days',
    metricLabel: 'Full brand delivered',
  },
  {
    id: 3,
    quote:
      "I've worked with five dev agencies. Every single one handed back messy, undocumented code I had to clean up myself. Saikat Capital shipped clean, typed React components with a 98 Lighthouse score out of the box. I didn't ask for that — they just do it.",
    author: 'Sophie Nakamura',
    role: 'CTO',
    company: 'Beakon',
    avatar: 'SN',
    category: 'Web Development',
    metric: '98',
    metricLabel: 'Lighthouse score',
  },
  {
    id: 4,
    quote:
      'They spent the first session asking why customers were churning — not what features to build next. That reframe changed everything. We shipped a leaner product and churn dropped 43% in the following quarter.',
    author: 'Omar Khalid',
    role: 'Product Lead',
    company: 'Criterio',
    avatar: 'OK',
    category: 'SaaS Product',
    metric: '−43%',
    metricLabel: 'Churn reduction',
  },
  {
    id: 5,
    quote:
      "Contract signed Monday. Live site 16 days later. Responsive, fast, pixel-perfect. Not a single scope argument, not a single missed detail. The brief said it, they built it. I've never had that experience with any agency before.",
    author: 'Elena Vasquez',
    role: 'Marketing Director',
    company: 'Stellarpath',
    avatar: 'EV',
    category: 'Web Development',
    metric: '16 days',
    metricLabel: 'Brief to live site',
  },
  {
    id: 6,
    quote:
      "Our e-commerce conversion rate was stuck at 1.8% for two years. After Saikat Capital redesigned our product pages and checkout flow, it hit 3.4% in six weeks. That's an extra $80K in monthly revenue from the same traffic.",
    author: 'James Okafor',
    role: 'Founder',
    company: 'Verdant Store',
    avatar: 'JO',
    category: 'UI/UX Design',
    metric: '+88%',
    metricLabel: 'Conversion lift',
  },
  {
    id: 7,
    quote:
      'We came in as a bootstrap agency with a WordPress site from 2019. Saikat Capital rebuilt everything — brand, site, positioning — and our average deal size went from $3K to $11K. Clients stopped negotiating on price.',
    author: 'Fatima Al-Rashid',
    role: 'Managing Director',
    company: 'Luminary Agency',
    avatar: 'FA',
    category: 'Brand Design',
    metric: '3.6×',
    metricLabel: 'Average deal size',
  },
  {
    id: 8,
    quote:
      'We needed a SaaS dashboard built from scratch — auth, billing, multi-tenancy, the works. Most agencies quoted 3 months. Saikat Capital delivered a production-ready v1 in 5 weeks. We launched on schedule and closed our first 20 customers the same month.',
    author: 'Liam Thornton',
    role: 'Founder',
    company: 'Operand',
    avatar: 'LT',
    category: 'SaaS Product',
    metric: '5 weeks',
    metricLabel: 'SaaS v1 delivered',
  },
];

const CATEGORIES = [
  'All',
  'SaaS Product',
  'UI/UX Design',
  'Brand Design',
  'Web Development',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.25 } },
};

// ─── Earth Curvature Canvas Background ────────────────────────────────────────

function EarthCurvatureBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;

      ctx.fillStyle = '#010A04';
      ctx.fillRect(0, 0, W, H);

      const earthR = W * 1.6;
      const earthCX = W * 0.5;
      const earthCY = H + earthR * 0.72;

      const earthGrad = ctx.createRadialGradient(
        earthCX + earthR * 0.08,
        earthCY - earthR * 0.55,
        earthR * 0.02,
        earthCX,
        earthCY,
        earthR
      );
      earthGrad.addColorStop(0.0, '#1A4A20');
      earthGrad.addColorStop(0.12, '#0F3518');
      earthGrad.addColorStop(0.28, '#082412');
      earthGrad.addColorStop(0.48, '#051A0D');
      earthGrad.addColorStop(0.68, '#030F08');
      earthGrad.addColorStop(1.0, '#010804');

      ctx.save();
      ctx.beginPath();
      ctx.arc(earthCX, earthCY, earthR, 0, Math.PI * 2);
      ctx.fillStyle = earthGrad;
      ctx.fill();
      ctx.restore();

      const cityLights = [
        { ox: -0.28, oy: -0.015, size: 0.018, a: 0.18 },
        { ox: -0.05, oy: -0.018, size: 0.022, a: 0.2 },
        { ox: 0.08, oy: -0.02, size: 0.016, a: 0.16 },
        { ox: 0.22, oy: -0.014, size: 0.014, a: 0.13 },
        { ox: 0.35, oy: -0.018, size: 0.02, a: 0.17 },
      ];
      cityLights.forEach(({ ox, oy, size, a }) => {
        const lx = earthCX + ox * earthR;
        const ly = earthCY + oy * earthR;
        const lr = size * earthR;
        const lg = ctx.createRadialGradient(lx, ly, 0, lx, ly, lr);
        lg.addColorStop(0, `rgba(163,255,18,${a})`);
        lg.addColorStop(0.4, `rgba(120,220,10,${a * 0.5})`);
        lg.addColorStop(1, 'rgba(80,180,0,0)');
        ctx.save();
        ctx.beginPath();
        ctx.arc(lx, ly, lr, 0, Math.PI * 2);
        ctx.fillStyle = lg;
        ctx.fill();
        ctx.restore();
      });

      const rimGrad = ctx.createRadialGradient(
        earthCX,
        earthCY,
        earthR * 0.975,
        earthCX,
        earthCY,
        earthR * 1.03
      );
      rimGrad.addColorStop(0, 'rgba(163,255,18,0)');
      rimGrad.addColorStop(0.62, 'rgba(163,255,18,0.28)');
      rimGrad.addColorStop(0.8, 'rgba(163,255,18,0.55)');
      rimGrad.addColorStop(1, 'rgba(60,160,0,0)');
      ctx.save();
      ctx.beginPath();
      ctx.arc(earthCX, earthCY, earthR * 1.03, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();
      ctx.restore();

      const spaceOver = ctx.createLinearGradient(0, 0, 0, H);
      spaceOver.addColorStop(0, 'rgba(1,10,4,0.96)');
      spaceOver.addColorStop(0.45, 'rgba(1,8,3,0.70)');
      spaceOver.addColorStop(0.72, 'rgba(1,6,2,0.30)');
      spaceOver.addColorStop(1, 'rgba(1,4,2,0.0)');
      ctx.fillStyle = spaceOver;
      ctx.fillRect(0, 0, W, H);

      const starCount = 160;
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * W;
        const y = Math.random() * H * 0.75;
        const r = Math.random() * 1.0 + 0.15;
        const depthFactor = 1 - (y / (H * 0.75)) * 0.6;
        const a = (Math.random() * 0.5 + 0.15) * depthFactor;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,255,200,${a})`;
        ctx.fill();
      }
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}

function DotGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="test-dots"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.9" fill="#A3FF12" opacity="0.55" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#test-dots)" opacity="0.03" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#A3FF12">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────

function TestimonialCard({ t }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col justify-between gap-5 rounded border p-6 overflow-hidden transition-all duration-300 cursor-default"
      style={{
        borderColor: hovered
          ? 'rgba(163,255,18,0.2)'
          : 'rgba(255,255,255,0.06)',
        background: hovered
          ? 'rgba(163,255,18,0.04)'
          : 'rgba(255,255,255,0.03)',
        boxShadow: hovered
          ? '0 16px 48px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(163,255,18,0.1)'
          : '0 1px 4px rgba(0,0,0,0.2)',
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(163,255,18,0.07) 0%, transparent 70%)',
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Stars + category */}
      <div className="relative z-10 flex items-start justify-between">
        <Stars />
        <span
          className="rounded border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300"
          style={{
            borderColor: hovered
              ? 'rgba(163,255,18,0.3)'
              : 'rgba(255,255,255,0.1)',
            color: hovered ? '#A3FF12' : 'rgba(255,255,255,0.35)',
            background: hovered
              ? 'rgba(163,255,18,0.08)'
              : 'rgba(255,255,255,0.04)',
          }}
        >
          {t.category}
        </span>
      </div>

      {/* Quote */}
      <div className="relative z-10 flex-1">
        <div
          className="absolute -top-2 -left-1 font-title text-[72px] leading-none select-none transition-colors duration-300"
          style={{
            color: hovered ? 'rgba(163,255,18,0.15)' : 'rgba(255,255,255,0.04)',
          }}
        >
          "
        </div>
        <p
          className="relative text-sm leading-[1.75]"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          {t.quote}
        </p>
      </div>

      {/* Divider */}
      <div
        className="relative z-10 h-px w-full transition-colors duration-300"
        style={{
          background: hovered
            ? 'rgba(163,255,18,0.18)'
            : 'rgba(255,255,255,0.07)',
        }}
      />

      {/* Author + metric */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded text-xs font-bold transition-colors duration-300"
            style={{
              background: hovered ? '#A3FF12' : 'rgba(163,255,18,0.12)',
              color: hovered ? '#071A0F' : '#A3FF12',
            }}
          >
            {t.avatar}
          </div>
          <div>
            <p
              className="text-sm font-semibold leading-tight"
              style={{ color: '#ffffff' }}
            >
              {t.author}
            </p>
            <p
              className="text-xs leading-tight mt-0.5"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              {t.role}, {t.company}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end flex-shrink-0">
          <span
            className="font-title text-xl font-bold leading-none transition-colors duration-300"
            style={{ color: hovered ? '#A3FF12' : 'rgba(255,255,255,0.75)' }}
          >
            {t.metric}
          </span>
          <span
            className="text-[10px] text-right leading-tight mt-0.5 uppercase tracking-[0.14em]"
            style={{ color: 'rgba(255,255,255,0.25)' }}
          >
            {t.metricLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Featured Quote ───────────────────────────────────────────────────────────

function FeaturedQuote() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded mb-10"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        padding: 'clamp(28px,5vw,52px)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(163,255,18,0.55) 30%, rgba(163,255,18,0.55) 70%, transparent)',
        }}
      />
      {/* Corner glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[280px] w-[360px] opacity-[0.12]"
        style={{
          background: 'radial-gradient(ellipse, #A3FF12 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <Stars />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.25em] ml-1"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Featured Review
            </span>
          </div>
          <p
            className="font-title font-bold leading-[1.28] tracking-tight"
            style={{ fontSize: 'clamp(18px,2.6vw,32px)', color: '#ffffff' }}
          >
            "We had three agencies ghost us mid-project in eight months. Saikat
            Capital delivered a complete SaaS design system and marketing site
            in four weeks — on scope, on budget, zero drama. Our engineering
            team said it was the{' '}
            <span style={{ color: '#A3FF12' }}>
              cleanest handoff they'd ever received from a design partner."
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end flex-shrink-0">
          <div className="flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded text-sm font-bold flex-shrink-0"
              style={{ background: '#A3FF12', color: '#071A0F' }}
            >
              RK
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: '#ffffff' }}>
                Ryan Kowalski
              </p>
              <p
                className="text-xs mt-0.5"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                VP of Product, Nexlify
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p
                className="font-title text-2xl font-bold leading-none"
                style={{ color: '#A3FF12' }}
              >
                4 weeks
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mt-1"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                Full delivery
              </p>
            </div>
            <div
              className="w-px h-8"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            />
            <div className="text-center">
              <p
                className="font-title text-2xl font-bold leading-none"
                style={{ color: '#A3FF12' }}
              >
                $0
              </p>
              <p
                className="text-[10px] uppercase tracking-[0.2em] mt-1"
                style={{ color: 'rgba(255,255,255,0.25)' }}
              >
                Scope creep
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const filtered =
    activeFilter === 'All'
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeFilter);

  return (
    <section
      className="relative w-full overflow-hidden py-20 sm:py-24"
      style={{ background: '#010A04' }}
    >
      <EarthCurvatureBackground />
      <DotGrid />

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
              Client Stories
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              variants={fadeUp}
              className="font-title text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight max-w-xl"
              style={{ color: '#ffffff' }}
            >
              Words from 150+ brands
              <br />
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #A3FF12 0%, #d4ff80 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                we've built and scaled.
              </span>
            </motion.h2>

            {/* Proof numbers */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 sm:gap-8 flex-shrink-0"
            >
              {[
                { value: '150+', label: 'Projects delivered' },
                { value: '5.0★', label: 'Average rating' },
                { value: '98%', label: 'Would recommend' },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-6 sm:gap-8">
                  {i > 0 && (
                    <div
                      className="w-px h-10"
                      style={{ background: 'rgba(255,255,255,0.1)' }}
                    />
                  )}
                  <div className="flex flex-col">
                    <span
                      className="font-title text-2xl sm:text-3xl font-bold leading-none"
                      style={{ color: '#ffffff' }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="text-xs mt-1"
                      style={{ color: 'rgba(255,255,255,0.3)' }}
                    >
                      {s.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Featured */}
        <FeaturedQuote />

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="rounded border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-200"
                style={{
                  borderColor: isActive ? '#A3FF12' : 'rgba(255,255,255,0.1)',
                  background: isActive ? '#A3FF12' : 'transparent',
                  color: isActive ? '#071A0F' : 'rgba(255,255,255,0.4)',
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-14 sm:mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Ready to become our next success story?
          </p>
          <motion.button
            className="rounded px-6 py-3 text-sm font-semibold"
            style={{ background: '#A3FF12', color: '#071A0F' }}
            whileHover={{ y: -2, boxShadow: '0 8px 32px rgba(163,255,18,0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Start Your Project →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
