import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const ITEMS = [
  {
    number: '01',
    title: 'Strategy First, Design Second',
    body: 'We never open Figma before understanding your market, users, and growth goals. Every pixel has a reason.',
    tag: 'No guesswork',
    visual: (
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="480" height="360" fill="#071A0F" />
        <line
          x1="0"
          y1="90"
          x2="480"
          y2="90"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.12"
        />
        <line
          x1="0"
          y1="180"
          x2="480"
          y2="180"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.12"
        />
        <line
          x1="0"
          y1="270"
          x2="480"
          y2="270"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.12"
        />
        <line
          x1="120"
          y1="0"
          x2="120"
          y2="360"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.12"
        />
        <line
          x1="240"
          y1="0"
          x2="240"
          y2="360"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.12"
        />
        <line
          x1="360"
          y1="0"
          x2="360"
          y2="360"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.12"
        />
        <polygon
          points="80,60 400,60 320,180 160,180"
          fill="#A3FF12"
          opacity="0.08"
        />
        <polygon
          points="160,190 320,190 280,280 200,280"
          fill="#A3FF12"
          opacity="0.13"
        />
        <polygon
          points="200,290 280,290 255,340 225,340"
          fill="#A3FF12"
          opacity="0.22"
        />
        <polygon
          points="80,60 400,60 320,180 160,180"
          fill="none"
          stroke="#A3FF12"
          strokeWidth="1.2"
          opacity="0.4"
        />
        <polygon
          points="160,190 320,190 280,280 200,280"
          fill="none"
          stroke="#A3FF12"
          strokeWidth="1.2"
          opacity="0.5"
        />
        <polygon
          points="200,290 280,290 255,340 225,340"
          fill="none"
          stroke="#A3FF12"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <text
          x="240"
          y="130"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="11"
          opacity="0.5"
          fontFamily="monospace"
        >
          MARKET RESEARCH
        </text>
        <text
          x="240"
          y="242"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="11"
          opacity="0.6"
          fontFamily="monospace"
        >
          STRATEGY
        </text>
        <text
          x="240"
          y="322"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="10"
          opacity="0.8"
          fontFamily="monospace"
        >
          DESIGN
        </text>
        <circle cx="80" cy="60" r="3" fill="#A3FF12" opacity="0.5" />
        <circle cx="400" cy="60" r="3" fill="#A3FF12" opacity="0.5" />
        <circle cx="240" cy="340" r="4" fill="#A3FF12" opacity="0.9" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'One Team. End-to-End.',
    body: 'Brand, design, and engineering under one roof. No handoff chaos. No agency telephone game. Just momentum.',
    tag: 'Seamless execution',
    visual: (
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="480" height="360" fill="#071A0F" />
        <circle
          cx="240"
          cy="180"
          r="140"
          stroke="#A3FF12"
          strokeWidth="0.6"
          opacity="0.1"
          strokeDasharray="6 6"
        />
        <circle
          cx="240"
          cy="180"
          r="95"
          stroke="#A3FF12"
          strokeWidth="0.6"
          opacity="0.15"
          strokeDasharray="4 4"
        />
        <circle
          cx="240"
          cy="180"
          r="50"
          stroke="#A3FF12"
          strokeWidth="0.8"
          opacity="0.2"
        />
        <circle cx="240" cy="180" r="22" fill="#A3FF12" opacity="0.12" />
        <circle cx="240" cy="180" r="14" fill="#A3FF12" opacity="0.25" />
        <circle cx="240" cy="180" r="6" fill="#A3FF12" opacity="0.9" />
        <circle cx="240" cy="85" r="8" fill="#A3FF12" opacity="0.6" />
        <circle cx="240" cy="275" r="8" fill="#A3FF12" opacity="0.6" />
        <circle cx="145" cy="180" r="8" fill="#A3FF12" opacity="0.6" />
        <circle cx="335" cy="180" r="8" fill="#A3FF12" opacity="0.6" />
        <circle cx="140" cy="82" r="5" fill="#A3FF12" opacity="0.35" />
        <circle cx="340" cy="82" r="5" fill="#A3FF12" opacity="0.35" />
        <circle cx="140" cy="278" r="5" fill="#A3FF12" opacity="0.35" />
        <circle cx="340" cy="278" r="5" fill="#A3FF12" opacity="0.35" />
        <line
          x1="240"
          y1="166"
          x2="240"
          y2="93"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="240"
          y1="194"
          x2="240"
          y2="267"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="226"
          y1="180"
          x2="153"
          y2="180"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.3"
        />
        <line
          x1="254"
          y1="180"
          x2="327"
          y2="180"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.3"
        />
        <text
          x="240"
          y="72"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.55"
          fontFamily="monospace"
        >
          BRAND
        </text>
        <text
          x="240"
          y="300"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.55"
          fontFamily="monospace"
        >
          ENGINEERING
        </text>
        <text
          x="110"
          y="184"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.55"
          fontFamily="monospace"
        >
          UX
        </text>
        <text
          x="365"
          y="184"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.55"
          fontFamily="monospace"
        >
          DESIGN
        </text>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Obsessed With Conversion',
    body: 'Beautiful is table stakes. We engineer interfaces that move visitors to action — sign-ups, demos, purchases.',
    tag: 'Measurable results',
    visual: (
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="480" height="360" fill="#071A0F" />
        <line
          x1="60"
          y1="300"
          x2="440"
          y2="300"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.2"
        />
        <line
          x1="60"
          y1="60"
          x2="60"
          y2="300"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.2"
        />
        <line
          x1="60"
          y1="220"
          x2="440"
          y2="220"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.08"
        />
        <line
          x1="60"
          y1="140"
          x2="440"
          y2="140"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.08"
        />
        <rect
          x="90"
          y="240"
          width="48"
          height="60"
          fill="#A3FF12"
          opacity="0.15"
          rx="2"
        />
        <rect
          x="90"
          y="240"
          width="48"
          height="60"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.3"
          rx="2"
        />
        <rect
          x="170"
          y="190"
          width="48"
          height="110"
          fill="#A3FF12"
          opacity="0.2"
          rx="2"
        />
        <rect
          x="170"
          y="190"
          width="48"
          height="110"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.35"
          rx="2"
        />
        <rect
          x="250"
          y="140"
          width="48"
          height="160"
          fill="#A3FF12"
          opacity="0.28"
          rx="2"
        />
        <rect
          x="250"
          y="140"
          width="48"
          height="160"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.45"
          rx="2"
        />
        <rect
          x="330"
          y="80"
          width="48"
          height="220"
          fill="#A3FF12"
          opacity="0.38"
          rx="2"
        />
        <rect
          x="330"
          y="80"
          width="48"
          height="220"
          stroke="#A3FF12"
          strokeWidth="1.5"
          opacity="0.7"
          rx="2"
        />
        <polyline
          points="114,264 194,210 274,160 354,102"
          stroke="#A3FF12"
          strokeWidth="2"
          opacity="0.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="114" cy="264" r="3.5" fill="#A3FF12" opacity="0.7" />
        <circle cx="194" cy="210" r="3.5" fill="#A3FF12" opacity="0.7" />
        <circle cx="274" cy="160" r="3.5" fill="#A3FF12" opacity="0.7" />
        <circle cx="354" cy="102" r="5" fill="#A3FF12" opacity="1" />
        <polyline
          points="345,96 354,102 345,108"
          stroke="#A3FF12"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="346"
          y="62"
          width="64"
          height="22"
          rx="4"
          fill="#A3FF12"
          opacity="0.15"
        />
        <text
          x="378"
          y="77"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="11"
          opacity="0.9"
          fontFamily="monospace"
        >
          +98% CVR
        </text>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Built for SaaS Velocity',
    body: 'We speak your language — MRR, churn, activation. Our systems are built to ship fast and iterate faster.',
    tag: 'Startup pace',
    visual: (
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="480" height="360" fill="#071A0F" />
        <rect
          x="40"
          y="60"
          width="400"
          height="50"
          rx="6"
          fill="#A3FF12"
          opacity="0.04"
          stroke="#A3FF12"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
        <rect
          x="40"
          y="125"
          width="400"
          height="50"
          rx="6"
          fill="#A3FF12"
          opacity="0.04"
          stroke="#A3FF12"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
        <rect
          x="40"
          y="190"
          width="400"
          height="50"
          rx="6"
          fill="#A3FF12"
          opacity="0.04"
          stroke="#A3FF12"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
        <rect
          x="40"
          y="255"
          width="400"
          height="50"
          rx="6"
          fill="#A3FF12"
          opacity="0.04"
          stroke="#A3FF12"
          strokeWidth="0.5"
          strokeOpacity="0.15"
        />
        <text
          x="52"
          y="91"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.4"
          fontFamily="monospace"
        >
          BRAND
        </text>
        <text
          x="52"
          y="156"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.4"
          fontFamily="monospace"
        >
          DESIGN
        </text>
        <text
          x="52"
          y="221"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.4"
          fontFamily="monospace"
        >
          BUILD
        </text>
        <text
          x="52"
          y="286"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.4"
          fontFamily="monospace"
        >
          SHIP
        </text>
        <rect
          x="120"
          y="68"
          width="280"
          height="34"
          rx="4"
          fill="#A3FF12"
          opacity="0.18"
        />
        <rect
          x="120"
          y="133"
          width="210"
          height="34"
          rx="4"
          fill="#A3FF12"
          opacity="0.22"
        />
        <rect
          x="120"
          y="198"
          width="150"
          height="34"
          rx="4"
          fill="#A3FF12"
          opacity="0.28"
        />
        <rect
          x="120"
          y="263"
          width="80"
          height="34"
          rx="4"
          fill="#A3FF12"
          opacity="0.4"
        />
        <circle cx="400" cy="85" r="5" fill="#A3FF12" opacity="0.8" />
        <text
          x="414"
          y="89"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.6"
          fontFamily="monospace"
        >
          ✓
        </text>
        <circle cx="330" cy="150" r="5" fill="#A3FF12" opacity="0.6" />
        <circle cx="270" cy="215" r="5" fill="#A3FF12" opacity="0.5" />
        <text x="190" y="288" fill="#A3FF12" fontSize="18" opacity="0.7">
          →
        </text>
        <text
          x="215"
          y="288"
          fill="#A3FF12"
          fontSize="10"
          opacity="0.5"
          fontFamily="monospace"
        >
          72H DELIVERY
        </text>
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Clean Code, Long-Term Value',
    body: 'We write documented, scalable React code your team can actually own. No black boxes, no tech debt hand grenades.',
    tag: 'Built to last',
    visual: (
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="480" height="360" fill="#071A0F" />
        {/* Code editor mock */}
        <rect
          x="40"
          y="40"
          width="400"
          height="280"
          rx="8"
          fill="#0a1f0f"
          stroke="#A3FF12"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />
        {/* Title bar */}
        <rect
          x="40"
          y="40"
          width="400"
          height="28"
          rx="8"
          fill="#A3FF12"
          fillOpacity="0.06"
        />
        <circle cx="62" cy="54" r="4" fill="#A3FF12" opacity="0.25" />
        <circle cx="78" cy="54" r="4" fill="#A3FF12" opacity="0.15" />
        <circle cx="94" cy="54" r="4" fill="#A3FF12" opacity="0.1" />
        <text
          x="240"
          y="58"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.3"
          fontFamily="monospace"
        >
          Component.jsx
        </text>
        {/* Line numbers */}
        <line
          x1="68"
          y1="68"
          x2="68"
          y2="320"
          stroke="#A3FF12"
          strokeWidth="0.4"
          opacity="0.08"
        />
        {[
          80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 272, 288,
          304,
        ].map((y, i) => (
          <text
            key={i}
            x="56"
            y={y}
            textAnchor="middle"
            fill="#A3FF12"
            fontSize="8"
            opacity="0.2"
            fontFamily="monospace"
          >
            {i + 1}
          </text>
        ))}
        {/* Code lines — varying lengths for realism */}
        <rect
          x="76"
          y="72"
          width="120"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.35"
        />
        <rect
          x="76"
          y="88"
          width="80"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.18"
        />
        <rect
          x="84"
          y="104"
          width="200"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.22"
        />
        <rect
          x="84"
          y="120"
          width="160"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.18"
        />
        <rect
          x="84"
          y="136"
          width="240"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.28"
        />
        <rect
          x="84"
          y="152"
          width="180"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.2"
        />
        <rect
          x="76"
          y="168"
          width="60"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.15"
        />
        <rect
          x="76"
          y="184"
          width="140"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.32"
        />
        <rect
          x="84"
          y="200"
          width="100"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.18"
        />
        <rect
          x="84"
          y="216"
          width="220"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.25"
        />
        <rect
          x="84"
          y="232"
          width="150"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.2"
        />
        <rect
          x="76"
          y="248"
          width="80"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.14"
        />
        {/* Highlighted active line */}
        <rect
          x="76"
          y="264"
          width="300"
          height="9"
          rx="2"
          fill="#A3FF12"
          opacity="0.1"
        />
        <rect
          x="76"
          y="265"
          width="300"
          height="7"
          rx="1"
          fill="#A3FF12"
          opacity="0.5"
        />
        {/* Cursor blink */}
        <rect
          x="380"
          y="265"
          width="2"
          height="7"
          fill="#A3FF12"
          opacity="0.9"
        />
        {/* Bottom score badge */}
        <rect
          x="300"
          y="290"
          width="120"
          height="22"
          rx="4"
          fill="#A3FF12"
          opacity="0.1"
          stroke="#A3FF12"
          strokeWidth="0.6"
          strokeOpacity="0.3"
        />
        <text
          x="360"
          y="305"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="10"
          opacity="0.8"
          fontFamily="monospace"
        >
          SCORE: 99 ✓
        </text>
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Transparent at Every Step',
    body: 'Weekly check-ins, shared Notion boards, async Loom updates. You always know exactly where your project stands.',
    tag: 'No black boxes',
    visual: (
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="480" height="360" fill="#071A0F" />
        {/* Central timeline spine */}
        <line
          x1="240"
          y1="40"
          x2="240"
          y2="320"
          stroke="#A3FF12"
          strokeWidth="1"
          opacity="0.15"
          strokeDasharray="3 5"
        />
        {/* Week markers on spine */}
        {[70, 130, 190, 250, 310].map((y, i) => (
          <g key={i}>
            <circle
              cx="240"
              cy={y}
              r="5"
              fill="#A3FF12"
              opacity={0.3 + i * 0.14}
            />
            <text
              x="252"
              y={y + 4}
              fill="#A3FF12"
              fontSize="8"
              opacity="0.4"
              fontFamily="monospace"
            >
              WK {i + 1}
            </text>
          </g>
        ))}
        {/* Left side — client messages */}
        <rect
          x="44"
          y="55"
          width="160"
          height="32"
          rx="5"
          fill="#A3FF12"
          opacity="0.06"
          stroke="#A3FF12"
          strokeWidth="0.6"
          strokeOpacity="0.2"
        />
        <text
          x="56"
          y="69"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.35"
          fontFamily="monospace"
        >
          Discovery call done ✓
        </text>
        <text
          x="56"
          y="81"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.25"
          fontFamily="monospace"
        >
          Goals locked in
        </text>
        <line
          x1="204"
          y1="70"
          x2="235"
          y2="70"
          stroke="#A3FF12"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <rect
          x="44"
          y="175"
          width="160"
          height="32"
          rx="5"
          fill="#A3FF12"
          opacity="0.06"
          stroke="#A3FF12"
          strokeWidth="0.6"
          strokeOpacity="0.2"
        />
        <text
          x="56"
          y="189"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.35"
          fontFamily="monospace"
        >
          Designs approved ✓
        </text>
        <text
          x="56"
          y="201"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.25"
          fontFamily="monospace"
        >
          Build phase starts
        </text>
        <line
          x1="204"
          y1="191"
          x2="235"
          y2="191"
          stroke="#A3FF12"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <rect
          x="44"
          y="295"
          width="160"
          height="22"
          rx="5"
          fill="#A3FF12"
          opacity="0.1"
          stroke="#A3FF12"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />
        <text
          x="124"
          y="310"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="9"
          opacity="0.75"
          fontFamily="monospace"
        >
          LAUNCHED 🚀
        </text>
        <line
          x1="204"
          y1="306"
          x2="235"
          y2="306"
          stroke="#A3FF12"
          strokeWidth="0.6"
          opacity="0.25"
        />
        {/* Right side — studio updates */}
        <rect
          x="276"
          y="115"
          width="160"
          height="32"
          rx="5"
          fill="#A3FF12"
          opacity="0.06"
          stroke="#A3FF12"
          strokeWidth="0.6"
          strokeOpacity="0.2"
        />
        <text
          x="288"
          y="129"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.35"
          fontFamily="monospace"
        >
          Loom update sent ✓
        </text>
        <text
          x="288"
          y="141"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.25"
          fontFamily="monospace"
        >
          Wireframes shared
        </text>
        <line
          x1="245"
          y1="130"
          x2="276"
          y2="130"
          stroke="#A3FF12"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <rect
          x="276"
          y="235"
          width="160"
          height="32"
          rx="5"
          fill="#A3FF12"
          opacity="0.06"
          stroke="#A3FF12"
          strokeWidth="0.6"
          strokeOpacity="0.2"
        />
        <text
          x="288"
          y="249"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.35"
          fontFamily="monospace"
        >
          QA passed. Staging ✓
        </text>
        <text
          x="288"
          y="261"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.25"
          fontFamily="monospace"
        >
          Handoff doc ready
        </text>
        <line
          x1="245"
          y1="250"
          x2="276"
          y2="250"
          stroke="#A3FF12"
          strokeWidth="0.6"
          opacity="0.2"
        />
        {/* Notion icon suggestion */}
        <rect
          x="370"
          y="42"
          width="60"
          height="22"
          rx="4"
          fill="#A3FF12"
          opacity="0.08"
          stroke="#A3FF12"
          strokeWidth="0.5"
          strokeOpacity="0.25"
        />
        <text
          x="400"
          y="57"
          textAnchor="middle"
          fill="#A3FF12"
          fontSize="8"
          opacity="0.45"
          fontFamily="monospace"
        >
          NOTION
        </text>
      </svg>
    ),
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
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function WhySaikatCapital() {
  const [active, setActive] = useState(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      className="relative w-full overflow-hidden py-28 sm:py-36"
      style={{ background: '#071A0F' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(ellipse, rgba(163,255,18,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.022]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="wsc-dots"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.9" fill="#A3FF12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wsc-dots)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          ref={headerRef}
          variants={containerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="mb-16 sm:mb-20"
        >
          <motion.div variants={itemReveal} className="mb-5  text-center">
            <span
              className="text-[11px] font-bold text-center   uppercase tracking-[0.35em]"
              style={{ color: '#A3FF12' }}
            >
              Why Us
            </span>
          </motion.div>

          <div className=" gap-6">
            <motion.h2
              variants={itemReveal}
              className="font-title  text-center font-bold leading-[1.05] tracking-tight text-white"
              style={{
                fontSize: 'clamp(38px, 5vw, 68px)',
                letterSpacing: '-0.03em',
              }}
            >
              Not just another{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #A3FF12 0%, #d4ff80 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <br />
                design agency.
              </span>
            </motion.h2>

            <motion.p
              variants={itemReveal}
              className="text-[15px] text-center leading-[1.75] text-white/60  lg:pt-5"
            >
              Most agencies sell pretty pixels. We build systems that generate{' '}
              <br />
              pipeline, reduce churn, and compound value over time.
            </motion.p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left — item list */}
          <div className="flex flex-col gap-3.5 lg:w-[42%]">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.06,
                }}
                onMouseEnter={() => setActive(i)}
                className="group relative cursor-default rounded px-6 py-5 transition-colors duration-300"
                style={{
                  background:
                    active === i
                      ? 'rgba(163,255,18,0.05)'
                      : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${
                    active === i
                      ? 'rgba(163,255,18,0.2)'
                      : 'rgba(255,255,255,0.06)'
                  }`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 font-mono text-[10px] font-bold tracking-[0.3em] flex-shrink-0"
                    style={{
                      color:
                        active === i
                          ? 'rgba(163,255,18,0.7)'
                          : 'rgba(163,255,18,0.3)',
                    }}
                  >
                    {item.number}
                  </span>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <h3
                      className="font-title font-bold leading-[1.2] transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(15px, 1.4vw, 18px)',
                        letterSpacing: '-0.02em',
                        color: active === i ? '#fff' : 'rgba(255,255,255,0.65)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <AnimatePresence>
                      {active === i && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="text-[13px] leading-[1.7] overflow-hidden"
                          style={{ color: 'rgba(255,255,255,0.38)' }}
                        >
                          {item.body}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <span
                    className="flex-shrink-0 rounded-full text-[9px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 transition-all duration-300"
                    style={{
                      background:
                        active === i
                          ? 'rgba(163,255,18,0.1)'
                          : 'rgba(255,255,255,0.04)',
                      color:
                        active === i
                          ? 'rgba(163,255,18,0.7)'
                          : 'rgba(255,255,255,0.2)',
                      border: `1px solid ${
                        active === i
                          ? 'rgba(163,255,18,0.18)'
                          : 'rgba(255,255,255,0.07)'
                      }`,
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — visual panel */}
          <div
            className="lg:flex-1 rounded overflow-hidden"
            style={{
              border: '1px solid rgba(163,255,18,0.1)',
              minHeight: '360px',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full h-full"
                style={{ minHeight: '360px' }}
              >
                {ITEMS[active].visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-5 rounded px-7 py-5"
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.02)',
          }}
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {['S', 'A', 'M', 'R'].map((l, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-[11px] font-bold"
                  style={{
                    borderColor: '#071A0F',
                    background: '#A3FF12',
                    color: '#071A0F',
                    zIndex: 4 - i,
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white/40">
              Trusted by{' '}
              <span className="text-white font-semibold">
                40+ SaaS founders
              </span>{' '}
              worldwide
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: '#A3FF12' }}
              animate={{ scale: [1, 0.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-[12px] text-white/35">
              Currently accepting new projects
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
