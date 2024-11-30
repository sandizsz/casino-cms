"use client"

import { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

export default function CountUp({ end, duration = 2, label, suffix }: CountUpProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const animation = animate(count, end, { duration });
    return animation.stop;
  }, [count, end, duration]);

  return (
    <div className="space-y-2 p-6 bg-[#1E2A44]/50 rounded-lg border border-[#00A3FF] shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] transition-all duration-300">
      <motion.div className="text-5xl font-bold text-[#FFDD00]">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
      <div className="text-sm text-[#C0C0C0]" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}
