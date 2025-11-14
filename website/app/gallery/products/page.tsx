'use client'

import ProductCard, { Product } from '@/components/ProductCard'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Featured products for carousel
const featuredProducts = [
  {
    id: 'pleo',
    name: 'Pleo',
    company: 'Ugobe',
    year: '2007',
    imagePath: '/images/ugobe/pleo-showcase.jpeg',
    shortDescription: 'Autonomous robotic baby Camarasaurus dinosaur with lifelike behavior.',
    highlight: 'TIME Magazine Best Inventions 2006',
    stats: '100K units sold across 60+ countries',
    description: 'Featuring 38 sensors, 14 motors, and the Life OS platform, Pleo exhibited stunning organic movement and dynamic behaviors unlike any consumer robot before it.'
  },
  {
    id: 'music-blocks',
    name: 'Music Blocks',
    company: 'Neurosmith',
    year: '1998',
    imagePath: '/images/neurosmith/music-blocks-showcase.jpg',
    shortDescription: 'Revolutionary toy allowing toddlers to compose over 1 million musical combinations.',
    highlight: 'Oppenheim Platinum Award Winner',
    stats: '100K units sold in 1999',
    description: 'John\'s technical innovation used conductive patterns on colorful blocks to trigger musical sequences, creating an intuitive cause-and-effect learning experience perfectly suited for young minds.'
  },
  {
    id: 'musini',
    name: 'Musini',
    company: 'Neurosmith',
    year: '2002',
    imagePath: '/images/neurosmith/musini-showcase.jpg',
    shortDescription: 'Motion-sensing musical toy that transformed movement into music.',
    highlight: '2002 Toy of the Year Award',
    stats: 'Most Innovative Toy',
    description: 'Revolutionary MagicSensor technology detected vibrations from movement, transforming any room into a musical playground where every step, turn, and tap activated unique musical responses.'
  }
]

// All products in chronological order
const products: Product[] = [
  {
    id: 'math-blaster',
    name: 'Math Blaster',
    company: 'Davidson & Associates',
    year: '1983',
    imagePath: '/images/products/math-blaster.jpg',
    shortDescription: 'Revolutionary educational software that made mathematics learning interactive and fun.',
    fullDescription: 'Under John\'s technical leadership as CTO, the Math Blaster franchise became one of the most successful educational software series of the 1980s and 1990s. The series demonstrated that educational software could be both pedagogically effective and commercially successful.',
    awards: [
      'One of the most successful educational software series of its era',
      'Helped establish the edutainment genre'
    ],
    impact: '1.6 million copies sold generating $60 million in sales. Math Blaster proved that children could learn complex subjects through interactive, game-like experiences.'
  },
  {
    id: 'music-blocks',
    name: 'Music Blocks',
    company: 'Neurosmith',
    year: '1998',
    imagePath: '/images/neurosmith/music-blocks-showcase.jpg',
    shortDescription: 'Revolutionary toy allowing toddlers to compose music using tactile blocks with conductive patterns.',
    fullDescription: 'Music Blocks featured different musical sequences on each face of colorful plastic blocks. When placed on the base unit, conductive patterns would trigger audio-visual responses, creating an intuitive cause-and-effect learning experience for young children.',
    awards: [
      'Oppenheim Platinum Award',
      'Oppenheim Blue Chip Classic Award',
      'Parents Magazine Best Toys of the Year (1999)'
    ],
    patents: [
      'USD0410972S - Music Blocks Design Patent (1999)',
      'US6353168B1 - Educational Music Instrument for Children (2002)'
    ],
    impact: '100,000 units sold at $69.99 each, generating $5 million in revenue in 1999. Established Neurosmith as a major player in the educational toy market.'
  },
  {
    id: 'sunshine-symphony',
    name: 'Sunshine Symphony',
    company: 'Neurosmith',
    year: '1999',
    imagePath: '/images/products/sunshine-symphony.jpg',
    shortDescription: 'Plush, huggable activity toy featuring eight tactile petals and four classical music compositions.',
    fullDescription: 'Touch-activated with lights and high-quality sound. Featured Mozart, Handel, Tchaikovsky, and Prokofiev compositions. Designed for infants and toddlers to explore music through tactile interaction.',
    impact: 'Contributed to Neurosmith reaching $12 million in peak annual sales.'
  },
  {
    id: 'musini',
    name: 'Musini',
    company: 'Neurosmith',
    year: '2002',
    imagePath: '/images/neurosmith/musini-showcase.jpg',
    shortDescription: 'Interactive musical toy with revolutionary motion sensor technology.',
    fullDescription: 'Building on the success of Music Blocks, Musini featured MagicSensor technology that detected vibrations from movement, transforming any room into a musical playground. Designed for children ages 3-8, it featured five distinct musical styles with synchronized lighting.',
    awards: [
      '2002 T.O.T.Y. Award - Most Innovative Toy of the Year',
      'TIME Magazine: "The most innovative musical toy" (February 2002)'
    ],
    impact: 'The T.O.T.Y. Award validated John\'s vision of creating toys that fundamentally changed how children could engage with music and learning.'
  },
  {
    id: 'pleo',
    name: 'Pleo',
    company: 'Ugobe',
    year: '2007',
    imagePath: '/images/ugobe/pleo-showcase.jpeg',
    shortDescription: 'Autonomous robotic baby Camarasaurus dinosaur with lifelike behavior powered by Life OS.',
    fullDescription: 'Pleo was not just a toy—it was a breakthrough in autonomous robotics. Featuring 38 sensors, 14 motors, two ARM7 32-bit processors, and the sophisticated Life OS platform, Pleo exhibited stunning organic movement and dynamic behaviors. John and his team studied ethology to create a virtual brain system that made Pleo react authentically to its environment.',
    patents: [
      'US20080958988A1 - Robots with Autonomous Behavior (2008, co-invented with Caleb Chung)',
      'USD614251S - Robotic Eye (2010)'
    ],
    awards: [
      'TIME Magazine Best Inventions of 2006',
      'Popular Science Coolest Inventions of 2007',
      'DEMO 2006 INNY and DEMOgod Awards',
      'Idaho Innovation Award 2006'
    ],
    impact: '~100,000 units sold worldwide, $19.2 million in revenue (2008). Despite Ugobe\'s 2009 bankruptcy, Pleo\'s technical achievements continued to influence companion robotics, and was relaunched by Innvo Labs as Pleo rb in 2011.'
  }
]

