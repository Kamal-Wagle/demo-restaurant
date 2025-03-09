"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"
import Navbar from "@/components/Navbar"
import SEO from "@/components/SEO"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <SEO
        title="Contact Us"
        description="Get in touch with Savoria Restaurant. Make a reservation, inquire about private events, or simply reach out to us. We're here to answer your questions and welcome you to our culinary haven."
        canonicalUrl="https://savoria-restaurant.com/contact"
        ogImage="https://savoria-restaurant.com/og-image-contact.jpg"
      />
      <Navbar />

      <main className="container mx-auto py-12">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-orange-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <motion.div variants={stagger} initial="initial" animate="animate" className="grid md:grid-cols-2 gap-12">
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={4} />
              </div>
              <Button type="submit" className="bg-orange-800 text-white hover:bg-orange-900">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-6 text-orange-800">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-orange-800 mr-2" />
                <p className="text-gray-600">123 Gourmet Street, Culinary City, CC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-orange-800 mr-2" />
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-orange-800 mr-2" />
                <p className="text-gray-600">info@savoria.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-orange-800">Hours of Operation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Thursday: 11:00 AM - 10:00 PM</li>
                <li>Friday - Saturday: 11:00 AM - 11:00 PM</li>
                <li>Sunday: 10:00 AM - 9:00 PM</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <motion.div variants={fadeIn} className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-800">Visit Us</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841902045457!2d-73.98823492404!3d40.75889083441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1687301256589!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

      <footer className="container mx-auto py-8 border-t border-orange-200">
        <div className="text-center text-gray-600">
          © {new Date().getFullYear()} Savoria Restaurant. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

