import ProductCard, { Product } from '@/components/ProductCard'

const products: Product[] = [
  // Davidson & Associates Era
  {
    id: 'math-blaster',
    name: 'Math Blaster',
    company: 'Davidson & Associates',
    year: '1983-1996',
    imagePath: '/images/products/math-blaster.jpg',
    shortDescription: 'Revolutionary educational software that made mathematics learning interactive and fun.',
    fullDescription: 'Under John\'s technical leadership as CTO, the Math Blaster franchise became one of the most successful educational software series of the 1980s and 1990s. The series demonstrated that educational software could be both pedagogically effective and commercially successful.',
    awards: [
      'One of the most successful educational software series of its era',
      'Helped establish the edutainment genre'
    ],
    impact: '1.6 million copies sold generating $60 million in sales. Math Blaster proved that children could learn complex subjects through interactive, game-like experiences, establishing a principle that would guide John\'s entire career.'
  },

  // Neurosmith Era
  {
    id: 'music-blocks',
    name: 'Music Blocks',
    company: 'Neurosmith',
    year: '1998-1999',
    imagePath: '/images/products/music-blox-best-toy-award-sticker.jpg',
    shortDescription: 'Revolutionary toy allowing toddlers to compose music using tactile blocks with conductive patterns.',
    fullDescription: 'Music Blocks featured different musical sequences on each face of colorful plastic blocks. When placed on the base unit, conductive patterns would trigger audio-visual responses, creating an intuitive cause-and-effect learning experience for young children.',
    awards: [
      'Virtually every major toy industry award',
      'Critical acclaim throughout the toy industry'
    ],
    patents: [
      'USD0410972S - Music Blocks Design Patent (1999)',
      'US6353168B1 - Educational Music Instrument for Children (2002)'
    ],
    impact: '100,000 units sold at $69.99 each, generating $5 million in revenue in 1999. Established Neurosmith as a major player in the educational toy market and demonstrated the commercial viability of developmentally-grounded interactive toys.'
  },

  {
    id: 'musini',
    name: 'Musini',
    company: 'Neurosmith',
    year: '2002',
    imagePath: '/images/products/musini-box-back.jpg',
    shortDescription: 'Interactive musical toy combining five musical styles with dynamic lighting.',
    fullDescription: 'Building on the success of Music Blocks, Musini represented an evolution in Neurosmith\'s interactive learning approach. Designed for children ages 3-8, it featured five different musical styles with synchronized lighting creating a multisensory learning experience.',
    awards: [
      '2002 T.O.T.Y. Award - Most Innovative Toy of the Year',
      'Toy Industry Association recognition'
    ],
    impact: 'The T.O.T.Y. Award validated John\'s vision of creating toys that fundamentally changed how children could engage with music and learning, highlighting Neurosmith\'s position at the forefront of educational toy innovation.'
  },

  {
    id: 'sunshine-symphony',
    name: 'Sunshine Symphony',
    company: 'Neurosmith',
    year: '1999-2004',
    imagePath: '/images/products/sunshine-symphony.jpg',
    shortDescription: 'Interactive musical toy combining light and sound for engaging learning experiences.',
    fullDescription: 'Part of Neurosmith\'s diverse portfolio, Sunshine Symphony continued the company\'s commitment to creating toys that respected children\'s intelligence while making learning through play both natural and delightful.',
    impact: 'Contributed to Neurosmith reaching $12 million in peak annual sales.'
  },

  {
    id: 'pet-me-platypus',
    name: 'Pet Me Platypus',
    company: 'Neurosmith',
    year: '1999-2004',
    imagePath: '/images/products/pet-me-platypus.jpg',
    shortDescription: 'Touch-responsive companion toy encouraging nurturing behavior and cause-and-effect learning.',
    fullDescription: 'This interactive companion toy used touch sensors to respond to children\'s actions, encouraging nurturing behavior and demonstrating cause-and-effect relationships in an engaging, playful format.',
    impact: 'Part of the product line that helped Neurosmith achieve recognition as a pioneer in interactive learning toys.'
  },

  // Ugobe Era
  {
    id: 'pleo',
    name: 'Pleo',
    company: 'Ugobe',
    year: '2006-2009',
    imagePath: '/images/products/pleo-posed-with-box.jpg',
    shortDescription: 'Autonomous robotic baby Camarasaurus dinosaur with lifelike behavior powered by Life OS.',
    fullDescription: 'Pleo was not just a toy—it was a breakthrough in autonomous robotics. Featuring 38 sensors, 14 motors, and sophisticated Life OS platform, Pleo exhibited stunning organic movement and dynamic behaviors. John and his team studied ethology to create a virtual brain system that made Pleo react authentically to its environment.',
    patents: [
      'US20080958988A1 - Robots with Autonomous Behavior (2008, co-invented with Caleb Chung)'
    ],
    awards: [
      'Unveiled at DEMO Conference February 7, 2006',
      'Generated significant market excitement and media coverage'
    ],
    impact: 'Approximately $20 million in sales. Launched at $349 in late 2007, Pleo became one of the most sophisticated consumer robots of its era. Despite Ugobe\'s 2009 bankruptcy, Pleo\'s technical achievements continued to influence companion robotics, and the product was relaunched by Innvo Labs.'
  },

  // Later Ventures
  {
    id: 'lumilife',
    name: 'LumiLife',
    company: 'LumiLife',
    year: '2013',
    imagePath: '/images/products/lumilife.jpg',
    shortDescription: 'Innovative LED lighting system with Bluetooth Smart technology and 16 million+ colors.',
    fullDescription: 'Co-founded with Ellen Wang and Andrew Wen, LumiLife featured a portable rechargeable globe with 8-hour battery life and wave-shaped charging dock. The low-heat LEDs allowed users to hold the glowing globe, creating intimate tactile interaction. Controlled via smartphone app with motion sensor integration.',
    impact: 'Demonstrated John\'s versatility as an innovator, successfully applying lessons from robotics and interactive toys to lighting while maintaining his signature focus on human-centered design.'
  }
]

