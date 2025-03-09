"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Star, ChevronDown } from "lucide-react"
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

const menuCategories = [
  { id: "all", name: "All" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Main Courses" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
]

const dietaryOptions = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-free" },
]

const menuItems = [
  {
    id: 1,
    name: "Truffle Arancini",
    price: "$14",
    description: "Crispy risotto balls with black truffle and mozzarella",
    category: "starters",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["vegetarian"],
  },
  {
    id: 2,
    name: "Tuna Tartare",
    price: "$16",
    description: "Fresh tuna with avocado, citrus, and wasabi aioli",
    category: "starters",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["gluten-free"],
  },
  {
    id: 3,
    name: "Roasted Beet Salad",
    price: "$12",
    description: "With goat cheese, walnuts, and balsamic reduction",
    category: "starters",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["vegetarian", "gluten-free"],
  },
  {
    id: 4,
    name: "Wagyu Beef Tenderloin",
    price: "$42",
    description: "8oz tenderloin with truffle mashed potatoes and asparagus",
    category: "mains",
    image: "/placeholder.svg?height=200&width=300",
    dietary: [],
  },
  {
    id: 5,
    name: "Pan-Seared Sea Bass",
    price: "$36",
    description: "With saffron risotto and lemon beurre blanc",
    category: "mains",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["gluten-free"],
  },
  {
    id: 6,
    name: "Mushroom Ravioli",
    price: "$28",
    description: "House-made pasta with wild mushrooms and sage brown butter",
    category: "mains",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["vegetarian"],
  },
  {
    id: 7,
    name: "Chocolate Lava Cake",
    price: "$12",
    description: "With vanilla ice cream and raspberry coulis",
    category: "desserts",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["vegetarian"],
  },
  {
    id: 8,
    name: "Crème Brûlée",
    price: "$10",
    description: "Classic vanilla bean custard with caramelized sugar",
    category: "desserts",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["vegetarian", "gluten-free"],
  },
  {
    id: 9,
    name: "Signature Martini",
    price: "$14",
    description: "Gin, vermouth, and a twist of lemon",
    category: "drinks",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["vegan", "gluten-free"],
  },
  {
    id: 10,
    name: "Artisanal Coffee",
    price: "$5",
    description: "Locally roasted, served with house-made biscotti",
    category: "drinks",
    image: "/placeholder.svg?height=200&width=300",
    dietary: ["vegan"],
  },
]

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDietary, setSelectedDietary] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredItems = menuItems.filter(
    (item) =>
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (selectedDietary.length === 0 || selectedDietary.every((diet) => item.dietary.includes(diet))),
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <SEO
        title="Our Menu"
        description="Explore Savoria's exquisite menu featuring innovative dishes crafted with locally-sourced ingredients. From appetizers to desserts, discover our culinary masterpieces."
        canonicalUrl="https://savoria-restaurant.com/menu"
        ogImage="https://savoria-restaurant.com/og-image-menu.jpg"
      />
      <Navbar />

      <main className="container mx-auto py-12 px-4">
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-orange-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Menu
        </motion.h1>

        <div className="mb-8">
          <Button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full md:w-auto bg-orange-100 text-orange-900 hover:bg-orange-200 mb-4"
          >
            Filters
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
          </Button>

          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md mb-8"
            >
              <div className="flex flex-wrap gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-orange-800">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {menuCategories.map((category) => (
                      <Button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        className={`${
                          selectedCategory === category.id
                            ? "bg-orange-500 text-white hover:bg-orange-600"
                            : "text-orange-500 hover:text-orange-600"
                        }`}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
                <Separator orientation="vertical" className="h-auto hidden md:block" />
                <div>
                  <h3 className="text-lg font-medium mb-3 text-orange-800">Dietary Restrictions</h3>
                  <div className="flex flex-wrap gap-4">
                    {dietaryOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.id}
                          checked={selectedDietary.includes(option.id)}
                          onCheckedChange={(checked) => {
                            setSelectedDietary((prev) =>
                              checked ? [...prev, option.id] : prev.filter((id) => id !== option.id),
                            )
                          }}
                        />
                        <Label
                          htmlFor={option.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={fadeIn}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} layout="fill" objectFit="cover" />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl text-orange-900">{item.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{item.description}</CardDescription>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-semibold text-orange-700">{item.price}</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {item.dietary.map((diet) => (
                      <span key={diet} className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                        {diet}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="container mx-auto py-8 border-t border-orange-200">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">© {new Date().getFullYear()} Savoria Restaurant</div>
          <div className="flex gap-4">
            <Link href="/about" className="text-gray-600 hover:text-orange-800 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-orange-800 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

