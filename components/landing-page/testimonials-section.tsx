"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsSection() {
  const testimonials = [
    {
      content: "The virtual tour experience was incredible! I could explore every corner of the property from the comfort of my home.",
      author: "Sarah Johnson",
      role: "Property Buyer",
      avatar: "/avatars/sarah.jpg",
      initials: "SJ"
    },
    {
      content: "The AI-powered pricing system helped me get the best deal for my property. Highly recommended!",
      author: "Michael Chen",
      role: "Property Owner",
      avatar: "/avatars/michael.jpg",
      initials: "MC"
    },
    {
      content: "Booking was seamless and the virtual tour gave me confidence in my decision. Great platform!",
      author: "Emma Davis",
      role: "Tenant",
      avatar: "/avatars/emma.jpg",
      initials: "ED"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Don&apos;t just take our word for it. Here&apos;s what our users have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h3 className="font-bold">{testimonial.author}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 