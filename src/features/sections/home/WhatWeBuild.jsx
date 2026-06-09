import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import brandbg from '../../../assets/svg/brand.svg';
import saasbg from '../../../assets/svg/saas.svg';
import uiuxbg from '../../../assets/svg/uiux.svg';
import webbg from '../../../assets/svg/web.svg';

const services = [
  {
    id: '01',
    label: 'Brand Design',
    title: 'Brands built to dominate their market.',
    desc: 'From strategy to visual identity — we craft brand systems that make SaaS companies, agencies, and e-commerce stores impossible to ignore.',
    services_label: "What's included:",
    points: [
      'Brand Strategy',
      'Visual Identity System',
      'Logo & Mark Design',
      'Pitch Deck Design',
      'Brand Guidelines',
      'Rebranding',
    ],
    bg: 'brand',
    cta: 'Explore Brand Design',
  },
  {
    id: '02',
    label: 'UI/UX Design',
    title: 'Interfaces that convert and retain users.',
    desc: 'Precision-crafted UI/UX for SaaS products, mobile apps, and marketing sites — designed to reduce churn, lift conversions, and delight users.',
    services_label: "What's included:",
    points: [
      'SaaS Product Design',
      'UX Strategy & Flows',
      'Mobile App Design',
      'Wireframing',
      'Usability Testing',
      'Design Systems',
    ],
    bg: 'uiux',
    cta: 'Explore UI/UX Design',
  },
  {
    id: '03',
    label: 'Web Development',
    title: 'Websites engineered for speed and growth.',
    desc: 'Custom web experiences built for performance, accessibility, and conversions — from high-converting landing pages to full corporate platforms.',
    services_label: "What's included:",
    points: [
      'Custom Development',
      'Responsive Design',
      'Landing Pages',
      'CMS Integration',
      'Performance Audits',
      'Corporate Websites',
    ],
    bg: 'web',
    cta: 'Explore Web Development',
  },
  {
    id: '04',
    label: 'SaaS Development',
    title: 'SaaS products built to scale.',
    desc: 'End-to-end SaaS development — from architecture to UI — engineered for scalability, retention, and long-term product growth.',
    services_label: "What's included:",
    points: [
      'SaaS Platforms',
      'Dashboard Systems',
      'Web Applications',
      'API Integration',
      'Auth & Billing',
      'Product Optimization',
    ],
    bg: 'saas',
    cta: 'Explore SaaS Development',
  },
];

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

const BG_MAP = {
  brand: brandbg,
  uiux: uiuxbg,
  web: webbg,
  saas: saasbg,
};

function CardBackground({ type }) {
  return (
    <img
      src={BG_MAP[type]}
      alt=""
      className="absolute inset-0 w-full h-full object-cover object-center"
      aria-hidden="true"
    />
  );
}

