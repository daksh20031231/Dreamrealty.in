'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const propertyImages = [
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepblusve53jwSPDO-PztZnO3GvT1nhU91L1fhIs52ZOiWkQ-xM9wd87XCl6sJtqhsakyCBVAAmFpRnh7cR39u8HSQSiEOuxSYenUOXOlwMQVrA80sp4xTyXkh2ui7-oWArDxlRR=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepGIeD_cdrac9qFEfHATcNH2IvbhZpU7ZjBoU02DWZonK1BMpOn3unPV_e15eQ78QbNwpl1LAqU6wo8UEJJF0JemrsMM_byCsnSUwARCVG0l9q1c4Xm9vCU572L8weJ-cG2WC2QHQ=s1360-w1360-h1020-rw",
  "https://future-hold.com/wp-content/uploads/2025/03/Provident-Park-Square-Future-Hold-1.jpg"
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % propertyImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <div className="inline-block px-4 py-2 bg-secondary rounded-full">
              <p className="text-sm font-medium">Welcome to Prime Estate</p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find Your Perfect Property with Prime Estate
            </h1>

            <p className="text-lg text-foreground/70 max-w-xl">
              Prime Estate provides end-to-end real estate services including
              rental, buying, selling, and property management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold"
              >
                Explore Services
              </motion.a>

            </div>

          </motion.div>

          {/* Right Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px]"
          >

            {propertyImages.map((image, index) => (
              <motion.div
                key={index}
                animate={{ opacity: currentImage === index ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 rounded-2xl overflow-hidden"
              >

                <Image
                  src={image}
                  alt={`Property ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-lg">
                  <p className="font-semibold">Premium Property {index + 1}</p>
                  <p className="text-sm opacity-80">Prime Estate</p>
                </div>

              </motion.div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index
                      ? 'bg-white w-8'
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}