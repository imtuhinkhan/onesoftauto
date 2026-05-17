"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative aspect-square w-full max-w-lg mx-auto" aria-hidden>
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-[8%] rounded-full bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-pink-500/20 blur-3xl"
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.85, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full drop-shadow-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      >
        <defs>
          <linearGradient id="hi-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="hi-grad-soft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="hi-screen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="hi-bar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <filter id="hi-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit rings */}
        <circle cx="240" cy="240" r="195" stroke="url(#hi-grad)" strokeWidth="1" strokeOpacity="0.12" />
        <circle cx="240" cy="240" r="165" stroke="url(#hi-grad)" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="6 10" />
        <circle cx="240" cy="240" r="135" stroke="url(#hi-grad)" strokeWidth="1" strokeOpacity="0.06" />

        {/* Grid dots */}
        {[
          [90, 120], [130, 95], [350, 110], [380, 160], [70, 320], [400, 340], [120, 380], [360, 390],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="url(#hi-grad)" opacity="0.35" />
        ))}

        {/* Connection lines */}
        <path d="M360 210 L305 225" stroke="url(#hi-grad)" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 4" />
        <path d="M240 95 L240 130" stroke="url(#hi-grad)" strokeWidth="1.5" strokeOpacity="0.25" />
        <path d="M240 385 L240 350" stroke="url(#hi-grad)" strokeWidth="1.5" strokeOpacity="0.25" />

        {/* Main dashboard window */}
        <g filter="url(#hi-glow)">
          <rect x="115" y="130" width="250" height="200" rx="18" fill="url(#hi-screen)" stroke="url(#hi-grad)" strokeWidth="1.5" strokeOpacity="0.5" />
          {/* Title bar */}
          <rect x="115" y="130" width="250" height="36" rx="18" fill="url(#hi-grad-soft)" />
          <rect x="115" y="148" width="250" height="18" fill="url(#hi-screen)" />
          <circle cx="135" cy="148" r="5" fill="#f87171" opacity="0.9" />
          <circle cx="152" cy="148" r="5" fill="#fbbf24" opacity="0.9" />
          <circle cx="169" cy="148" r="5" fill="#34d399" opacity="0.9" />
          <rect x="195" y="142" width="80" height="12" rx="6" fill="white" fillOpacity="0.08" />

          {/* Sidebar */}
          <rect x="125" y="178" width="52" height="140" rx="8" fill="white" fillOpacity="0.04" />
          <rect x="133" y="190" width="36" height="6" rx="3" fill="url(#hi-grad)" fillOpacity="0.7" />
          <rect x="133" y="206" width="28" height="4" rx="2" fill="white" fillOpacity="0.15" />
          <rect x="133" y="218" width="32" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="133" y="230" width="24" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="133" y="252" width="36" height="28" rx="6" fill="url(#hi-grad)" fillOpacity="0.2" stroke="url(#hi-grad)" strokeWidth="0.5" strokeOpacity="0.4" />

          {/* Chart area */}
          <rect x="188" y="178" width="162" height="78" rx="10" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.06" />
          <path
            d="M200 240 L220 218 L245 228 L268 195 L295 210 L320 175 L340 188"
            stroke="url(#hi-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M200 240 L220 218 L245 228 L268 195 L295 210 L320 175 L340 188 L340 248 L200 248 Z"
            fill="url(#hi-grad)"
            fillOpacity="0.12"
          />

          {/* Bar chart row */}
          <rect x="188" y="268" width="162" height="50" rx="10" fill="white" fillOpacity="0.04" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect
              key={i}
              x={200 + i * 30}
              y={298 - [22, 32, 18, 38, 26][i]}
              width="14"
              height={[22, 32, 18, 38, 26][i]}
              rx="4"
              fill="url(#hi-bar)"
              fillOpacity={0.5 + i * 0.1}
            />
          ))}
        </g>

        {/* Mobile device — right */}
        <motion.g
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <rect x="344" y="195" width="72" height="118" rx="14" fill="#0f172a" stroke="url(#hi-grad)" strokeWidth="1.2" strokeOpacity="0.4" />
          <rect x="368" y="205" width="24" height="4" rx="2" fill="white" fillOpacity="0.15" />
          <rect x="354" y="220" width="52" height="36" rx="8" fill="url(#hi-grad-soft)" />
          <circle cx="380" cy="238" r="10" fill="url(#hi-grad)" fillOpacity="0.6" />
          <path d="M374 238 L378 242 L386 232" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="354" y="264" width="52" height="6" rx="3" fill="white" fillOpacity="0.1" />
          <rect x="354" y="276" width="36" height="6" rx="3" fill="white" fillOpacity="0.06" />
        </motion.g>

        {/* Cloud / API node — top */}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <rect x="188" y="58" width="104" height="56" rx="14" fill="#0f172a" stroke="url(#hi-grad)" strokeWidth="1" strokeOpacity="0.35" />
          <path
            d="M220 78 C220 70 228 66 236 70 C240 62 252 62 256 72 C264 72 270 78 268 86 C276 90 276 100 268 102 L212 102 C204 100 204 88 212 84 C210 80 214 76 220 78Z"
            fill="url(#hi-grad)"
            fillOpacity="0.25"
            stroke="url(#hi-grad)"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          <rect x="210" y="108" width="60" height="4" rx="2" fill="white" fillOpacity="0.12" />
          <circle cx="268" cy="82" r="6" fill="#34d399" fillOpacity="0.9" />
        </motion.g>

        {/* Database — bottom left */}
        <motion.g
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <ellipse cx="95" cy="355" rx="32" ry="10" fill="url(#hi-grad)" fillOpacity="0.2" />
          <path
            d="M63 355 L63 325 C63 318 76 312 95 312 C114 312 127 318 127 325 L127 355 C127 362 114 368 95 368 C76 368 63 362 63 355Z"
            fill="#0f172a"
            stroke="url(#hi-grad)"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <ellipse cx="95" cy="325" rx="32" ry="10" fill="none" stroke="url(#hi-grad)" strokeWidth="1" strokeOpacity="0.35" />
          <ellipse cx="95" cy="340" rx="32" ry="10" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        </motion.g>

        {/* AI sparkle node — bottom right */}
        <motion.g
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "385px 355px" }}
        >
          <rect x="348" y="328" width="74" height="54" rx="12" fill="#0f172a" stroke="url(#hi-grad)" strokeWidth="1" strokeOpacity="0.35" />
          <path
            d="M372 345 L378 358 L392 358 L381 367 L385 382 L372 373 L359 382 L363 367 L352 358 L366 358 Z"
            fill="url(#hi-grad)"
            fillOpacity="0.7"
          />
          <rect x="358" y="372" width="54" height="4" rx="2" fill="white" fillOpacity="0.1" />
        </motion.g>

        {/* Decorative nodes on orbit */}
        <circle cx="240" cy="45" r="8" fill="url(#hi-grad)" fillOpacity="0.5" />
        <circle cx="435" cy="240" r="6" fill="url(#hi-grad)" fillOpacity="0.4" />
        <circle cx="45" cy="240" r="6" fill="url(#hi-grad)" fillOpacity="0.4" />
      </motion.svg>

    </div>
  );
}