export default function ProductGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Product Gallery
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        Throughout his career, John created products that touched millions of lives. From educational software to interactive learning toys to autonomous robots, each innovation reflected his commitment to making technology meaningful, accessible, and joyful.
      </p>

      {/* Era: Davidson & Associates */}
      <section className="mb-16">
        <div className="border-l-4 border-memorial-accent-blue pl-6 mb-8">
          <h2 className="text-3xl font-bold text-memorial-accent-blue mb-2">
            Davidson & Associates Era
          </h2>
          <p className="text-memorial-gray-400">
            1980s-1996 | Chief Technology Officer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(p => p.company === 'Davidson & Associates')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Era: Neurosmith */}
      <section className="mb-16">
        <div className="border-l-4 border-memorial-accent-purple pl-6 mb-8">
          <h2 className="text-3xl font-bold text-memorial-accent-purple mb-2">
            Neurosmith Era
          </h2>
          <p className="text-memorial-gray-400">
            1997-2004 | Co-Founder & CTO
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(p => p.company === 'Neurosmith')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Era: Ugobe */}
      <section className="mb-16">
        <div className="border-l-4 border-memorial-accent-gold pl-6 mb-8">
          <h2 className="text-3xl font-bold text-memorial-accent-gold mb-2">
            Ugobe Era
          </h2>
          <p className="text-memorial-gray-400">
            2001-2009 | Co-Founder, CTO & Head of R&D
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(p => p.company === 'Ugobe')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Era: Later Ventures */}
      <section className="mb-16">
        <div className="border-l-4 border-memorial-accent-blue pl-6 mb-8">
          <h2 className="text-3xl font-bold text-memorial-accent-blue mb-2">
            Later Ventures
          </h2>
          <p className="text-memorial-gray-400">
            2009-2017 | Continued Innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products
            .filter(p => p.company === 'LumiLife')
            .map(product => (
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
