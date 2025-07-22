
//import { Avatar } from '@radix-ui/react-avatar'
import { useTheme } from 'next-themes'
import './App.css'
import { useEffect } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Star } from 'lucide-react'
import { Button } from './components/ui/button'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  const { setTheme } = useTheme()

  // Detect system theme
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [setTheme])

  //mock data
  const categories = [
    { name: "Electronics", img: "/images/electronics.jpg" },
    { name: "Fashion", img: "/images/fashion.jpg" },
    { name: "Home Appliances", img: "/images/home-appliances.jpg" },
  ]

  const products = [
    {
      name: "Smartphone",
      price: "Ksh 299",
      description: "Latest smartphone with amazing features.",
      rating: 4,
      img: "/images/smartphone.jpg",
      stock: true,
    },
    {
      name: "Headphones",
      price: "Ksh 49",
      description: "Noise-cancelling over-ear headphones.",
      rating: 5,
      img: "/images/headphones.jpg",
      stock: false,
    },
    {
      name: "Smartphone",
      price: "Ksh 299",
      description: "Latest smartphone with amazing features.",
      rating: 4,
      img: "/images/smartphone.jpg",
      stock: true,
    },
    {
      name: "Smartphone",
      price: "Ksh 299",
      description: "Latest smartphone with amazing features.",
      rating: 4,
      img: "/images/smartphone.jpg",
      stock: true,
    },
  ]

  return (
    <>
    <Navbar/>
      <main className="min-h-screen bg-background text-foreground">
        <div className="min-h-screen bg-background text-foreground">
          {/* Carousel */}
          <section className="w-full max-w-5xl mx-auto my-10">
            <Carousel>
              <CarouselContent>
                {categories.map((category, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] w-full">
                      <img
                        src={category.img}
                        alt={category.name}
                        className="object-cover w-full h-full rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <h2 className="text-white text-2xl font-bold">
                          {category.name}
                        </h2>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>

          {/* Categories and Products */}
          <section className="w-full max-w-5xl mx-auto space-y-8">
            {categories.map((category, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product, idx) => (
                    <Card key={idx} className="border shadow-md hover:shadow-lg transition">
                      <CardHeader>
                        <img
                          src={product.img}
                          alt={product.name}
                          className="h-40 w-full object-cover rounded-md"
                        />
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
                        <p className="font-semibold">{product.price}</p>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: 5 }, (_, starIdx) => (
                            <Star
                              key={starIdx}
                              size={16}
                              className={`${starIdx < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <Badge variant={product.stock ? "default" : "destructive"}>
                          {product.stock ? "In Stock" : "Out of Stock"}
                        </Badge>
                      </CardContent>
                      <div className="p-4">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Add to Cart</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App
