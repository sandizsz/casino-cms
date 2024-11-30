'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '../context/LoadingContext'

export default function LoadingOverlay() {
  const { isLoading } = useLoading()

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#0D1117]/80 backdrop-blur-sm z-[999999] flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-32 h-32"
            >
              <Image
                src="/images/gamblestrike.png"
                alt="GambleStrike Logo"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div 
              className="w-16 h-16 border-4 border-[#FFDD00] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
