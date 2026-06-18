'use client'

import { motion } from 'framer-motion'

const serviceAreas = [
  'Kanakapura Road',
  'Bannerghatta Road',
  'JP Nagar',
  'Jayanagar',
  'Whitefield',
  'Marathahalli',
  'Indiranagar',
  'Yeshwanthpur',
]

export function LocalSeoContent() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
        >
          <div>
            <p className="text-sm font-medium text-primary mb-4">Bengaluru Property Experts</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Real Estate Services for Bengaluru Buyers, Tenants and Property Owners
            </h2>
          </div>

          <div className="space-y-6 text-foreground/70">
            <p className="text-lg leading-relaxed">
              Dream Realty supports property rentals, resale homes, new project launches, owner-side property management and real estate consultation across Bengaluru. Our team works with tenants, home buyers, sellers, landlords and investors who want clear guidance before making a property decision.
            </p>
            <p className="text-lg leading-relaxed">
              We actively serve key residential micro-markets including South Bengaluru, North Bengaluru, East Bengaluru, West Bengaluru and Central Bengaluru, with focused support near major gated communities and high-demand apartment corridors.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
