'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, MapPin } from 'lucide-react'

const projects = [
  {
    name: 'Casagrand Casablanca',
    location: 'Kanakapura Road, South Bengaluru',
    price: 'Starting from ₹1.23 Cr',
    image: '/channel-partner-projects/casagrand-casablanca.jpeg',
    link: 'https://www.casagrand.co.in/residential/ongoing-projects-bengaluru-kanagapura-road/casagrand-casablanca/',
  },
  {
    name: 'Godrej Vantara',
    location: 'Off Bannerghatta Road, South Bengaluru',
    price: 'Starting from ₹1.28 Cr',
    image: '/channel-partner-projects/godrej-vantara.jpeg',
    link: 'https://homesdecoded.com/godrej-bannerghatta/?utm_source=search_135287&utm_medium=Google&utm_campaign=Search_Brand_Project&utm_adgroup=FE_07_AG_01_EXACT_KW&utm_id=463&utm_publisher=Google&utm_publisher_id=23&ad_code=135287&gad_source=1&gad_campaignid=23783376959&gbraid=0AAAABDd_jNoAiw2pCXbw6dUbvQBsDhpCr&gclid=Cj0KCQjwi8nRBhDhARIsAHZf_paSKpykWlD_FOhNfub2HsWZJawcdW6FgiU7wvy8X_er1cucbZXvzPQaAh6UEALw_wcB',
  },
]

export function ChannelPartnerProjects() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length)
  }

  return (
    <section id="channel-partner-projects" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary mb-4">Trusted Channel Partner</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">New Project Launches</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore newly published partner projects from Dream Realty and open the official project page in one click.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group min-w-full bg-card text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Open ${project.name} project page`}
                >
                  <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative overflow-hidden bg-muted lg:h-auto">
                      <img
                        src={project.image}
                        alt={`${project.name} launch poster`}
                        className="aspect-square h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02] lg:h-full lg:object-cover lg:group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent lg:hidden" />
                    </div>

                    <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                      <div className="mb-5 inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                        Dream Realty Channel Partner
                      </div>
                      <h3 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                        {project.name}
                      </h3>
                      <div className="mt-5 flex items-start gap-3 text-muted-foreground">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <p className="text-base sm:text-lg">{project.location}</p>
                      </div>
                      <p className="mt-6 text-2xl font-bold text-primary">{project.price}</p>
                      <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors group-hover:bg-primary/90">
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur transition hover:bg-secondary md:flex"
            aria-label="Previous project"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-lg backdrop-blur transition hover:bg-secondary md:flex"
            aria-label="Next project"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex justify-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? 'w-9 bg-primary' : 'w-2.5 bg-muted-foreground/35'
                }`}
                aria-label={`Show ${project.name}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
