"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-title-light dark:text-title-dark">
              Ready to Transform Your Property Experience?
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
              Join the future of property viewing and booking today.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" className="bg-button-light hover:bg-button-light-hover dark:bg-button-dark dark:hover:bg-button-dark-hover">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 