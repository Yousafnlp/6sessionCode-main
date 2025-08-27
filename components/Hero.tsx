"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 bg-hero-texture bg-cover bg-center bg-no-repeat flex justify-center items-center overflow-hidden">
      {/* Animated overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-black/95" />

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

      <div className="relative px-4 text-white flex items-center flex-col justify-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            6 Session Series
          </h1>

          <div className="text-xl md:text-2xl font-medium text-center h-16">
            <TypeAnimation
              sequence={[
                "Transform Your Mind",
                1000,
                "Transform Your Life",
                1000,
                "Embrace Freedom",
                1000,
                "Live Pain-Free!",
                1000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-gray-200"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-xl sm:text-2xl font-bold text-gold"

          >
                <span>12,880/- PKR</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-5 text-md text-white max-w-md mx-auto"
          >
            Price: <s>30,000/-</s>&#10060; now 12,880/- &#x2705; only
          </motion.div>
           <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-sm text-gray-400 max-w-md mx-auto"
          >
            Join our transformative coaching program and discover the path to personal growth and emotional freedom.
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

