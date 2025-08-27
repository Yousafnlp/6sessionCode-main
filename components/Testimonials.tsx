"use client"

import testimonial from '@/assets/testimonial.webp';
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

// Counter animation component
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0.25,
  })

  useEffect(() => {
    if (inView) {
      motionValue.set(value)
    }
  }, [inView, motionValue, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest))
      }
    })
  }, [springValue])

  return <span ref={ref} />
}

export default function Testimonials() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      {/* Background effects */}

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0">
        {/* Left side particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-float" />
        <div className="absolute top-40 left-20 w-1 h-1 bg-gold-light/40 rounded-full animate-float-slow" />
        <div className="absolute top-60 left-32 w-3 h-3 bg-gold/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-gold-dark/50 rounded-full animate-float-fast" />

        {/* Center particles */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-gold/60 rounded-full animate-float-delayed" />
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-gold-light/40 rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-gold-dark/50 rounded-full animate-float" />

        {/* Right side particles */}
        <div className="absolute top-24 right-16 w-2 h-2 bg-gold/70 rounded-full animate-float-fast" />
        <div className="absolute top-48 right-28 w-1.5 h-1.5 bg-gold-light rounded-full animate-float-delayed" />
        <div className="absolute top-72 right-20 w-1 h-1 bg-gold/40 rounded-full animate-float" />
        <div className="absolute bottom-36 right-32 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-28 right-28 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-28 left-8 w-3 h-3 bg-gold-dark/30 rounded-full animate-float-slow" />
        <div className="absolute bottom-52 right-12 w-2 h-2 bg-gold-light/60 rounded-full animate-float-delayed" />

        {/* Corner particles */}
        <div className="absolute top-12 left-6 w-1 h-1 bg-gold/50 rounded-full animate-float-fast" />
        <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-gold-light/40 rounded-full animate-float" />
        <div className="absolute bottom-10 left-8 w-2 h-2 bg-gold-dark/30 rounded-full animate-float-delayed" />
        <div className="absolute bottom-16 right-10 w-1 h-1 bg-gold/60 rounded-full animate-float-slow" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        {/* Stats Section */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-6xl md:text-7xl font-bold text-gold mb-4"
          >
            <Counter value={100} />+
          </motion.div>
          <h2 className="text-2xl md:text-3xl text-white font-semibold">Satisfied Clients</h2>
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Button
              asChild
              className="bg-gold hover:bg-gold-light text-black font-semibold px-5 py-4 text-lg gap-0 transform  animate-scale-loop"
            >
              <Link href="/#register">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full"
          >
            <div className="relative md:h-[600px] h-[300px] w-[300px] md:w-full max-w-[39rem] mx-auto">
              {/* Gold border effect */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-lg transform rotate-3 z-10" />
              <div className="absolute inset-0 border-2 border-gold/30 rounded-lg transform -rotate-3 z-10" />
              
              {/* Main image with gold outline effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 border-4 border-gold/50 rounded-lg z-20" />
                <Image
                  src={   testimonial}      
                              alt="Professional Coach"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  quality={100}
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              </div>
            </div>

            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-gold/10 rounded-full blur-3xl opacity-50" />
          </motion.div>
        
      </div>
    </section>
  )
}

