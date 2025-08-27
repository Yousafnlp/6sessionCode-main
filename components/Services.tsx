"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import CoachingSessionCard from "./CoachingSessionCard"

const sessions = [
  {
    number: 1,
    title: "Guidance and Counseling",
    description: "Focusing on history taking and establishing a foundation for the coaching journey.",
  },
  {
    number: 2,
    title: "Anger and Sadness",
    description: "Dedicated to addressing and healing negative emotions like anger and sadness.",
  },
  {
    number: 3,
    title: "Guilt and Fears",
    description: "Continuation of the emotional healing process, healing guilts and fears.",
  },
  {
    number: 4,
    title: "Betrayal",
    description: "Final session in the emotional healing, healing betrayals consolidating progress and techniques.",
  },
  {
    number: 5,
    title: "Thoughts Restructuring",
    description:
      "Focus on breaking overthinking patterns and restructuring thought processes for better mental clarity.",
  },
  {
    number: 6,
    title: "Future Pace and Goal Setting",
    description: "Aimed at setting future goals and establishing a positive outlook moving forward.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">

      <main className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gold mb-4">6 Session Series</h1>
            <p className="text-xl text-gray-300 h-14 ">
              <TypeAnimation
                sequence={["Transform Your Mind, Transform Your Life", 2000, "Embrace Freedom, Live Pain-Free!", 2000]}
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessions.map((session, index) => (
              <motion.div
                key={session.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CoachingSessionCard number={session.number} title={session.title} description={session.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

