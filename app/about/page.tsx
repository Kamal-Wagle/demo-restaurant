"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Utensils, Wine, Award, Circle, ArrowRight } from "lucide-react"
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

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <SEO
        title="About Us"
        description="Discover the story behind Savoria, from our humble beginnings to becoming a Michelin-starred culinary destination. Meet our passionate team and learn about our values."
        canonicalUrl="https://savoria-restaurant.com/about"
        ogImage="https://savoria-restaurant.com/og-image-about.jpg"
      />
      <Navbar />

      <main className="container mx-auto py-12 px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-orange-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Story
        </motion.h1>

        <motion.section variants={stagger} initial="initial" animate="animate" className="mb-16">
          <motion.div variants={fadeIn} className="mb-12  max-w-7xl mx-auto">
            <p className="text-xl text-gray-700 mb-6">
              Founded in 2010 by renowned chef Maria Rodriguez, Savoria has become a culinary landmark in the heart of
              the city. Our journey from a small family-owned restaurant to a Michelin-starred establishment is a
              testament to our unwavering commitment to culinary excellence and exceptional dining experiences.
            </p>
            <p className="text-xl text-gray-700">
              At Savoria, we believe that every dish tells a story - a story of passion, creativity, and the rich
              culinary traditions that inspire us. Our innovative approach to classic cuisine has earned us accolades
              and a loyal following of food enthusiasts from around the world.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-orange-800">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
              {[
                {
                  year: "2010",
                  event: "Savoria opens its doors, offering a unique fusion of traditional and modern cuisine.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  year: "2013",
                  event: "Expansion of the restaurant, introducing our now-famous Chef's Table experience.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  year: "2015",
                  event: "Awarded our first Michelin star, recognizing our commitment to culinary excellence.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  year: "2018",
                  event: "Launch of our seasonal menu, showcasing the best local and sustainable ingredients.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  year: "2020",
                  event: "Celebration of our 10th anniversary with a series of special events and tasting menus.",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  year: "2023",
                  event: "Opening of our rooftop garden, providing fresh herbs and produce for our kitchen.",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`mb-8 flex justify-between items-center w-full ${
                    index % 2 === 0 ? "flex-row-reverse left-timeline" : "right-timeline"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-orange-400 shadow-xl w-8 h-8 rounded-full">
                    <Circle className="w-4 h-4 mx-auto text-white" />
                  </div>
                  <motion.div
                    className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="mb-3 font-bold text-orange-900 text-xl">{item.year}</h3>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.year} - ${item.event}`}
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <p className="text-sm font-medium leading-snug tracking-wide text-gray-700">{item.event}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-800">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Rodriguez",
                  role: "Executive Chef & Founder",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "With over 20 years of culinary experience, Maria brings her passion for innovative cuisine to every dish at Savoria.",
                },
                {
                  name: "John Smith",
                  role: "Head Chef",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "John's expertise in French and Italian cuisines adds a unique flair to Savoria's menu.",
                },
                {
                  name: "Emily Chen",
                  role: "Pastry Chef",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "Emily's creative desserts are the perfect finale to any meal at Savoria.",
                },
                {
                  name: "David Lee",
                  role: "Sommelier",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "David's extensive knowledge ensures the perfect wine pairing for every dish.",
                },
                {
                  name: "Sarah Johnson",
                  role: "Restaurant Manager",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "Sarah's attention to detail ensures a seamless dining experience for all our guests.",
                },
                {
                  name: "Michael Brown",
                  role: "Sous Chef",
                  image: "/placeholder.svg?height=300&width=300",
                  bio: "Michael's creativity and technical skills support the creation of Savoria's innovative menu.",
                },
              ].map((member, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold text-orange-900">{member.name}</h3>
                      <p className="text-gray-600 mb-2">{member.role}</p>
                      <p className="text-sm text-gray-700">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-orange-800">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: ChefHat,
                  title: "Culinary Excellence",
                  description: "We strive for perfection in every dish we create.",
                },
                {
                  icon: Utensils,
                  title: "Sustainable Sourcing",
                  description: "We prioritize local, organic, and sustainable ingredients.",
                },
                {
                  icon: Wine,
                  title: "Exceptional Service",
                  description: "We provide an unforgettable dining experience for every guest.",
                },
                {
                  icon: Award,
                  title: "Continuous Innovation",
                  description: "We constantly push the boundaries of culinary creativity.",
                },
              ].map((value, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 300 }}
                      >
                        <value.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-orange-900 mb-2">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

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

          <motion.div variants={fadeIn} className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-orange-800">Ready to Experience Savoria?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join us for an unforgettable culinary journey. Book your table today and taste the passion in every dish.
            </p>
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href="/contact">Make a Reservation</Link>
            </Button>
          </motion.div>
          <motion.div
            className="fixed bottom-8 right-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Button
              className="bg-orange-500 text-white rounded-full p-3 shadow-lg hover:bg-orange-600 transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowRight className="w-6 h-6 transform rotate-270" />
            </Button>
          </motion.div>
        </motion.section>
      </main>

      <footer className="bg-orange-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="text-orange-800 hover:text-orange-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-orange-800 hover:text-orange-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-orange-800 hover:text-orange-600">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
          <p className="text-gray-700">© {new Date().getFullYear()} Savoria Restaurant. All Rights Reserved.</p>
        </div>
      </footer>
      <style jsx>{`
        .left-timeline {
          padding-left: 30px;
        }
        .right-timeline {
          padding-right: 30px;
        }
      `}</style>
    </div>
  )
}

