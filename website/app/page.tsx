import Link from 'next/link'
import Image from 'next/image'
import { Award, Box, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section with Name/Title */}
      <section className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-memorial-gray-50">
          John R. Sosoka Jr
        </h1>
        <p className="text-2xl text-memorial-gray-400 mb-6">
          1953 - 2021
        </p>
        <p className="text-xl text-memorial-accent-blue font-medium mb-8">
          Futurist • Technologist • Inventor • Creative
        </p>
      </section>

      {/* Split Hero: Photo + Navigation Grid */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Memorial Photo */}
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-memorial-accent-blue/20 to-memorial-accent-purple/20 rounded-lg blur-xl"></div>
              <div className="relative">
                <Image
                  src="/images/2002-neurosmith-party.jpeg"
                  alt="John R. Sosoka Jr at Neurosmith party, 2002"
                  width={600}
                  height={450}
                  className="rounded-lg border-2 border-memorial-gray-700 shadow-2xl w-full"
                  priority
                />
                <p className="text-sm text-memorial-gray-500 italic mt-3 text-center">
                  Neurosmith company party, 2002
                </p>
              </div>
            </div>
          </div>

          {/* Right: Navigation Grid */}
          <div className="space-y-6">
            <div className="text-lg text-memorial-gray-300 leading-relaxed mb-8">
                <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl leading-relaxed space-y-4">
                    A visionary technologist and a maker’s maker, John bridged art, science, and engineering with uncommon curiosity and care.
                    <br /><br />
                    From achieving video streaming on an i386 in the early 90s to pioneering child-directed learning toys at Neurosmith and creating the lifelike Pleo dinosaur at Ugobe, his work shaped how people learn, play, and connect with technology.
                    <br /><br />
                    His products and innovations earned numerous awards and continue to touch countless engineers, builders, and everyday lives around the world.
                </p>



            </div>

            <div className="space-y-4">
              <NavigationGridItem
                href="/gallery/products"
                icon={<Box className="w-6 h-6" />}
                title="Product Gallery"
                description="Explore the innovative products John helped build from Math Blaster to Pleo"
                color="blue"
              />

              <NavigationGridItem
                href="/press"
                icon={<Award className="w-6 h-6" />}
                title="Press & Awards"
                description="Recognition from TIME Magazine to Toy of the Year Awards"
                color="purple"
              />

              <NavigationGridItem
                href="/timeline"
                icon={<Clock className="w-6 h-6" />}
                title="Timeline"
                description="Key milestones from founding the Technology Application Group to Ugobe and beyond"
                color="gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-3xl mx-auto text-center py-12 border-t border-memorial-gray-800">
        <blockquote className="text-2xl italic text-memorial-gray-300 mb-4">
          "Technology should serve humanity, not the other way around."
        </blockquote>
        <p className="text-memorial-gray-500">
          - A principle that guided John's work
        </p>
      </section>
    </div>
  )
}

function NavigationGridItem({
  href,
  icon,
  title,
  description,
  color
}: {
  href: string
  icon: React.ReactNode
  title: string
  description: string
  color: 'blue' | 'purple' | 'gold'
}) {
  const colorClasses = {
    blue: 'border-memorial-accent-blue hover:border-memorial-accent-blue/80 hover:bg-memorial-accent-blue/5 text-memorial-accent-blue',
    purple: 'border-memorial-accent-purple hover:border-memorial-accent-purple/80 hover:bg-memorial-accent-purple/5 text-memorial-accent-purple',
    gold: 'border-memorial-accent-gold hover:border-memorial-accent-gold/80 hover:bg-memorial-accent-gold/5 text-memorial-accent-gold'
  }

  return (
    <Link
      href={href}
      className={`group block p-6 rounded-lg border-2 ${colorClasses[color]} transition-all duration-300 hover:shadow-lg`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1 text-memorial-gray-50 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-memorial-gray-400 group-hover:text-memorial-gray-300 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
