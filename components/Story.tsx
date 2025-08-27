"use client"

import { useEffect } from "react"

import { useRef } from "react"

import dp from "@/assets/dp.webp"
import Image from "next/image"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Youtube } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

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

export default function About() {
  return (
    <section className="relative bg-black py-20 overflow-hidden min-h-screen">
      {/* Background gradient effects */}

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image container with animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative md:h-[600px] h-[480px] w-full max-w-md mx-auto">
              {/* Gold border effect */}
              <div className="absolute inset-0 border-2 border-gold/30 rounded-lg transform rotate-3 z-10" />
              <div className="absolute inset-0 border-2 border-gold/30 rounded-lg transform -rotate-3 z-10" />

              {/* Main image with gold outline effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 border-4 border-gold/50 rounded-lg z-20" />
                <Image
                  src={dp || "/placeholder.svg"}
                  alt="Professional Coach"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  quality={100}
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              </div>
            </div>

            {/* Stats Section */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-1"
              >
              
                {/* Videos Counter with YouTube Icon */}
                <Link
                  href="https://youtube.com/@yousafijazmunawar"
                  target="_blank"
                  className="group bg-black-50/80 backdrop-blur-lg p-4 rounded-lg border border-red-500 transition-colors hover:border-gold/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-gold">
                      <Counter value={150} />+
                  <div className="text-sm text-gray-300">Educational Videos</div>
                    </div>
                    <Youtube className="text-red-500 size-12 group-hover:scale-110 transition-transform animate-scale-loop" />
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-gold/10 rounded-full blur-3xl opacity-50" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl mt-10 lg:mt-0 font-bold text-gold"
            >
              Meet Your Mentor
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-sm"
            >
              <p className="text-gray-300 leading-relaxed">
                Yousaf Ijaz Munawar is more than just a coach; he is a dedicated mentor committed to helping individuals
                navigate their emotional landscapes. With a focus on providing a supportive environment, personalized
                strategies, and expert insights, Yousaf's mission is to empower you to conquer depression, anxiety, and
                negative thoughts.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you're seeking to make significant changes or simply need guidance, join us on this
                transformative journey towards a more fulfilled and joyful life.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
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

initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.5 }}
viewport={{ once: true }}
            className="mt-2 text-xl sm:text-2xl font-bold text-gold absolute"

          >
                <span>12,880/- PKR</span>
          </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

