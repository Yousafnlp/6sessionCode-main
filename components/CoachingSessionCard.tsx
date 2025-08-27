"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CoachingSessionCardProps {
  number: number
  title: string
  description: string
}

export default function CoachingSessionCard({ number, title, description }: CoachingSessionCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className="bg-black backdrop-blur-sm border-gold/60  shadow-md hover:border-gold transition-colors duration-300 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardHeader className="relative z-10 p-4 pb-0">
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-bold text-gold opacity-50">{number.toString().padStart(2, "0")}</span>
            <h3 className="md:text-xl text-lg leading-6 font-semibold text-gold">{title}</h3>
          </div>
        </CardHeader>
        <CardContent className="relative z-10 p-4">
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

