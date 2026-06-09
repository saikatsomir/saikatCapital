import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import {
  Search,
  Compass,
  Paintbrush,
  Code2,
  Rocket,
  Clock,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const STEPS = [
  {
    number: '01',
    phase: 'Discovery',
    title: 'We learn your world before we touch ours.',
    body: 'Deep-dive sessions into your business model, users, competitors, and goals. We map the terrain before we move a single pixel.',
    deliverables: [
      'Brand Audit',
      'Competitor Analysis',
      'User Personas',
      'Project Roadmap',
    ],
    duration: '3–5 days',
    Icon: Search,
    detail:
      'We start every engagement by listening — not pitching. Stakeholder interviews, user research, and competitive teardowns give us the full picture before a single design decision is made.',
  },
  {
    number: '02',
    phase: 'Strategy',
    title: 'Every decision earns its place.',
    body: 'We define brand positioning, information architecture, and conversion strategy. The blueprint that makes the build inevitable.',
    deliverables: [
      'Brand Strategy Doc',
      'IA & Sitemaps',
      'Conversion Framework',
      'Tech Stack Decision',
    ],
    duration: '4–7 days',
    Icon: Compass,
    detail:
      "Strategy is where most agencies cut corners. We don't. Every page, every component, every word is mapped to a business goal before Figma opens.",
  },
  {
    number: '03',
    phase: 'Design',
    title: 'Interfaces that feel inevitable.',
    body: "High-fidelity UI crafted in Figma — typography, motion, component systems. You review, we refine until it's exactly right.",
    deliverables: [
      'Wireframes',
      'UI Design System',
      'Interactive Prototype',
      'Motion Spec',
    ],
    duration: '7–14 days',
    Icon: Paintbrush,
    detail:
      'We design with code in mind — no design handoff surprises. Every component is built for real-world constraints: accessibility, responsiveness, and motion that ships.',
  },
  {
    number: '04',
    phase: 'Build',
    title: 'Production code. Not a prototype.',
    body: 'React, Tailwind, Framer Motion — engineered for performance, accessibility, and scale. Every component tested across breakpoints.',
    deliverables: [
      'React Codebase',
      'CMS Integration',
      'Performance Audit',
      'Cross-browser QA',
    ],
    duration: '10–21 days',
    Icon: Code2,
    detail:
      "Clean, documented, scalable code your team can own long-term. We don't use page builders. Everything is purpose-built for your product and performance budget.",
  },
  {
    number: '05',
    phase: 'Launch',
    title: 'Ship with confidence, not prayers.',
    body: 'Staged deployment, analytics setup, SEO foundations, and a handoff so thorough your team can own it from day one.',
    deliverables: [
      'Deployment',
      'Analytics Setup',
      'SEO Foundations',
      'Team Handoff',
    ],
    duration: '2–3 days',
    Icon: Rocket,
    detail:
      'Launch day is the beginning, not the end. We stay on-call through go-live, monitor for issues, and hand off with full documentation so your team is never stuck.',
  },
];

const STATS = [
  { label: 'Avg. total timeline', value: '26–50 days' },
  { label: 'Revision rounds', value: 'Unlimited' },
  { label: 'Clients launched', value: '150+' },
];

// ─── Step Node ────────────────────────────────────────────────────────────────

function StepNode({ step, isLast, isActive, nodeRef }) {
  const { Icon } = step;
  return (
    <div
      ref={nodeRef}
      className="relative grid grid-cols-[32px_1fr] sm:grid-cols-[48px_1fr] gap-4 sm:gap-6 items-start"
    >
      {/* Dot */}
      <div className="relative flex justify-center pt-2 z-10">
        <div
          className="flex h-6 w-6 items-center justify-center rounded border-2 transition-all duration-500"
          style={{
            backgroundColor: isActive ? '#0D1A04' : '#ffffff',
            borderColor: isActive ? '#0D1A04' : 'rgba(13,26,4,0.2)',
            boxShadow: isActive ? '0 0 0 5px rgba(13,26,4,0.07)' : 'none',
          }}
        >
          <div
            className="h-2.5 w-2.5 rounded transition-all duration-500"
            style={{
              backgroundColor: isActive ? '#A3FF12' : 'rgba(13,26,4,0.18)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`flex flex-col gap-4 ${
          isLast ? 'pb-0' : 'pb-12 sm:pb-16 lg:pb-24'
        }`}
      >
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span
            className="font-mono text-sm font-bold tracking-wider"
            style={{ color: '#0D1A04' }}
          >
            {step.number}
          </span>
          <span
            className="text-xs font-bold"
            style={{ color: 'rgba(13,26,4,0.25)' }}
          >
            /
          </span>
          <span
            className="text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: '#0D1A04' }}
          >
            {step.phase}
          </span>
          <span
            className="text-xs font-bold"
            style={{ color: 'rgba(13,26,4,0.25)' }}
          >
            /
          </span>
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold rounded px-2.5 py-0.5"
            style={{ color: '#0D1A04', background: 'rgba(13,26,4,0.07)' }}
          >
            <Clock size={11} strokeWidth={2} />
            {step.duration}
          </span>
        </div>

        {/* Title & body */}
        <div className="space-y-2.5">
          <h3
            className="font-title text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight leading-snug transition-colors duration-500"
            style={{ color: isActive ? '#0D1A04' : 'rgba(13,26,4,0.38)' }}
          >
            {step.title}
          </h3>
          <p
            className="text-sm sm:text-base leading-relaxed max-w-lg transition-colors duration-500"
            style={{
              color: isActive ? 'rgba(13,26,4,0.65)' : 'rgba(13,26,4,0.28)',
            }}
          >
            {step.body}
          </p>
        </div>

        {/* Deliverable chips */}
        <div className="flex flex-wrap gap-2">
          {step.deliverables.map((d) => (
            <span
              key={d}
              className="inline-flex items-center gap-1.5 rounded border px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-500"
              style={{
                borderColor: isActive
                  ? 'rgba(13,26,4,0.14)'
                  : 'rgba(13,26,4,0.07)',
                backgroundColor: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                color: isActive ? '#0D1A04' : 'rgba(13,26,4,0.3)',
              }}
            >
              <Icon
                size={12}
                strokeWidth={2}
                style={{ color: isActive ? '#0D1A04' : 'rgba(13,26,4,0.22)' }}
              />
              {d}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Sticky Panel ─────────────────────────────────────────────────────────────

function StickyPanel({ activeIndex }) {
  const step = STEPS[activeIndex];
  const { Icon } = step;
  return (
    <div className="flex flex-col gap-3">
      {/* Main card — dark */}
      <div
        className="rounded border p-6"
        style={{ background: '#0D1A04', borderColor: 'rgba(255,255,255,0.08)' }}
      >
        {/* Icon + phase */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="h-11 w-11 rounded flex items-center justify-center shrink-0"
            style={{ background: 'rgba(163,255,18,0.12)' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Icon
                  size={22}
                  strokeWidth={1.75}
                  style={{ color: '#A3FF12' }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.25em]"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Phase {step.number}
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex + '-phase'}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="text-base font-bold mt-0.5"
                style={{ color: '#ffffff' }}
              >
                {step.phase}
              </motion.p>
            </AnimatePresence>
          </div>
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold rounded px-2.5 py-1 shrink-0"
            style={{ color: '#A3FF12', background: 'rgba(163,255,18,0.1)' }}
          >
            <Clock size={11} strokeWidth={2} />
            {step.duration}
          </span>
        </div>

        {/* Detail */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeIndex + '-detail'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="text-sm leading-relaxed mb-6 pl-4 border-l-2"
            style={{
              color: 'rgba(255,255,255,0.55)',
              borderColor: 'rgba(163,255,18,0.3)',
            }}
          >
            {step.detail}
          </motion.p>
        </AnimatePresence>

        {/* Deliverables */}
        <p
          className="text-[11px] font-bold uppercase tracking-[0.25em] mb-3"
          style={{ color: 'rgba(255,255,255,0.28)' }}
        >
          Deliverables
        </p>
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-3">
          {step.deliverables.map((d, i) => (
            <AnimatePresence mode="wait" key={i}>
              <motion.div
                key={activeIndex + '-d-' + i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 4 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                <CheckCircle2
                  size={13}
                  strokeWidth={2}
                  style={{ color: '#A3FF12', flexShrink: 0 }}
                />
                {d}
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* Progress pills */}
      <div className="flex gap-1.5 px-1">
        {STEPS.map((s, i) => (
          <div
            key={s.number}
            className="h-1 flex-1 rounded transition-all duration-500"
            style={{
              backgroundColor:
                i === activeIndex
                  ? '#A3FF12'
                  : i < activeIndex
                  ? 'rgba(163,255,18,0.28)'
                  : 'rgba(13,26,4,0.12)',
            }}
          />
        ))}
      </div>

      {/* CTA card — deeper dark */}
      <div
        className="rounded border p-5"
        style={{ background: '#071A0F', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <p className="text-base font-bold" style={{ color: '#ffffff' }}>
          Ready to kick off?
        </p>
        <p
          className="text-sm mt-1 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          Most projects start inside 48 hours. No retainer required.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex -space-x-2">
            {['#A3FF12', '#2a7a1a', '#0D1A04', '#6BBF44'].map((bg, i) => (
              <div
                key={i}
                className="h-6 w-6 rounded border-2"
                style={{ backgroundColor: bg, borderColor: '#071A0F' }}
              />
            ))}
          </div>
          <span
            className="text-xs font-medium"
            style={{ color: 'rgba(255,255,255,0.38)' }}
          >
            Trusted by 150+ founders
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button
            className="w-full flex items-center justify-center gap-2 rounded px-4 py-3 text-sm font-semibold"
            style={{ background: '#A3FF12', color: '#071A0F' }}
          >
            Book a Free Call
            <ArrowRight size={14} strokeWidth={2.5} />
          </button>
          <button
            className="w-full rounded border px-4 py-3 text-sm font-medium"
            style={{
              borderColor: 'rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.55)',
              background: 'transparent',
            }}
          >
            See Our Work
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Process() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const nodeRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observers = nodeRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 bg-gray-100 sm:py-24"
      style={
        {
          // background:
          //   'linear-gradient(180deg, #ffffff 0%, #F0F4EE 50%, #E8EFE5 100%)',
        }
      }
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8" style={{ background: '#0D1A04' }} />
            <span
              className="text-[11px] font-semibold uppercase tracking-widest"
              style={{ color: '#0D1A04' }}
            >
              How We Work
            </span>
          </div>
          <h2
            className="font-title text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.08] tracking-tight"
            style={{ color: '#0D1A04' }}
          >
            A process built for{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #1a4a10 0%, #2e7a18 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              zero surprises.
            </span>
          </h2>
          <p
            className="mt-4 text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ color: 'rgba(13,26,4,0.55)' }}
          >
            From first call to live product — a clear, collaborative process
            that keeps you informed at every step.
          </p>
        </div>

        {/* ── Stats strip ── */}
        <div className="mb-14 sm:mb-20 grid grid-cols-3 gap-3 max-w-lg">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-1 rounded border px-4 py-4"
              style={{
                borderColor: 'rgba(13,26,4,0.1)',
                background: '#ffffff',
              }}
            >
              <span
                className="text-xs font-medium leading-tight"
                style={{ color: 'rgba(13,26,4,0.45)' }}
              >
                {stat.label}
              </span>
              <span
                className="text-base font-bold tracking-tight"
                style={{ color: '#0D1A04' }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* ── Two-column ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-start">
          {/* Left — Timeline */}
          <div ref={timelineRef} className="relative">
            <div
              className="absolute left-[15px] sm:left-[23px] top-2 bottom-0 w-px origin-top z-0"
              style={{ backgroundColor: 'rgba(13,26,4,0.1)' }}
            />
            <motion.div
              className="absolute left-[15px] sm:left-[23px] top-2 bottom-0 w-px origin-top z-0"
              style={{ backgroundColor: '#0D1A04', scaleY }}
            />

            <div className="space-y-0">
              {STEPS.map((step, index) => (
                <StepNode
                  key={step.number}
                  step={step}
                  isLast={index === STEPS.length - 1}
                  isActive={index === activeIndex}
                  nodeRef={(el) => (nodeRefs.current[index] = el)}
                />
              ))}
            </div>

            {/* Terminal cap */}
            <div className="relative grid grid-cols-[32px_1fr] sm:grid-cols-[48px_1fr] gap-4 sm:gap-6 items-center mt-1">
              <div className="flex justify-center z-10">
                <CheckCircle2
                  size={16}
                  strokeWidth={2.5}
                  style={{ color: '#0D1A04' }}
                />
              </div>
              <span
                className="text-sm font-bold uppercase tracking-[0.25em]"
                style={{ color: '#0D1A04' }}
              >
                You're live.
              </span>
            </div>

            {/* Mobile CTA */}
            <div
              className="lg:hidden mt-10 rounded border p-5 sm:p-6"
              style={{
                background: '#0D1A04',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
                <div>
                  <p
                    className="text-base font-bold"
                    style={{ color: '#ffffff' }}
                  >
                    Ready to kick off?
                  </p>
                  <p
                    className="text-sm mt-1 max-w-xs leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    Most projects start inside 48 hours. No retainer required.
                  </p>
                  <div className="flex items-center gap-2 pt-3">
                    <div className="flex -space-x-2">
                      {['#A3FF12', '#2a7a1a', '#0D1A04', '#6BBF44'].map(
                        (bg, i) => (
                          <div
                            key={i}
                            className="h-5 w-5 rounded border-2"
                            style={{
                              backgroundColor: bg,
                              borderColor: '#0D1A04',
                            }}
                          />
                        )
                      )}
                    </div>
                    <span
                      className="text-xs font-medium"
                      style={{ color: 'rgba(255,255,255,0.38)' }}
                    >
                      Trusted by 150+ founders
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    className="flex items-center gap-2 rounded px-4 py-3 text-sm font-semibold"
                    style={{ background: '#A3FF12', color: '#071A0F' }}
                  >
                    Book a Free Call
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </button>
                  <button
                    className="rounded border px-4 py-3 text-sm font-medium"
                    style={{
                      borderColor: 'rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.55)',
                    }}
                  >
                    See Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right — sticky */}
          <div className="hidden lg:block self-start sticky top-28">
            <StickyPanel activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
