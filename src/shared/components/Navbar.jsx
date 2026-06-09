import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import logo from '/logo-test.png';
import { AiOutlineProduct } from 'react-icons/ai';
import { DiHtml5DeviceAccess } from 'react-icons/di';
import { PiSquaresFourBold } from 'react-icons/pi';
import { FiLayout } from 'react-icons/fi';
import { FaAsterisk } from 'react-icons/fa';
import { TbTopologyComplex } from 'react-icons/tb';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosArrowForward, IoMdClose } from 'react-icons/io';
import { IoPricetagsOutline } from 'react-icons/io5';

const serviceData = [
  {
    title: 'UI UX Design',
    icon: <FiLayout className="text-3xl" />,
    description: 'Crafting Intuitive Experiences',
    items: [
      { title: 'UI UX Consulting', path: '/ui-ux-design' },
      { title: 'User Interface (UI)', path: '/ui-ux-design' },
      { title: 'User Experience (UX)', path: '/ui-ux-design' },
      { title: 'Research & Visual Stats', path: '/ui-ux-design' },
    ],
  },
  {
    title: 'Brand Design',
    icon: <FaAsterisk className="text-3xl" />,
    description: 'Crafting Intuitive Experiences',
    items: [
      { title: 'Logo Design', path: '/' },
      { title: 'Brand Style Guide', path: '/' },
      { title: 'Flyer & Postcard Design', path: '/' },
    ],
  },
  {
    title: 'Web Development',
    icon: <AiOutlineProduct className="text-3xl" />,
    description: 'Crafting Intuitive Experiences',
    items: [
      { title: 'Website Development', path: '/service-web-design' },
      { title: 'Landing Page Design', path: '/service-web-design' },
      { title: 'E-commerce Solutions', path: '/service-web-design' },
      { title: 'Health Care Solution', path: '/service-web-design' },
    ],
  },
];

