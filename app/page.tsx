"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Slider from "react-slick"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Facebook, Instagram, Twitter, Camera } from "lucide-react"
import Navbar from "@/components/Navbar"
import SEO from "@/components/SEO"

// Import slick-carousel styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SlideingSocialmediaPost from "@/components/SlideingSocialmediaPost"

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

const testimonials = [
  {
    name: "Emily Thompson",
    rating: "5.0/5.0",
    comment: "Savoria exceeded all my expectations. The flavors were exquisite, and the service was impeccable.",
  },
  {
    name: "Michael Chen",
    rating: "4.9/5.0",
    comment: "An unforgettable dining experience. The attention to detail in every dish is remarkable.",
  },
  {
    name: "Emily Thompson",
    rating: "5.0/5.0",
    comment: "Savoria exceeded all my expectations. The flavors were exquisite, and the service was impeccable.",
  },
  {
    name: "Sophia Rodriguez",
    rating: "5.0/5.0",
    comment: "The ambiance, the food, the wine - everything was perfect. Savoria is a must-visit restaurant.",
  },
  {
    name: "David Johnson",
    rating: "4.8/5.0",
    comment: "I was blown away by the creativity of the dishes. Each bite was a new adventure in flavor.",
  },
  {
    name: "Olivia Lee",
    rating: "5.0/5.0",
    comment: "The chef's tasting menu was an absolute delight. I can't wait to come back and try more!",
  },
  {
    name: "Emily Thompson",
    rating: "5.0/5.0",
    comment: "Savoria exceeded all my expectations. The flavors were exquisite, and the service was impeccable.",
  },
  {
    name: "David Johnson",
    rating: "4.8/5.0",
    comment: "I was blown away by the creativity of the dishes. Each bite was a new adventure in flavor.",
  },
  {
    name: "Michael Chen",
    rating: "4.9/5.0",
    comment: "An unforgettable dining experience. The attention to detail in every dish is remarkable.",
  },
  {
    name: "Sophia Rodriguez",
    rating: "5.0/5.0",
    comment: "The ambiance, the food, the wine - everything was perfect. Savoria is a must-visit restaurant.",
  },
  {
    name: "David Johnson",
    rating: "4.8/5.0",
    comment: "I was blown away by the creativity of the dishes. Each bite was a new adventure in flavor.",
  },
  {
    name: "Olivia Lee",
    rating: "5.0/5.0",
    comment: "The chef's tasting menu was an absolute delight. I can't wait to come back and try more!",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <SEO
        title="Home"
        description="Experience exquisite flavors and impeccable service at Savoria, our award-winning Michelin-starred restaurant. Discover our innovative menu and book your table today."
        canonicalUrl="https://savoria-restaurant.com"
        ogImage="https://savoria-restaurant.com/og-image-home.jpg"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Restaurant Interior"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto relative z-10 text-white">
          <motion.div className="max-w-2xl" variants={stagger} initial="initial" animate="animate">
            <motion.h1 className="text-6xl font-bold mb-4" variants={fadeIn}>
              Savoria: A Culinary Journey
            </motion.h1>
            <motion.p className="text-xl mb-8" variants={fadeIn}>
              Experience exquisite flavors and impeccable service in our award-winning restaurant. Every dish tells a
              story of passion and creativity.
            </motion.p>
            <motion.div className="flex gap-4" variants={fadeIn}>
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                <Link href="/menu">Explore Menu</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white hover:text-orange-900"
              >
                <Link href="/contact">Make a Reservation</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowRight size={32} className="text-white" />
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-orange-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Signature Dishes
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: "Truffle Risotto", price: "$ 28.99", image: "/placeholder.svg?height=300&width=400" },
              { name: "Seared Scallops", price: "$ 32.99", image: "/placeholder.svg?height=300&width=400" },
              { name: "Wagyu Steak", price: "$ 45.99", image: "/placeholder.svg?height=300&width=400" },
            ].map((dish, index) => (
              <motion.div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden" variants={fadeIn}>
                <Image
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-900 mb-2">{dish.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-semibold text-orange-700">{dish.price}</p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vibe Check Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12 text-orange-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Vibe Check: Experience Savoria
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
           {[
  {
    title: "Elegant Dining Room",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Cozy Bar Area",
    image:
      "https://images.unsplash.com/photo-1680546614547-3011f3200b41?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Chef's Table Experience",
    image:
      "https://images.unsplash.com/photo-1552326399-9109c86379ae?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Outdoor Terrace",
    image:
      "https://plus.unsplash.com/premium_photo-1661775130884-4ac28ec07105?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Private Event Space",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Open Kitchen",
    image:
      "https://images.unsplash.com/photo-1708915965975-2a950db0e215?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
].map((item, index) => (
  <motion.div key={index} className="relative group" variants={fadeIn}>
    <Image
      src={item.image}
      alt={item.title}
      width={600}
      height={400}
      className="w-full h-64 object-cover rounded-lg shadow-md"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
      <div className="text-white text-center">
        <Camera className="w-8 h-8 mb-2 mx-auto" />
        <h3 className="text-xl font-semibold">{item.title}</h3>
      </div>
    </div>
  </motion.div>
))}
    </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-orange-100 overflow-hidden">
  <div className="container mx-auto px-4 max-w-screen-xl">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 text-orange-900">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Founded in 2010 by renowned chef Maria Rodriguez, Savoria has become a culinary landmark in the heart of
          the city. Our journey from a small family-owned restaurant to a Michelin-starred establishment is a
          testament to our unwavering commitment to culinary excellence and exceptional dining experiences.
        </p>
        <p className="text-gray-700 mb-4">
          Maria's passion for cooking was ignited in her grandmother's kitchen, where she learned the art of
          blending traditional recipes with innovative techniques. This fusion of old and new became the
          cornerstone of Savoria's philosophy.
        </p>
        <p className="text-gray-700 mb-4">
          Over the years, we've cultivated relationships with local farmers and artisans, ensuring that every
          ingredient that enters our kitchen is of the highest quality. Our seasonal menus reflect the bounty of
          our region and our dedication to sustainability.
        </p>
        <p className="text-gray-700 mb-6">
          Today, Savoria is more than just a restaurant; it's a destination for food lovers seeking unforgettable
          culinary experiences. From our innovative tasting menus to our warm, inviting atmosphere, we strive to
          create moments of joy and discovery with every visit.
        </p>
        <Button className="bg-orange-500 text-white hover:bg-orange-600">
          <Link href="/about">Learn More</Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Chef preparing a dish"
          width={600}
          height={400}
          className="rounded-lg shadow-lg w-full max-w-full"
        />
      </motion.div>
    </div>
  </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
  <div className="container mx-auto px-4 max-w-screen-xl">
    <motion.h2
      className="text-4xl font-bold text-center mb-12 text-orange-900"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      What Our Guests Say
    </motion.h2>
    {mounted && (
      <div className="w-full">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <motion.div
                className="bg-orange-50 p-6 rounded-lg shadow-md h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-orange-900">{testimonial.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-orange-400 text-orange-400 mr-1" />
                      <span className="text-orange-700 font-semibold">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    )}
  </div>
      </section>


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

      {/* Footer */}
      <footer className="bg-orange-100 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold text-orange-900">
                <span className="text-3xl font-extrabold tracking-tight">
                  S<span className="text-orange-500">avoria</span>
                </span>
              </Link>
              <p className="mt-4 text-gray-700">
                Experience culinary excellence at Savoria, where every dish tells a story.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-900">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", href: "/" },
                  { name: "Menu", href: "/menu" },
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-700 hover:text-orange-700">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-900">Contact Us</h3>
              <p className="text-gray-700">123 Gourmet Street</p>
              <p className="text-gray-700">Culinary City, CC 12345</p>
              <p className="text-gray-700">Phone: (555) 123-4567</p>
              <p className="text-gray-700">Email: info@savoria.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-orange-900">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-orange-700 hover:text-orange-900">
                  <Facebook size={24} />
                </Link>
                <Link href="#" className="text-orange-700 hover:text-orange-900">
                  <Instagram size={24} />
                </Link>
                <Link href="#" className="text-orange-700 hover:text-orange-900">
                  <Twitter size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-orange-200 text-center text-gray-700">
            © {new Date().getFullYear()} Savoria Restaurant. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

