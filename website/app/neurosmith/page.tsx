import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function NeuromithPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Neurosmith
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        Co-Founder & CTO | Interactive Learning Toys | 1997-2004
      </p>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Overview Stats */}
        <section className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-memorial-accent-blue">
            Company Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">$12M</div>
              <div className="text-memorial-gray-400">Peak Annual Sales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">100K+</div>
              <div className="text-memorial-gray-400">Music Blocks Sold (1999)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">2002</div>
              <div className="text-memorial-gray-400">Toy of the Year Award</div>
            </div>
          </div>
        </section>

        {/* Founding Vision */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Founding Vision
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              In 1997, John co-founded Neurosmith with Brooke Abercrombie, an alumna
              from Davidson & Associates, establishing the company in Long Beach, California.
              Drawing from his experience leading educational software development at Davidson,
              John brought a profound understanding of how children learn through play.
            </p>
            <p>
              Both founders brought deep experience from Davidson & Associates, a prominent
              educational software company best known for the Math Blaster program. Brooke,
              who held an MBA from Harvard University, served as vice president of product
              development at Davidson, while John was chief technology officer overseeing
              software development. When Davidson & Associates was sold in 1996 to CUC
              International for $1.2 billion, the founders secured $5 million in startup
              funding from their former employers, Bob and Jan Davidson, who believed in
              their vision to bring educational principles from software to physical toys.
            </p>
            <p>
              Neurosmith's mission was revolutionary for its time: bringing child development
              principles and exploratory learning into the tactile, physical world. While
              educational software dominated screens, John envisioned interactive toys that
              would encourage infants and toddlers to explore, experiment, create, and relate
              to others through hands-on experiences.
            </p>
            <p>
              As Chief Technology Officer, John translated developmental psychology research
              into innovative product designs that made learning through play both intuitive
              and joyful. His technical leadership established Neurosmith as a pioneer in
              interactive learning toys for young children.
            </p>
          </div>
        </section>

        {/* The Team */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            The Team
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-6">
            <p>
              Neurosmith operated from a small second-floor office in the Wells Fargo Bank
              building in the Belmont Shore area of Long Beach. The team brought together
              expertise in child development, engineering, design, and manufacturing to create
              toys that were both innovative and developmentally appropriate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/neurosmith/2003-john-and-brooke.jpeg"
                  alt="John Sosoka and Brooke Abercrombie, co-founders of Neurosmith"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/neurosmith/neurosmith-team-w-unreleased-products.jpeg"
                  alt="Neurosmith team with unreleased products in development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-sm text-memorial-gray-500 italic text-center">
              Left: John Sosoka and Brooke Abercrombie, co-founders | Right: The Neurosmith
              team with products in development
            </p>
          </div>
        </section>

        {/* Philosophy & Approach */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Philosophy & Development Approach
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Neurosmith distinguished itself through a rigorous, research-based approach
              to toy development that set it apart from competitors:
            </p>

            <div className="space-y-4">
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Child Development Focus
                </h3>
                <p className="text-memorial-gray-300">
                  The company integrated research from neuroscientists and child development
                  experts into product design. They worked with advisors like Morten Christiansen,
                  a neuroscientist at Southern Illinois University, to understand how infants
                  learn and develop cognitive skills.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Sound Quality Excellence
                </h3>
                <p className="text-memorial-gray-300">
                  Neurosmith utilized CD-quality audio in their musical toys, featuring
                  sophisticated electronics that surpassed many competitors. This commitment
                  to sound quality ensured that children's first experiences with music would
                  be with rich, authentic tones.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Open-Ended Learning Design
                </h3>
                <p className="text-memorial-gray-300">
                  Products were designed to allow unlimited, creative play patterns that grew
                  with children, encouraging exploration rather than following prescribed scripts.
                  This approach respected children's intelligence and natural curiosity.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Testing and Refinement
                </h3>
                <p className="text-memorial-gray-300">
                  All products were tested on children and scrutinized by mothers in focus
                  groups before release, ensuring real-world usability and developmental
                  appropriateness.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Music Blocks */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Music Blocks: A Revolutionary Breakthrough
          </h2>

          <div className="relative aspect-video rounded-lg overflow-hidden border border-memorial-gray-700 mb-6">
            <Image
              src="/images/neurosmith/music-blocks-showcase.jpg"
              alt="Music Blocks - Neurosmith's flagship product allowing children to compose music with colorful blocks"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Launched in 1998-1999, Music Blocks represented a breakthrough in how young
              children could interact with music. The revolutionary toy allowed toddlers to
              compose over one million unique musical compositions by mixing and matching
              five brightly colored electronic blocks. Each block played a different musical
              phrase, and each side of each block offered a variation of that phrase.
            </p>
            <p>
              John's technical innovation was elegant yet sophisticated. When a child placed
              a block onto the base unit, conductive patterns on the block faces would engage
              with receiving portions on the base, triggering musical sequences that varied
              depending on which face was inserted. This tactile interaction method created an
              intuitive cause-and-effect learning experience perfectly suited for young minds.
            </p>

            <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 my-6">
              <h3 className="text-xl font-semibold text-memorial-gray-200 mb-3">
                Technical Innovation
              </h3>
              <ul className="list-disc list-inside space-y-2 text-memorial-gray-300">
                <li>Conductive pattern recognition technology</li>
                <li>Multiple musical sequences per block (different on each face)</li>
                <li>Audio-visual response system for immediate feedback</li>
                <li>Tactile interaction encouraging exploratory play</li>
                <li>Interchangeable cartridges with different musical selections (Mozart, Sounds of the Orchestra, Rhythms of the World)</li>
              </ul>
            </div>

            <p>
              The product faced significant manufacturing challenges in 1998. The first Chinese
              factory, accustomed to making simpler plastic toys, lacked the technical
              sophistication to produce the complicated electronic toys on schedule. This
              disastrous first Christmas left them with no revenues that year, as Music Blocks
              production was delayed until after the 1998 holiday season.
            </p>

            <p>
              After this setback, Neurosmith hired a new factory experienced with digital toys
              and a director of manufacturing. By 1999, they successfully sold 100,000 Music
              Blocks units at $69.99 each, generating approximately $5 million in revenue and
              establishing Neurosmith as a major player in the educational toy market.
            </p>

            <p>
              Music Blocks earned critical acclaim throughout the toy industry, winning
              virtually every major toy award and cementing John's reputation as an innovator
              who could successfully bridge child development theory, cutting-edge technology,
              and commercial viability.
            </p>
          </div>
        </section>

        {/* Musini */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Musini: Most Innovative Toy of the Year
          </h2>

          <div className="relative aspect-square rounded-lg overflow-hidden border border-memorial-gray-700 mb-6 max-w-md mx-auto">
            <Image
              src="/images/neurosmith/musini-showcase.jpg"
              alt="Musini - Interactive musical toy with revolutionary motion sensor technology"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Building on the success of Music Blocks, John led the development of Musini,
              launched in 2002. This innovative musical toy represented an evolution in
              Neurosmith's interactive learning approach, featuring revolutionary motion
              sensor technology that converted children's movements into music.
            </p>

            <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6 my-6">
              <h3 className="text-2xl font-bold text-memorial-accent-blue mb-4 text-center">
                2002 T.O.T.Y. Award Winner
              </h3>
              <div className="text-center text-memorial-gray-300">
                <p className="text-xl mb-2">Most Innovative Toy of the Year</p>
                <p className="text-memorial-gray-400">
                  Toy of the Year Awards - Toy Industry Association
                </p>
              </div>
            </div>

            <p>
              The revolutionary <strong>MagicSensor</strong> technology detected vibrations
              from movement, transforming any room into a musical playground where every step,
              turn, touch, and tap activated unique musical responses. Children could explore
              five distinct musical styles: <strong>Basically Bach</strong>, <strong>Child's Play</strong>,
              <strong>Latin Jazz</strong>, <strong>Carnival</strong>, and <strong>Orchestral Overture</strong>.
              The toy retailed for $69.99 and was compatible with expansion cartridges for
              additional musical styles.
            </p>

            <p>
              Designed for children ages 3-8, Musini integrated synchronized lighting that
              created a multisensory experience responding to children's actions, reinforcing
              the connection between their movements and the musical output.
            </p>

            <p>
              This prestigious recognition at the T.O.T.Y. Awards validated John's vision
              of creating toys that didn't just entertain, but fundamentally changed how
              children could engage with music and learning. The award highlighted Neurosmith's
              position at the forefront of educational toy innovation.
            </p>
          </div>
        </section>

        {/* Product Portfolio */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Complete Product Line
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Beyond the flagship Music Blocks and award-winning Musini, John's technical
              leadership produced a diverse portfolio of interactive learning toys spanning
              music education, language learning, and early childhood development:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Sunshine Symphony
                </h3>
                <p className="text-memorial-gray-400">
                  Plush, huggable activity toy featuring eight tactile petals and four classical
                  music compositions (Mozart, Handel, Tchaikovsky, Prokofiev). Touch-activated
                  with lights and high-quality sound.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  The Babbler ($49)
                </h3>
                <p className="text-memorial-gray-400">
                  Infant toy exposing babies to sounds in Spanish, French, and Japanese to
                  facilitate language learning later in life. Randomly produced sounds unique
                  to these languages that infants in English-speaking homes weren't typically
                  exposed to.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Little Linguist
                </h3>
                <p className="text-memorial-gray-400">
                  Bilingual learning toy helping children learn languages by hearing words and
                  associating them with familiar objects. Came with interchangeable cartridges
                  for Spanish, French, Japanese, and English.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Phonics Blocks & Phonics Tiles
                </h3>
                <p className="text-memorial-gray-400">
                  Interactive phonics education products featuring four modes of play, letter
                  songs, interactive games, and over 600 high-frequency words programmed into
                  the system.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Jumbo Music Block
                </h3>
                <p className="text-memorial-gray-400">
                  14-inch plush block with six sides featuring different shapes and colors,
                  playing songs about shapes while teaching motor skills.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Pet Me Platypus
                </h3>
                <p className="text-memorial-gray-400">
                  Touch-responsive companion toy with geometric shape buttons, encouraging
                  nurturing behavior and cause-and-effect learning.
                </p>
              </div>
            </div>

            <p>
              Each product demonstrated John's commitment to creating toys that respected
              children's intelligence while making learning through play both natural and
              delightful. The complete product line contributed to Neurosmith reaching
              $12 million in peak annual sales, with products sold through major retailers
              including FAO Schwartz, Learning Express, Toys R Us, Zany Brainy, and Target.
            </p>
          </div>
        </section>

        {/* Press Coverage */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Press Coverage & Industry Recognition
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Neurosmith received significant media attention for its innovative approach
              to educational toys, providing crucial visibility for a company too small to
              afford major advertising campaigns:
            </p>

            <div className="bg-gradient-to-r from-memorial-gray-900 to-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 my-6">
              <p className="text-xl text-memorial-gray-200 italic mb-3">
                "The most innovative musical toy"
              </p>
              <p className="text-memorial-gray-400 text-sm">
                — Time Magazine (February 2002) describing Musini at the Toy Fair
              </p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-memorial-gray-300 ml-4">
              <li>
                <strong>Los Angeles Times</strong> profiled the company's challenges and
                successes in multiple feature articles (2000, 2004)
              </li>
              <li>
                <strong>Los Angeles Business Journal</strong> featured the founders'
                entrepreneurial journey (2000)
              </li>
              <li>
                <strong>NBC's TODAY Show</strong> showcased Neurosmith products through
                Oppenheim Toy Portfolio coverage
              </li>
              <li>
                Featured in child development and educational technology publications for
                integrating neuroscience research into toy design
              </li>
            </ul>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Awards and Recognition
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Neurosmith products received numerous prestigious awards from industry
              organizations, validating the company's research-based approach and John's
              technical innovations:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-accent-blue mb-3">
                  Oppenheim Toy Portfolio Awards
                </h3>
                <ul className="list-disc list-inside space-y-2 text-memorial-gray-300">
                  <li>
                    <strong>Platinum Award</strong> for Music Blocks Maestro — the highest
                    recognition for innovative and engaging products
                  </li>
                  <li>
                    <strong>Blue Chip Classic Award</strong> for Music Blocks — recognizing
                    outstanding products that remain relevant over time
                  </li>
                  <li>
                    Music Blocks was praised by the Oppenheim Family and featured on major
                    network TV morning talk shows in 1999
                  </li>
                </ul>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-accent-blue mb-3">
                  Parents Magazine
                </h3>
                <p className="text-memorial-gray-300">
                  <strong>Best Toys of the Year</strong> recognition for Music Blocks (1999)
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-accent-blue mb-3">
                  Toy Industry Association
                </h3>
                <p className="text-memorial-gray-300">
                  <strong>2002 Toy of the Year (T.O.T.Y.) Award</strong> — Most Innovative
                  Toy of the Year for Musini
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-accent-blue mb-3">
                  Additional Recognition (2006)
                </h3>
                <p className="text-memorial-gray-300">
                  Multiple Neurosmith products won awards from the Creative Child Foundation
                  and Dr. Toy, demonstrating continued relevance even after the acquisition
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patents and Innovation */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Patents and Technical Innovation
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              John's technical genius at Neurosmith produced multiple patents that protected
              the company's innovative approaches to interactive learning:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <div className="font-mono text-sm text-memorial-gray-400 mb-2">USD0410972S</div>
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Music Blocks Design Patent
                </h3>
                <p className="text-memorial-gray-300">
                  Issued 1999. Protected the distinctive design of the Music Blocks toy,
                  covering the unique shape and interface elements that made the product
                  instantly recognizable.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <div className="font-mono text-sm text-memorial-gray-400 mb-2">US6353168B1</div>
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Educational Music Instrument for Children
                </h3>
                <p className="text-memorial-gray-300">
                  Issued 2002. Covered the innovative technology enabling children to compose
                  music through tactile block manipulation, including the conductive pattern
                  recognition system and audio-visual response mechanisms.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <div className="font-mono text-sm text-memorial-gray-400 mb-2">US20020090596A1</div>
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Apparatus, Systems and Methods for Electronically Teaching Phonics
                </h3>
                <p className="text-memorial-gray-300">
                  Patent application filed 2002. Extended Neurosmith's interactive learning
                  approach to phonics education, using conductive patterns on blocks to
                  identify characters and trigger appropriate audio-visual teaching responses.
                </p>
              </div>

              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6">
                <div className="font-mono text-sm text-memorial-gray-400 mb-2">US20070093169A1</div>
                <h3 className="text-xl font-semibold text-memorial-gray-200 mb-2">
                  Interactive Book and Toy
                </h3>
                <p className="text-memorial-gray-300">
                  Patent application co-invented with Abbey C. Blaszczyk. Explored integration
                  of physical books with interactive toy components, further expanding the
                  boundaries of tactile learning experiences.
                </p>
              </div>
            </div>

            <p>
              These patents showcased John's systematic approach to innovation: identifying
              how children naturally learn, designing intuitive interfaces that leverage
              those instincts, and implementing sophisticated technology in ways that felt
              effortless to young users. His work at Neurosmith established foundational
              principles for interactive learning toys that continue to influence the industry.
            </p>
          </div>
        </section>

        {/* Challenges and Acquisition */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Challenges and Acquisition
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Despite achieving $12 million in peak sales and winning prestigious industry
              awards, Neurosmith faced significant market challenges. The company's products
              commanded premium prices relative to mass-market toys, reflecting their
              sophisticated technology and developmental research foundations. However,
              limited advertising budgets made it difficult to communicate this value
              proposition to mainstream consumers.
            </p>
            <p>
              Manufacturing and shipping disruptions further complicated the company's
              operations, particularly given the complex electronics and quality standards
              required for Neurosmith's interactive products. Finding shelf space in an
              increasingly competitive toy market proved challenging for a small company
              without the advertising budget of major toy manufacturers.
            </p>
            <p>
              In <strong>September 2004</strong>, Small World Kids Inc., a Culver City-based
              developmental toy company, acquired Neurosmith's assets (including electronic
              learning products and intellectual property) for an undisclosed amount. The
              acquisition was supported by a <strong>$16.5 million credit facility from PNC
              Business Credit</strong>. Small World Kids CEO Debra Fine aimed to leverage
              the Neurosmith brand name and product line by cutting costs, lowering prices,
              and beginning advertising campaigns.
            </p>
            <p>
              Under Small World Kids, some Neurosmith products continued to be sold, and the
              company won additional awards in 2006. However, Small World Kids itself faced
              financial difficulties and filed for Chapter 11 bankruptcy in August 2007,
              ultimately going out of business.
            </p>
            <p>
              While the acquisition marked the end of Neurosmith as an independent company,
              it represented a successful outcome for John's vision. The company had
              fundamentally changed the interactive learning toy landscape, earned the
              industry's highest honors, and generated millions in sales while bringing
              joy and developmental benefits to countless children.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Behind the Scenes
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-6">
            <p>
              Neurosmith's success was built on collaboration, innovation, and the dedication
              of a small team working to bring revolutionary products to market. These images
              capture moments from the company's journey, from product development to team
              collaborations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/neurosmith/2003-neurosmith-office-product-tst.jpeg"
                  alt="Neurosmith office showcasing products in development (2003)"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/neurosmith/john-lego-dev-team-pre-sail.jpeg"
                  alt="John with Lego development team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/neurosmith/john-brooke-lego-jet.jpeg"
                  alt="John and Brooke with Lego jet collaboration project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/neurosmith/lego-collab-slide.JPG"
                  alt="Lego collaboration presentation slide from 2003"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/neurosmith/jumbo-block-showcase.jpg"
                  alt="Jumbo Music Block product showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-sm text-memorial-gray-500 italic">
              Images from Neurosmith's offices, development process, and product collaborations
              spanning 1998-2004
            </p>
          </div>
        </section>

        {/* Legacy */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-memorial-accent-blue">
            Legacy and Impact
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Neurosmith established John as a pioneer in translating child development
              research into commercial products that actually worked. His approach of
              combining rigorous developmental psychology with intuitive product design
              and sophisticated engineering created a new category of interactive learning
              toys.
            </p>
            <p>
              The principles John established at Neurosmith—tactile interaction, immediate
              audio-visual feedback, exploratory play, and developmentally appropriate
              design—continue to influence how educational toys are conceived and created.
              Products that followed in Neurosmith's wake owe a debt to John's vision of
              making learning through play both scientifically grounded and genuinely joyful.
            </p>
            <p>
              Beyond the products themselves, Neurosmith demonstrated John's unique ability
              to bridge multiple disciplines: software engineering from his Davidson days,
              child development research, industrial design, electronics, and business
              strategy. This multidisciplinary approach would characterize his entire career,
              reaching its apex with his later work in companion robotics at Ugobe.
            </p>
            <p>
              For the children who played with Music Blocks, Musini, and other Neurosmith
              toys, John created formative experiences—moments of discovery, creation, and
              joy that shaped how they understood the relationship between their actions and
              the world around them. In this sense, Neurosmith's legacy extends far beyond
              sales figures or awards, living on in the minds of those who first learned to
              make music by simply placing a block where it belonged.
            </p>
          </div>
        </section>

        {/* Sources & References */}
        <section className="border-t border-memorial-gray-800 pt-12">
          <h2 className="text-2xl font-bold mb-6 text-memorial-accent-blue">
            Sources & References
          </h2>
          <div className="text-sm text-memorial-gray-400 leading-relaxed space-y-3">
            <p className="mb-4">
              This page draws from extensive research including press coverage, SEC filings,
              and industry publications. Key sources for critical claims include:
            </p>

            <div className="grid grid-cols-1 gap-3">
              <a
                href="https://labusinessjournal.com/news/toys-learning-to-have-fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    Los Angeles Business Journal (2000)
                  </div>
                  <div className="text-memorial-gray-500">
                    "Toys Learning to Have Fun" — Founders' background, $5M funding from Davidson family,
                    company founding details, Parents Magazine award
                  </div>
                </div>
              </a>

              <a
                href="https://www.latimes.com/archives/la-xpm-2000-mar-15-fi-8931-story.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    Los Angeles Times (March 2000)
                  </div>
                  <div className="text-memorial-gray-500">
                    Company profile including Davidson & Associates background, $1.2 billion sale,
                    Morten Christiansen neuroscientist collaboration, 1998 manufacturing challenges
                  </div>
                </div>
              </a>

              <a
                href="https://time.com/archive/6665809/toys-that-twist-and-shout/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    Time Magazine (February 2002)
                  </div>
                  <div className="text-memorial-gray-500">
                    "Toys that Twist and Shout" — Called Musini "the most innovative musical toy"
                    at the 2002 Toy Fair
                  </div>
                </div>
              </a>

              <a
                href="https://www.toyportfolio.com/single-post/2017/10/29/small-world-neurosmith-music-blocks"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    Oppenheim Toy Portfolio
                  </div>
                  <div className="text-memorial-gray-500">
                    Official award details for Music Blocks: Platinum Award and Blue Chip Classic Award
                  </div>
                </div>
              </a>

              <a
                href="https://www.latimes.com/archives/la-xpm-2004-sep-29-fi-toy29-story.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    Los Angeles Times (September 2004)
                  </div>
                  <div className="text-memorial-gray-500">
                    Small World Kids acquisition details, $12 million peak sales, market challenges
                  </div>
                </div>
              </a>

              <a
                href="https://www.sec.gov/Archives/edgar/data/1157564/000114420404014928/ex99.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    SEC Filing (September 2004)
                  </div>
                  <div className="text-memorial-gray-500">
                    Official documentation of Small World Kids acquisition of Neurosmith assets
                  </div>
                </div>
              </a>

              <a
                href="https://investor.pnc.com/sec-filings/all-sec-filings/content/0001193125-05-059283/dex991.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    PNC Business Credit SEC Filing (2005)
                  </div>
                  <div className="text-memorial-gray-500">
                    $16.5 million credit facility supporting Small World Kids acquisition
                  </div>
                </div>
              </a>

              <a
                href="https://labusinessjournal.com/news/toy-maker-may-be-at-the-end-of-its-small-world/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
                <div>
                  <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                    Los Angeles Business Journal (2007)
                  </div>
                  <div className="text-memorial-gray-500">
                    Small World Kids Chapter 11 bankruptcy filing in August 2007
                  </div>
                </div>
              </a>
            </div>

            <p className="mt-6 text-xs text-memorial-gray-600">
              Additional sources include product manuals, patent filings, retail listings,
              and contemporaneous media coverage from 1997-2007.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