export default function ProductGalleryPage() {
  const [currentFeatured, setCurrentFeatured] = useState(0)

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredProducts.length)
  }

  const prevFeatured = () => {
    setCurrentFeatured((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length)
  }

  const featured = featuredProducts[currentFeatured]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Product Gallery
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        Throughout his career, John created products that touched millions of lives. From educational software to interactive learning toys to autonomous robots, each innovation reflected his commitment to making technology meaningful, accessible, and joyful.
      </p>

      {/* Featured Product Carousel */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-memorial-accent-blue">
          Featured Innovations
        </h2>
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src={featured.imagePath}
                  alt={featured.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  <p className="text-sm text-memorial-accent-blue font-semibold mb-2">
                    {featured.company} • {featured.year}
                  </p>
                  <h3 className="text-4xl font-bold text-memorial-gray-50 mb-3">
                    {featured.name}
                  </h3>
                  <p className="text-lg text-memorial-gray-300 mb-4">
                    {featured.shortDescription}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-memorial-gray-800/50 border border-memorial-accent-blue/30 rounded-lg p-4">
                    <p className="text-sm font-semibold text-memorial-accent-blue mb-1">
                      {featured.highlight}
                    </p>
                    <p className="text-memorial-gray-400 text-sm">
                      {featured.stats}
                    </p>
                  </div>
                </div>

                <p className="text-memorial-gray-400 leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevFeatured}
              className="p-2 rounded-lg bg-memorial-gray-800 border border-memorial-gray-700 hover:border-memorial-accent-blue text-memorial-gray-400 hover:text-memorial-accent-blue transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {featuredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatured(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentFeatured
                      ? 'bg-memorial-accent-blue w-8'
                      : 'bg-memorial-gray-700 hover:bg-memorial-gray-600'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextFeatured}
              className="p-2 rounded-lg bg-memorial-gray-800 border border-memorial-gray-700 hover:border-memorial-accent-blue text-memorial-gray-400 hover:text-memorial-accent-blue transition-colors"
              aria-label="Next product"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* All Products Grid (Chronological Order) */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-memorial-gray-50">
          Complete Product Catalog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Legacy Statement */}
      <section className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200">
          A Legacy of Innovation
        </h2>
        <p className="text-lg text-memorial-gray-300 leading-relaxed">
          Each product represents more than technical achievement—it represents John's belief that technology should serve humanity, making learning joyful, play meaningful, and interaction intuitive. From Math Blaster to Pleo, his work demonstrated that the most powerful innovations come from deeply understanding human needs and designing with empathy, intelligence, and craft.
        </p>
      </section>
    </div>
  )
}