const sideServices = [
  {
    title: 'App Design',
    icon: <MdOutlineAppRegistration className="w-12 h-fit" />,
    path: '/',
  },
  {
    title: 'MVPs Solutions',
    icon: <DiHtml5DeviceAccess className="w-12 h-fit" />,
    path: '/',
  },
  {
    title: 'Saas Solutions',
    icon: <TbTopologyComplex className="w-12 h-fit" />,
    path: '/',
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000]
      transform transition-transform flex justify-center  duration-300 ease-in-out
      ${hideNav ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-[1216px] w-full  h-20 flex justify-between items-center px-5 border border-white/10 rounded bg-[#071A0F]/50 backdrop-blur-xl mt-5 mx-3 sm:mx-8">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} className="h-6 sm:h-10" alt="Logo" />
        </Link>

        <NavLinks />

        <motion.button
          className="hidden lg:block rounded px-5 lg:px-10 py-3 text-base lg:text-lg  font-semibold"
          style={{ background: '#A3FF12', color: '#071A0F' }}
          whileHover={{
            y: -2,
            boxShadow: '0 8px 32px rgba(163,255,18,0.45)',
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          Let's Talk
        </motion.button>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded bg-gray-100 text-gray-700"
          >
            {isOpen ? <IoMdClose size={28} /> : <PiSquaresFourBold size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-20 left-0 w-full h-[calc(100vh-81px)] bg-white z-[1000] lg:hidden flex flex-col overflow-y-auto pb-10"
          >
            <div className="flex flex-col">
              <div className="border-b border-black/10">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex justify-between items-center p-6 text-xl font-semibold text-gray-800"
                >
                  Services
                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="px-4 flex flex-col gap-8">
                        {serviceData.map((service, index) => (
                          <MobileServiceCategory
                            key={index}
                            title={service.title}
                            icon={service.icon}
                            items={service.items}
                          />
                        ))}

                        <div className="flex flex-col gap-4">
                          {sideServices.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-3 text-lg font-bold"
                            >
                              <span className="text-2xl">{item.icon}</span>
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {['Our Work', 'Pricing', 'Blog'].map((item, index) => (
                <Link
                  key={index}
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="p-6 text-xl font-semibold text-gray-800 border-b border-black/10"
                >
                  {item}
                </Link>
              ))}

              <motion.button
                className="rounded px-5 lg:px-10 py-3 text-base lg:text-lg  font-semibold"
                style={{ background: '#A3FF12', color: '#071A0F' }}
                whileHover={{
                  y: -2,
                  boxShadow: '0 8px 32px rgba(163,255,18,0.45)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MobileServiceCategory = ({ title, icon, items }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3 text-lg font-bold text-green-950">
      <span className="text-xl">{icon}</span>
      {title}
    </div>

    <div className="flex flex-col gap-2 pl-8">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="text-gray-600 py-1 flex items-center justify-between"
        >
          {item.title}
          <FaArrowRightLong className="text-xs opacity-30" />
        </Link>
      ))}
    </div>
  </div>
);

const NavLinks = ({ isWebDesignPage }) => (
  <div className="hidden lg:flex text-lg gap-8 items-center">
    <div className="group h-full flex items-center">
      <h1
        className={`cursor-pointer ${
          isWebDesignPage ? 'text-gray-800' : 'text-gray-200'
        } flex items-center gap-2 uppercase tracking-[0.18em] text-[12px] py-7 font-medium`}
      >
        Services
        <IoIosArrowForward className="text-lg group-hover:rotate-90 duration-500" />
      </h1>

      {/* UPDATED DROPDOWN */}
      <div className="absolute top-full max-w-7xl pt-2 left-1/2 -translate-x-1/2 w-full flex justify-center opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500">
        <div className="w-full overflow-hidden rounded border border-white/10 bg-[#101a02]/[98%] backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <p className="uppercase tracking-[0.25em] text-[11px] text-[#A3FF11] font-semibold">
                Services
              </p>

              <h2 className="text-3xl font-semibold text-white mt-2">
                Digital Solutions For Modern Brands
              </h2>
            </div>

            <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#A3FF11]" />
              <span className="text-sm text-gray-300">
                Building premium digital experiences
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5 pt-8">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="rounded border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 p-6"
              >
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 rounded bg-[#A3FF11]/10 border border-[#A3FF11]/20 flex items-center justify-center text-[#A3FF11]">
                    {service.icon}
                  </div>

                  <div>
                    <h1 className="text-lg font-semibold text-white">
                      {service.title}
                    </h1>

                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {service.items.map((item, itemIndex) => (
                    <DesktopNavItem
                      key={itemIndex}
                      title={item.title}
                      path={item.path}
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-4">
              {sideServices.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="group/saas relative overflow-hidden rounded border border-white/8 bg-white/[0.03] hover:bg-[#A3FF11] transition-all duration-300 p-5"
                >
                  <div className="absolute inset-0 opacity-0 group-hover/saas:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />

                  <div className="relative z-10 flex gap-4">
                    <div className="text-[#A3FF11] group-hover/saas:text-black transition-colors duration-300">
                      {item.icon}
                    </div>

                    <div>
                      <h1 className="text-lg font-semibold text-white group-hover/saas:text-black transition-colors duration-300">
                        {item.title}
                      </h1>

                      <p className="text-sm text-gray-400 group-hover/saas:text-black/70 transition-colors duration-300 mt-1">
                        Crafting Intuitive Experiences
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded border border-white/8 bg-gradient-to-r from-white/[0.04] to-white/[0.02] p-6 flex items-start justify-between gap-10">
            <div className="min-w-[220px]">
              <h1 className="text-lg text-white font-semibold flex items-center gap-2">
                <IoPricetagsOutline className="text-[#A3FF11]" />
                Pricing
              </h1>

              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                Flexible plans designed for startups and modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 w-full">
              {['Starter Plan', 'Growth Plan', 'Enterprise'].map(
                (plan, index) => (
                  <div
                    key={index}
                    className="rounded border border-white/8 bg-black/20 p-5 hover:border-[#A3FF11]/30 transition-all duration-300"
                  >
                    <h1 className="text-white text-lg font-medium">{plan}</h1>

                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      Premium design and development solutions tailored for fast
                      growing brands.
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

    {['Our Work', 'Pricing', 'Blog', 'About Us'].map((item, index) => (
      <Link
        key={index}
        className={`${
          isWebDesignPage ? 'text-gray-800' : 'text-gray-200'
        } uppercase tracking-[0.18em] text-[12px] font-medium`}
        to="/"
      >
        {item}
      </Link>
    ))}
  </div>
);

const DesktopNavItem = ({ title, path }) => (
  <motion.div
    initial="rest"
    whileHover="hover"
    animate="rest"
    variants={{
      rest: {
        backgroundColor: 'rgba(255,255,255,0)',
      },
      hover: {
        backgroundColor: 'rgba(163,255,17,0.08)',
      },
    }}
    transition={{ duration: 0.25 }}
    className="rounded"
  >
    <Link
      to={path}
      className="flex items-center justify-between px-4 py-3 group"
    >
      <motion.span
        variants={{
          rest: { color: '#D1D5DB', x: 0 },
          hover: { color: '#FFFFFF', x: 4 },
        }}
        transition={{ duration: 0.25 }}
        className="text-[15px] font-medium"
      >
        {title}
      </motion.span>

      <motion.div
        variants={{
          rest: { opacity: 0, x: -10 },
          hover: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.25 }}
      >
        <FaArrowRightLong className="text-[#A3FF11] text-sm" />
      </motion.div>
    </Link>
  </motion.div>
);
