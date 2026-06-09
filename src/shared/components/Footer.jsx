import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg.png';

// ─── Data ─────────────────────────────────────────────────────────────────────

const LINKS = {
  Services: [
    { label: 'Brand Design', path: '/' },
    { label: 'UI/UX Design', path: '/' },
    { label: 'Web Development', path: '/' },
    { label: 'SaaS Development', path: '/' },
    { label: 'App Design', path: '/' },
    { label: 'MVPs & Prototypes', path: '/' },
  ],
  Company: [
    { label: 'About Us', path: '/' },
    { label: 'Our Work', path: '/' },
    { label: 'Case Studies', path: '/' },
    { label: 'Blog', path: '/' },
    { label: 'Careers', path: '/' },
    { label: 'Press Kit', path: '/' },
  ],
  Resources: [
    { label: 'Pricing', path: '/' },
    { label: 'Process', path: '/' },
    { label: 'FAQ', path: '/' },
    { label: 'Style Guide', path: '/' },
    { label: 'Book a Call', path: '/' },
    { label: 'Contact', path: '/' },
  ],
};

const SOCIALS = [
  {
    label: 'Twitter / X',
    href: 'https://twitter.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm7.922 5.572a10.027 10.027 0 012.018 5.738c-.292-.06-3.24-.658-6.21-.285-.067-.157-.132-.316-.201-.474-.196-.452-.407-.901-.625-1.341 3.284-1.338 4.785-3.26 5.018-3.638zM12 2.002a9.986 9.986 0 016.54 2.43c-.197.344-1.545 2.139-4.718 3.327C12.17 4.957 10.502 3.163 10.23 2.86A10.05 10.05 0 0112 2.002zm-3.71.795c.26.284 1.894 2.084 3.551 4.818-4.478 1.19-8.432 1.168-8.84 1.162A10.035 10.035 0 018.29 2.797zM1.99 12.01v-.255c.395.009 5.029.068 9.803-1.358.274.537.536 1.08.784 1.627-.124.034-.25.07-.372.11-4.942 1.596-7.566 5.96-7.785 6.33A10.01 10.01 0 011.99 12.01zm10.01 10.004a9.975 9.975 0 01-6.031-2.02c.176-.355 2.177-4.16 7.607-6.07.022-.009.043-.015.064-.023a35.71 35.71 0 011.848 6.564 9.972 9.972 0 01-3.488.549zm5.372-1.69a37.72 37.72 0 00-1.73-6.156c2.76-.44 5.186.283 5.49.373a10.038 10.038 0 01-3.76 5.783z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://behance.net',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zM15.998 13h5.5c-.105-1.547-1.136-2.219-2.69-2.219-1.685 0-2.65.873-2.81 2.219zM0 5h6.599c3.098 0 4.977 1.818 4.977 4.6 0 1.29-.44 2.426-1.392 3.213 1.408.76 2.031 2.006 2.031 3.624 0 3.187-2.306 4.563-5.54 4.563H0V5zm3.021 6.579h3.368c1.326 0 2.183-.572 2.183-1.891 0-1.354-.896-1.85-2.267-1.85H3.021v3.741zm0 6.042h3.772c1.5 0 2.46-.611 2.46-2.098 0-1.502-1.01-2.079-2.578-2.079H3.021v4.177z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
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

// ─── Link Column ──────────────────────────────────────────────────────────────

function LinkColumn({ title, links, inView, delay }) {
  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      style={{ transitionDelay: `${delay}ms` }}
      className="flex flex-col gap-3"
    >
      <motion.p
        variants={fadeUp}
        className="text-[12px] font-bold uppercase tracking-[0.28em] text-white/70"
      >
        {title}
      </motion.p>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <motion.div key={link.label} variants={fadeUp}>
            <Link
              to={link.path}
              className="group inline-flex items-center gap-2 text-[15px] text-white/70 transition-colors duration-200 hover:text-white"
            >
              <span className="h-px w-0 bg-[#A3FF12] transition-all duration-300 group-hover:w-3 flex-shrink-0" />
              {link.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <footer
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark overlay */}
      {/* <div
        className="absolute inset-0"
        style={{ background: 'rgba(7,26,15,0.88)' }}
      /> */}

      {/* Neon top edge */}
      {/* <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(163,255,18,0.4) 30%, rgba(163,255,18,0.4) 70%, transparent)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[240px] w-[600px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #A3FF12 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      /> */}

      {/* Dot grid */}
      {/* <svg
        className="absolute inset-0 h-full w-full opacity-[0.03] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="footer-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.9" fill="#A3FF12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-dots)" />
      </svg> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* ── Top block: wordmark + tagline + newsletter ── */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="pt-14 pb-10 border-b border-white/[0.07]"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            {/* Wordmark + tagline */}
            <div className="flex flex-col gap-4 max-w-sm">
              <motion.div variants={fadeUp}>
                <img src="/icon.png" alt="Saikat Capital" className="h-32" />
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="text-lg leading-relaxed text-white/70"
              >
                A premium design and development studio building brands,
                products, and digital experiences for startups and SaaS
                companies worldwide.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2.5"
              >
                <motion.span
                  className="h-2 w-2 rounded-full flex-shrink-0"
                  style={{ background: '#A3FF12' }}
                  animate={{ scale: [1, 0.65, 1], opacity: [1, 0.4, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <span className="text-[13px] font-medium text-white/45">
                  Currently accepting new projects
                </span>
              </motion.div>
            </div>

            {/* Newsletter */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 lg:max-w-[300px] w-full"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-white/30">
                Stay in the loop
              </p>
              <p className="text-[14px] text-white/40 leading-relaxed">
                Design insights, project launches, and resources — straight to
                your inbox.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 rounded border border-white/10 bg-white/[0.05] px-3 py-2.5 text-[14px] text-white placeholder-white/25 outline-none focus:border-[#A3FF12]/40 transition-colors duration-200"
                />
                <motion.button
                  className="flex-shrink-0 rounded px-4 py-2.5 text-[14px] font-semibold text-[#071A0F]"
                  style={{ background: '#A3FF12' }}
                  whileHover={{
                    y: -1,
                    boxShadow: '0 6px 24px rgba(163,255,18,0.4)',
                  }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Nav columns + contact ── */}
        <div className="py-10 border-b border-white/[0.07]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(LINKS).map(([title, links], i) => (
              <LinkColumn
                key={title}
                title={title}
                links={links}
                inView={inView}
                delay={i * 60}
              />
            ))}

            {/* Contact column */}
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={stagger}
              className="flex flex-col gap-3"
            >
              <motion.p
                variants={fadeUp}
                className="text-[12px] font-bold uppercase tracking-[0.28em] text-white/70"
              >
                Contact
              </motion.p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'hello@saikatcapital.com', icon: '✉' },
                  { label: 'Rajshahi, Bangladesh', icon: '◎' },
                  { label: 'Mon–Fri, 9am–6pm BST', icon: '◷' },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="flex items-start gap-2.5"
                  >
                    <span className="text-[#A3FF12] text-[14px] mt-0.5 opacity-70 flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-[14px] text-white/45 leading-snug">
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Socials */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 mt-1 flex-wrap"
              >
                {SOCIALS.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded border border-white/10 text-white/35 transition-all duration-200"
                    whileHover={{
                      color: '#A3FF12',
                      borderColor: 'rgba(163,255,18,0.35)',
                      backgroundColor: 'rgba(163,255,18,0.07)',
                      y: -2,
                    }}
                    whileTap={{ scale: 0.92 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <motion.p
            variants={fadeUp}
            className="text-[13px] text-white/30 text-center sm:text-left"
          >
            © {new Date().getFullYear()} Saikat Capital. All rights reserved.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 flex-wrap justify-center"
          >
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(
              (item) => (
                <Link
                  key={item}
                  to="/"
                  className="text-[13px] text-white/30 hover:text-white/60 transition-colors duration-200"
                >
                  {item}
                </Link>
              )
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="text-[12px] text-white/25">Crafted by</span>
            <span
              className="text-[12px] font-semibold"
              style={{ color: '#A3FF12' }}
            >
              Saikat Capital
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
