"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import a from "../assets/c1.webp";
import b from "../assets/c2.webp";
import c from "../assets/c3.webp";
import d from "../assets/c4.webp";
import e from "../assets/c5.webp";
import f from "../assets/c6.webp";

import { Award, Star } from "lucide-react";
const certifications = [
  {
    id: 1,
    title: "Certified Practitioner of Neuro-Linguistic Programming Training",
    organization:
      "Rabab Syed Institute of Neuroplasticity (RSIN) & The American Board of NLP (ABNLP)",
    date: "September 2024",
    image: a,
    description:
      "130-hour Practitioner Training in Neuro-Linguistic Programming",
  },
  {
    id: 3,
    title: "Certified NLP Master Coach",
    organization:
      "Successful Minds Institute (SMI) & Coaching Division of the American Board of NLP (ABNLP)",
    date: "October 2024",
    image: c,
    description:
      "140-hour Master Practitioner Training in Neuro Linguistic Programming",
  },
  {
    id: 4,
    title: "Certified Master Practitioner Of Neuro Linguistic Programming",
    organization:
      "Rabab Syed Institute of Neuroplasticity (RSIN) & The American Board of NLP (ABNLP)",
    date: "October 2024",
    image: f,
    description:
      "140-hour Practitioner Training in Neuro Linguistic Programming",
  },
  {
    id: 5,
    title: "Certified Practitioner of Time Line Therapy®",
    organization:
      "Rabab Syed Institute of Neuroplasticity (RSIN) & Time Line Therapy Association (TLTA)",
    date: "September 2024",
    image: d,
    description:
      "130-hour Practitioner Certification Training in Neuro-Linguistic Programming",
  },
  {
    id: 2,
    title: "Certified Master Practitioner of Time Line Therapy®",
    organization: "Time Line Therapy Association (TLTA)",
    date: "October 2024",
    image: b,
    description:
      "130-hour Practitioner Certification Training in Neuro-Linguistic Programming and Time Line Therapy®",
  },
  {
    id: 6,
    title: "Certified Associate Practitioner of Neuro-Linguistic Programming",
    organization:
      "Rabab Syed Institute of Neuroplasticity (RSIN) & The American Board of NLP (ABNLP)",
    date: "July 2024",
    image: e,
    description:
      "120-hour Practitioner Certification Training in Neuro-Linguistic Programming",
  },
];

export default function Certifications() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="container relative mx-auto px-2 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-1 mb-8">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              Professional Certifications
            </h2>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                style={{ height: "350px" }}
                className="relative bg-black backdrop-blur-sm  overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Certificate Image */}
                <div className="flex justify-center  overflow-hidden h-[500px] items-center">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    style={{ width: "250px" }}
                    alt={cert.title}
                    width={200}
                    height={200}
                    className="object-cover  group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Certificate Details */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-gold transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {cert.organization}
                    </p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