export default function WhatWeBuild() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-24 -mt-24 rounded-t-2xl lg:rounded-t-3xl">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 blur-[140px]"
          style={{ background: 'rgba(163,255,18,0.07)' }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8"
      >
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <motion.span
            variants={itemReveal}
            className="inline-block rounded px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest mb-4"
            style={{
              color: '#3a7d00',
              background: 'rgba(163,255,18,0.1)',
              border: '1px solid rgba(163,255,18,0.25)',
            }}
          >
            What We Build
          </motion.span>

          <motion.h2
            variants={itemReveal}
            className="mx-auto max-w-4xl text-3xl sm:text-5xl lg:text-6xl font-bold font-title leading-[1.08] tracking-tight"
            style={{ color: '#0D1A04' }}
          >
            Design & development for SaaS, agencies, and e-commerce.
          </motion.h2>

          <motion.p
            variants={itemReveal}
            className="mx-auto mt-4 sm:mt-5 max-w-2xl text-sm sm:text-lg leading-relaxed"
            style={{ color: 'rgba(10,26,2,0.55)' }}
          >
            From brand identity to full-stack SaaS — 150+ global clients trust
            us to design and build products that perform.
          </motion.p>
        </div>

        {/* Desktop accordion */}
        <motion.div
          variants={itemReveal}
          className="hidden h-[560px] gap-2 lg:flex"
        >
          {services.map((svc, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={svc.id}
                layout
                onMouseEnter={() => setActive(index)}
                transition={{
                  layout: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                }}
                className={`relative overflow-hidden rounded cursor-pointer flex-shrink-0 ${
                  isActive ? 'flex-[5]' : 'flex-[0.55]'
                }`}
              >
                <CardBackground type={svc.bg} />

                {/* Collapsed tab */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      key="tab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 flex flex-col items-center justify-between py-7"
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">
                        {svc.id}
                      </span>
                      <h3
                        className="text-sm font-semibold"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)',
                          color: 'rgba(255,255,255,0.7)',
                        }}
                      >
                        {svc.label}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded content */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={`active-${svc.id}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex"
                    >
                      <div className="relative z-10 flex flex-col p-8 lg:p-10">
                        <motion.span
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05, duration: 0.5 }}
                          className="text-[10px] font-semibold uppercase tracking-[0.28em]"
                          style={{ color: 'rgba(255,255,255,0.35)' }}
                        >
                          {svc.id} — {svc.label}
                        </motion.span>

                        <div className="mt-14">
                          <motion.h3
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.06,
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="text-4xl lg:text-5xl font-title font-bold leading-[1.1] tracking-tight text-white max-w-sm"
                          >
                            {svc.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.55 }}
                            className="mt-3 text-sm lg:text-base leading-relaxed max-w-md"
                            style={{ color: 'rgba(255,255,255,0.65)' }}
                          >
                            {svc.desc}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.14, duration: 0.55 }}
                            className="mt-6"
                          >
                            <p
                              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
                              style={{ color: 'rgba(255,255,255,0.4)' }}
                            >
                              {svc.services_label}
                            </p>
                            <div className="flex flex-wrap gap-2 max-w-md">
                              {svc.points.map((pt) => (
                                <span
                                  key={pt}
                                  className="rounded border px-3 py-1 text-xs font-medium backdrop-blur-sm"
                                  style={{
                                    borderColor: 'rgba(255,255,255,0.15)',
                                    background: 'rgba(255,255,255,0.08)',
                                    color: 'rgba(255,255,255,0.75)',
                                  }}
                                >
                                  {pt}
                                </span>
                              ))}
                            </div>
                          </motion.div>

                          <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18, duration: 0.5 }}
                            whileHover={{
                              y: -2,
                              boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                            }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-8 inline-flex items-center gap-2 rounded bg-white px-5 py-2.5 text-sm font-semibold"
                            style={{ color: '#0D1A04' }}
                          >
                            {svc.cta}
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
                        </div>
                      </div>

                      <div className="flex-1" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile accordion */}
        <div className="mt-8 flex flex-col gap-3 lg:hidden">
          {services.map((svc, index) => {
            const isOpen = active === index;
            return (
              <div
                key={svc.id}
                onClick={() => setActive(index)}
                className="relative overflow-hidden rounded cursor-pointer"
                style={{ minHeight: isOpen ? 'auto' : '60px' }}
              >
                <CardBackground type={svc.bg} />
                <div className="relative z-10 p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      {svc.label}
                    </span>
                    <span
                      className="text-base font-light"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white leading-snug">
                          {svc.title}
                        </h3>
                        <p
                          className="mt-2 text-sm leading-relaxed"
                          style={{ color: 'rgba(255,255,255,0.55)' }}
                        >
                          {svc.desc}
                        </p>
                        <p
                          className="mt-5 mb-2.5 text-[10px] uppercase tracking-[0.2em]"
                          style={{ color: 'rgba(255,255,255,0.35)' }}
                        >
                          {svc.services_label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {svc.points.map((pt) => (
                            <span
                              key={pt}
                              className="rounded border px-3 py-1 text-xs"
                              style={{
                                borderColor: 'rgba(255,255,255,0.15)',
                                background: 'rgba(255,255,255,0.08)',
                                color: 'rgba(255,255,255,0.7)',
                              }}
                            >
                              {pt}
                            </span>
                          ))}
                        </div>
                        <button
                          className="mt-5 rounded bg-white px-4 py-2 text-sm font-semibold"
                          style={{ color: '#0D1A04' }}
                        >
                          {svc.cta}
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
