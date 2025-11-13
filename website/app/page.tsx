import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-memorial-gray-50">
          John R. Sosoka II
        </h1>
        <p className="text-2xl text-memorial-gray-400 mb-6">
          1953 - 2021
        </p>
        <p className="text-xl text-memorial-accent-blue font-medium mb-8">
          Futurist • Technologist • Inventor • Creative
        </p>
        <div className="max-w-3xl mx-auto text-lg text-memorial-gray-300 leading-relaxed mb-12">
          <p>
            John R. Sosoka II was a visionary technologist who believed in making technology
            accessible and meaningful. From pioneering robotic toys at Neurosmith to creating
            the beloved Pleo dinosaur at Ugobe, his work touched countless lives and inspired
            a generation of engineers and creators.
          </p>
        </div>

        {/* Memorial Photo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-memorial-accent-blue/20 to-memorial-accent-purple/20 rounded-lg blur-xl"></div>
            <div className="relative">
              <Image
                src="/images/2002-neurosmith-party.jpeg"
                alt="John R. Sosoka II at Neurosmith party, 2002"
                width={600}
                height={450}
                className="rounded-lg border-2 border-memorial-gray-700 shadow-2xl"
                priority
              />
              <p className="text-sm text-memorial-gray-500 italic mt-3">
                Neurosmith company party, 2002
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <NavigationCard
          href="/biography"
          title="Biography"
          description="Explore John's life journey, from his early days to his pioneering work in robotics and technology."
        />
        <NavigationCard
          href="/timeline"
          title="Timeline"
          description="Key milestones and achievements throughout his remarkable career and life."
        />
        <NavigationCard
          href="/work-overview"
          title="His Work"
          description="Discover the innovative products and companies John helped create and build."
        />
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

function NavigationCard({
  href,
  title,
  description
}: {
  href: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 hover:border-memorial-accent-blue transition-all duration-300 hover:shadow-lg hover:shadow-memorial-accent-blue/10"
    >
      <h3 className="text-2xl font-semibold mb-3 text-memorial-gray-50 group-hover:text-memorial-accent-blue transition-colors">
        {title}
      </h3>
      <p className="text-memorial-gray-400 leading-relaxed">
        {description}
      </p>
    </Link>
  )
}
