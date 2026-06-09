import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: 'What services does Saikat Capital provide?',
    intro:
      'A full suite of digital and creative services designed to help brands grow and stand out.',
    a: [
      {
        title: 'Brand Identity & Strategy',
        desc: 'Logo design, color system, brand guidelines, and storytelling.',
      },
      {
        title: 'UI/UX Design',
        desc: 'User-centered interface design for websites and mobile apps.',
      },
      {
        title: 'Web Development',
        desc: 'Fully responsive, SEO-optimized websites built with modern frameworks.',
      },
      {
        title: 'SaaS Development',
        desc: 'End-to-end product builds, architecture, auth, billing, and dashboards.',
      },
      {
        title: 'Marketing & SEO',
        desc: 'On-page SEO, keyword strategy, and digital growth support.',
      },
    ],
    closing:
      'We follow a premium, process-driven approach to ensure long-term brand success.',
  },
  {
    q: 'How does the project process work?',
    intro:
      'Our workflow is structured, transparent, and built around your goals.',
    a: [
      {
        title: 'Discovery Call',
        desc: 'We understand your brand, goals, and project requirements.',
      },
      {
        title: 'Proposal & Timeline',
        desc: 'You receive a detailed scope, pricing, and delivery schedule.',
      },
      {
        title: 'Design Phase',
        desc: 'Wireframes, UI/UX, and visual concepts shared for review.',
      },
      {
        title: 'Development Phase',
        desc: 'Your website or product built using clean, modern code.',
      },
      { title: 'Revision Rounds', desc: 'We refine based on your feedback.' },
      {
        title: 'Launch & Handover',
        desc: 'We deploy the final product and deliver documentation.',
      },
      {
        title: 'After-Launch Support',
        desc: 'Optional maintenance and updates.',
      },
    ],
  },
  {
    q: 'How long does it take to complete a project?',
    intro: 'Timeline depends on complexity. Here are typical estimates:',
    a: [
      { title: 'Branding projects', desc: '1 to 2 weeks' },
      { title: 'UI/UX design', desc: '2 to 4 weeks' },
      { title: 'Website development', desc: '3 to 10 weeks' },
      { title: 'Full branding + website', desc: '1 to 3 months' },
    ],
    closing:
      'We provide a clear timeline before starting and keep clients updated throughout.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    intro: 'Yes, Saikat Capital provides comprehensive post-launch care:',
    a: [
      {
        title: 'Website maintenance',
        desc: 'Regular updates, security patches, and uptime monitoring.',
      },
      {
        title: 'Bug fixes',
        desc: 'Fast turnaround on any issues that surface post-launch.',
      },
      {
        title: 'Performance monitoring',
        desc: 'Core Web Vitals tracking and optimisation.',
      },
      {
        title: 'Content updates',
        desc: 'Copy, imagery, and page-level changes on request.',
      },
      {
        title: 'SEO improvements',
        desc: 'Ongoing keyword and ranking strategy adjustments.',
      },
    ],
    closing:
      'Whether monthly maintenance or occasional support, we tailor a plan to your needs.',
  },
  {
    q: 'What makes Saikat Capital different?',
    intro:
      'We focus on premium, modern, visually distinctive digital experiences.',
    a: [
      {
        title: 'High-end design direction',
        desc: 'Built on branding psychology for stronger communication.',
      },
      {
        title: 'Clean, scalable code',
        desc: 'Optimised for speed, performance, and long-term growth.',
      },
      {
        title: 'SEO-driven websites',
        desc: 'Designed to rank, not just look good.',
      },
      {
        title: 'Client-first workflow',
        desc: 'Transparent communication at every step.',
      },
      {
        title: 'Micro-level attention',
        desc: 'Animations, typography, spacing, and consistency.',
      },
    ],
    closing: 'Our goal is not just a website, but a complete brand experience.',
  },
  {
    q: 'What are the pricing packages?',
    intro: 'Flexible pricing based on project scope:',
    a: [
      { title: 'Branding', desc: 'Starts from $300+' },
      {
        title: 'Website design & development',
        desc: '$500 to $3,000 depending on pages and features',
      },
      { title: 'Full brand identity + website', desc: 'Custom quote' },
      {
        title: 'Monthly maintenance',
        desc: 'Flexible, based on update frequency',
      },
    ],
    closing:
      'Everything is crafted uniquely, no templates, no shortcuts, long-term value.',
  },
  {
    q: 'Can I request custom features?',
    intro: 'Absolutely. We build fully customised experiences including:',
    a: [
      {
        title: 'Booking systems',
        desc: 'Calendly-style scheduling integrated into your site.',
      },
      {
        title: 'E-commerce stores',
        desc: 'Shopify, WooCommerce, or fully custom carts.',
      },
      {
        title: 'Interactive animations',
        desc: 'Framer Motion, GSAP, Lottie, whatever fits best.',
      },
      {
        title: 'Dashboards & admin panels',
        desc: 'Internal tools and client portals.',
      },
      {
        title: 'Membership systems',
        desc: 'Gated content, roles, and subscription billing.',
      },
      {
        title: 'Custom CMS setups',
        desc: 'Sanity, Contentful, or headless WordPress.',
      },
    ],
    closing:
      'Every feature is built to match your brand style and business needs.',
  },
];

function FaqItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.03,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="border-b transition-colors duration-300"
      style={{ borderColor: isOpen ? '#101A02' : 'rgba(16,26,2,0.1)' }}
    >
      {/* Question Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-8 py-7 text-left group"
      >
        <div className="flex items-start gap-6 flex-1 min-w-0">
          <span
            className="font-mono text-xs tracking-wider pt-1 shrink-0 transition-colors duration-300"
            style={{ color: isOpen ? '#2a7a1a' : 'rgba(16,26,2,0.3)' }}
          >
            {String(index + 1).padStart(2, '0')}.
          </span>
          {/* Increased size: text-lg to text-xl/2xl */}
          <h3
            className="font-title font-bold leading-tight transition-colors duration-300 text-lg md:text-xl lg:text-2xl"
            style={{
              letterSpacing: '-0.02em',
              color: isOpen ? '#101A02' : 'rgba(16,26,2,0.85)',
            }}
          >
            {faq.q}
          </h3>
        </div>

        {/* Minimalist interactive indicator icon */}
        <div
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: isOpen ? '#101A02' : 'transparent',
            border: '1px solid #101A02',
            transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)',
          }}
        >
          {isOpen ? (
            <Minus size={14} color="#fff" strokeWidth={2} />
          ) : (
            <Plus size={14} color="#101A02" strokeWidth={2} />
          )}
        </div>
      </button>

      {/* Answer Body Container */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Added left indent to align text properly with the question */}
            <div className="pl-12 pb-8 space-y-6">
              {faq.intro && (
                // Increased text size: text-sm to text-base
                <p
                  className="text-base md:text-lg leading-relaxed max-w-2xl"
                  style={{ color: 'rgba(16,26,2,0.65)' }}
                >
                  {faq.intro}
                </p>
              )}

              {/* Enhanced service grid layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 pt-2">
                {faq.a.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <span
                      className="mt-[9px] w-2 h-2 rounded-full shrink-0 transition-transform duration-300 group-hover/item:scale-125"
                      style={{ background: '#2a7a1a' }}
                    />
                    <div>
                      {/* Increased text size: text-[13px] to text-base */}
                      <span
                        className="text-base font-bold block"
                        style={{ color: '#101A02', letterSpacing: '-0.01em' }}
                      >
                        {item.title}
                      </span>
                      {item.desc && (
                        // Increased text size: text-xs to text-sm
                        <p
                          className="text-sm mt-1 leading-relaxed"
                          style={{ color: 'rgba(16,26,2,0.55)' }}
                        >
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {faq.closing && (
                // Increased text size: text-xs to text-sm
                <p
                  className="text-sm leading-relaxed pt-6 font-medium"
                  style={{
                    color: '#2a7a1a',
                    borderTop: '1px dashed rgba(16,26,2,0.1)',
                  }}
                >
                  {faq.closing}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="relative w-full py-20 md:py-28 lg:py-36 px-6 md:px-12"
      style={{ backgroundColor: '#F9F9F6' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Split Grid Design Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Title Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="h-[2px] w-10"
                  style={{ backgroundColor: '#2a7a1a' }}
                />
                <span
                  className="text-xs font-black uppercase tracking-[0.25em]"
                  style={{ color: '#2a7a1a' }}
                >
                  Common Inquiries
                </span>
              </div>

              {/* Massive Bold Heading */}
              <h2
                className="font-title font-extrabold leading-[1.05] tracking-tight text-[#101A02] mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                Questions,
                <br />
                <span style={{ color: 'rgba(16,26,2,0.25)' }}>Answered.</span>
              </h2>

              {/* Increased size: text-sm to text-base */}
              <p
                className="text-base md:text-lg leading-relaxed max-w-md mb-10"
                style={{ color: 'rgba(16,26,2,0.55)' }}
              >
                Everything you need to know about partnering with Saikat
                Capital. Can't find the answers you are looking for? Reach out
                anytime.
              </p>

              {/* Bottom Callout converted into a sleek Left-Hand Module */}
              <div className="hidden lg:block p-7 rounded-2xl border border-[#101A02]/10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                <p className="text-base font-bold text-[#101A02]">
                  Still looking for answers?
                </p>
                <p
                  className="text-sm mt-1 mb-5"
                  style={{ color: 'rgba(16,26,2,0.5)' }}
                >
                  Our strategic product team responds to custom briefs within 24
                  hours.
                </p>
                <button
                  className="w-full flex items-center justify-between px-5 py-4 rounded-xl text-sm font-bold text-black transition-transform active:scale-[0.98] hover:opacity-90"
                  style={{ backgroundColor: '#A3FF12' }}
                >
                  Book a priority call
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Interactive Accordion List */}
          <div className="lg:col-span-7">
            <div className="border-t border-[#101A02]/10">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Fallback CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:hidden p-6 rounded-2xl border border-[#101A02]/15 bg-white text-left"
        >
          <p className="text-base font-bold text-[#101A02]">
            Still have questions?
          </p>
          <p
            className="text-sm mt-0.5 mb-4"
            style={{ color: 'rgba(16,26,2,0.5)' }}
          >
            We typically get back to you within 24 hours.
          </p>
          <button
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold text-black"
            style={{ backgroundColor: '#A3FF12' }}
          >
            Book a free call
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
