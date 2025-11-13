import Image from 'next/image'

export default function ArtPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Art & Creative Expression
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        John's creativity extended beyond technology and robotics into the realm of fine art,
        where he explored the intersection of technology, emotion, and human experience.
      </p>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* BOCOLAB Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            BOCOLAB: Where Art Meets Science
          </h2>
          <div className="text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Throughout his career, John Sosoka bridged the worlds of technology and art, proving that
              innovation and creativity weren't opposing forces but complementary ways of understanding
              our world. His involvement with BOCOLAB—the Boise Cooperative Laboratories—represented
              this philosophy in its purest form.
            </p>
            <p>
              BOCOLAB brought together artists and scientists in collaborative exploration, founded on
              the belief that <em>"scientists use logic and rational methods to understand the world,
              while artists use intuition and irrational means to glimpse reality."</em> For John, this
              wasn't just an interesting idea—it was how he'd always worked.
            </p>
          </div>
        </section>

        {/* Objects with Empathy - Award Hero */}
        <section>
          <div className="bg-gradient-to-br from-memorial-accent-gold/10 to-memorial-accent-purple/10 border-2 border-memorial-accent-gold rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-memorial-accent-gold text-memorial-darker px-6 py-2 rounded-full font-bold text-sm">
                🏆 2010 Idaho Triennial - First Place Winner
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-4 text-memorial-gray-50">
              Objects with Empathy
            </h2>
            <p className="text-center text-memorial-gray-300 text-lg">
              An exploration of technology, emotion, and the objects that connect us
            </p>
          </div>

          {/* Hero Image - Full Installation */}
          <div className="mb-12">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-memorial-gray-700">
              <Image
                src="/images/bocolab-objects-with-empathy.jpg"
                alt="Objects with Empathy installation featuring the chair, lamp, and table sculptures"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-memorial-gray-500 mt-2 text-center italic">
              The complete Objects with Empathy installation: The Chair, The Lamp, and The Table
            </p>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-memorial-accent-blue">
              About the Project
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4">
              <p>
                In September 2010, the BOCOLAB team won first place in the prestigious Idaho Triennial
                with their installation <strong className="text-memorial-gray-50">"Objects with Empathy."</strong> The
                project asked a provocative question: What happens when we give our increasingly autonomous
                technology not just intelligence, but empathy?
              </p>
              <p>
                The installation featured three robotic, interactive sculptures—a chair, a table, and a
                lamp—each with its own personality and backstory, powered by the Pulse-Core social robot
                engine that John helped develop. These weren't just moving objects; they were characters
                with emotional lives.
              </p>
              <p>
                This unlikely trio, brought together by an eccentric collector for museum exhibition,
                had formed a supportive "family" living their lives in public—often interrupted by the
                humans they were built to serve, but who now were more intruders into their world than masters.
              </p>
            </div>
          </div>

          {/* The Characters */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-blue">
              The Characters
            </h3>
            <div className="space-y-8">
              {/* Character Descriptions */}
              <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-memorial-accent-purple">The Chair</h4>
                <p className="text-memorial-gray-300 leading-relaxed">
                  Powerful and grouchy, sculpted from stainless steel with eight linear actuators and
                  sensors. It came from the workshop of a brilliant, aging inventor who designed it with
                  many degrees of freedom to assist him as his own body began to fail.
                </p>
              </div>

              <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-memorial-accent-purple">The Lamp</h4>
                <p className="text-memorial-gray-300 leading-relaxed">
                  The most sophisticated and expressive piece. Standing over seven feet tall when fully
                  extended and weighing more than 200 pounds, this aluminum sculpture originally lived in
                  a sophisticated home filled with parties and famous guests. Highly empathetic with grace
                  and subtlety to its motions, it could cast light in any color and featured a transparent
                  polycarbonate ring that glowed to reveal its internal emotional state.
                </p>
              </div>

              <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3 text-memorial-accent-purple">The Table</h4>
                <p className="text-memorial-gray-300 leading-relaxed">
                  Simple but beautiful, originally a companion for a preschool child in a modest home.
                  The child and table would draw and play for hours together. Now, with no child to play
                  with, the table entertains itself by drawing what it's thinking on its surface—sometimes
                  playing the role of the long-lost child, then responding and expanding the drawing as it
                  once did years ago.
                </p>
              </div>

              {/* Character Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                    <Image
                      src="/images/bocolab/chair-worked-on.JPG"
                      alt="The Chair sculpture under development"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-memorial-gray-500 mt-2 text-center">The Chair - Stainless steel with eight actuators</p>
                </div>
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                    <Image
                      src="/images/bocolab/explodedlamp2.JPG"
                      alt="Technical view of The Lamp showing internal mechanisms"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-memorial-gray-500 mt-2 text-center">The Lamp - Over 7 feet tall, 200+ pounds</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Technology Behind the Art */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-memorial-accent-blue">
              The Technology Behind the Art
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4">
              <p>
                John served as <strong className="text-memorial-gray-50">Project Lead and Control System Designer</strong>,
                bringing his decades of experience creating responsive, character-driven robots to this artistic
                context. The installation showcased the first public display of robots powered by the Pulse-Core
                social robot engine—technology designed to give machines the ability to read and respond to social cues.
              </p>
              <p>
                Where Pleo responded to touch and movement to create the illusion of life, these objects responded
                to human presence and interaction to create the illusion of emotion and relationship. They demonstrated
                John's core belief: that technology should connect and enhance human experience, not alienate or intimidate.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-blue">
              Development: The Robotic Lamp
            </h3>
            <p className="text-memorial-gray-300 mb-6 leading-relaxed">
              This video captures John at work developing the lamp component of the installation,
              combining mechanical engineering, electronics, and artistic expression into a unified whole.
            </p>
            <div className="aspect-video bg-memorial-gray-900 rounded-lg overflow-hidden border border-memorial-gray-700">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-GFKx2hnNDU"
                title="John developing the robotic lamp for Objects with Empathy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* The Collaborative Spirit */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-blue">
              The Collaborative Spirit
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4 mb-8">
              <p>
                The project exemplified the collaborative approach John championed throughout his career.
                The BOCOLAB team included:
              </p>
            </div>

            {/* Team Photo */}
            <div className="mb-8">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/bocolab/bocolab-team-partial.JPG"
                  alt="Members of the BOCOLAB team working on the Objects with Empathy installation"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-memorial-gray-500 mt-2 text-center italic">
                The BOCOLAB team at work
              </p>
            </div>

            {/* Team List */}
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <ul className="space-y-3 text-memorial-gray-300">
                <li className="flex items-start">
                  <span className="text-memorial-accent-blue mr-3">•</span>
                  <span><strong className="text-memorial-gray-50">Caleb Chung</strong> - Robotics designer and character development (John's longtime collaborator from the Pleo project)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-memorial-accent-blue mr-3">•</span>
                  <span><strong className="text-memorial-gray-50">Francis Fox</strong> - Sculpture professor at Boise State and master metalworker who guided the aesthetic and fabrication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-memorial-accent-blue mr-3">•</span>
                  <span><strong className="text-memorial-gray-50">John Sosoka</strong> - Project lead and control system design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-memorial-accent-blue mr-3">•</span>
                  <span><strong className="text-memorial-gray-50">Tyler Wilson</strong> - Lead programmer and software integration, co-founder of Pulse-Robotics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-memorial-accent-blue mr-3">•</span>
                  <span><strong className="text-memorial-gray-50">Jeff Myers</strong> - Storyboard artist (from The Simpsons), illustrator, and creator of the table's visualizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-memorial-accent-blue mr-3">•</span>
                  <span><strong className="text-memorial-gray-50">Amit Thakkar</strong> - 3D modeling and rendering that helped communicate the vision</span>
                </li>
              </ul>
              <p className="text-memorial-gray-400 mt-4 text-sm italic">
                Plus a dedicated crew of technicians, welders, engineers, and volunteers who made the
                ambitious installation possible.
              </p>
            </div>
          </div>

          {/* The Impact */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-blue">
              The Impact
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4">
              <p>
                Winning first place came with an additional honor: BOCOLAB would receive its own dedicated
                exhibition. The installation opened at the Boise Art Museum, where school children from across
                the Treasure Valley experienced what may have been their only opportunity to see cutting-edge
                art and advanced robotics working together.
              </p>
              <div className="bg-memorial-gray-900 border-l-4 border-memorial-accent-blue p-6 my-6">
                <p className="text-memorial-gray-300 italic">
                  "This could be the moment in a child's life where they realize that pursuing a career in
                  technology doesn't mean that they have to give up their creative, artistic side—rather they
                  can embrace both sides of their being. These are the employees that we all want to hire in
                  the next decade and now is the time for all of us show them an inspiring future!"
                </p>
                <p className="text-memorial-gray-500 text-sm mt-2">— John Sosoka</p>
              </div>
              <p>
                The project also advanced the mission of the Corpus Callosum foundation—a nonprofit at Boise
                State University dedicated to integrating art and science, named for the part of the brain
                that connects its two hemispheres.
              </p>
            </div>
          </div>

          {/* Philosophy in Practice */}
          <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-purple">
              Philosophy in Practice
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4 mb-6">
              <p>
                <em>Objects with Empathy</em> represented the culmination of ideas that had driven John's
                work for decades:
              </p>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-memorial-accent-blue pl-6">
                <h4 className="text-lg font-semibold text-memorial-gray-50 mb-2">Technology should serve humanity</h4>
                <p className="text-memorial-gray-300">
                  These robots weren't showcasing technical prowess for its own sake, but exploring how
                  responsive technology might enrich human experience
                </p>
              </div>
              <div className="border-l-4 border-memorial-accent-blue pl-6">
                <h4 className="text-lg font-semibold text-memorial-gray-50 mb-2">Form and function unite</h4>
                <p className="text-memorial-gray-300">
                  Each piece was both mechanically sophisticated and aesthetically compelling
                </p>
              </div>
              <div className="border-l-4 border-memorial-accent-blue pl-6">
                <h4 className="text-lg font-semibold text-memorial-gray-50 mb-2">Character creates connection</h4>
                <p className="text-memorial-gray-300">
                  Just as Pleo's lifelike behaviors made people care about a robotic dinosaur, these objects'
                  "empathy" made people reconsider their relationships with everyday things
                </p>
              </div>
              <div className="border-l-4 border-memorial-accent-blue pl-6">
                <h4 className="text-lg font-semibold text-memorial-gray-50 mb-2">Collaboration amplifies creativity</h4>
                <p className="text-memorial-gray-300">
                  Artists, scientists, engineers, and craftspeople working together achieved something none
                  could have created alone
                </p>
              </div>
            </div>
            <p className="text-memorial-gray-400 mt-6 text-sm italic">
              In the rapidly digitizing world of 2010, the installation explored "the nexus of the physical
              and the virtual"—a boundary John had been navigating throughout his career.
            </p>
          </div>

          {/* A Life's Work */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-blue">
              A Life's Work in Three Objects
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4">
              <p>
                While commercially, John created products like Pleo that brought joy to millions,
                <em> Objects with Empathy</em> allowed him to explore these same ideas as pure artistic
                expression. The chair, lamp, and table weren't products to be sold but provocations to be
                experienced—asking viewers to imagine a future where the objects around us don't just serve
                us, but understand us.
              </p>
              <p>
                They were, in essence, the question John had been asking throughout his career: As we give
                our creations more autonomy and intelligence, what kind of relationship do we want with them?
              </p>
              <p>
                For a man who spent his life making technology more human, there was perhaps no more fitting
                recognition than winning an art prize for making objects more empathetic.
              </p>
            </div>
          </div>

          {/* Development Process Gallery */}
          <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-gray-50">
              Development Process
            </h3>
            <p className="text-memorial-gray-300 mb-6 leading-relaxed">
              Behind the finished installation lay months of design, fabrication, and testing. These images
              capture the engineering and artistic process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                  <Image
                    src="/images/bocolab/exploded chair.JPG"
                    alt="Exploded view of the chair showing internal components and actuators"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-memorial-gray-500 mt-2 text-center">Chair components and actuators</p>
              </div>
              <div>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                  <Image
                    src="/images/bocolab/explodedlamp2.JPG"
                    alt="Technical diagram showing lamp mechanical systems"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-memorial-gray-500 mt-2 text-center">Lamp mechanical systems</p>
              </div>
              <div>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
                  <Image
                    src="/images/bocolab/whiteboard-todo.JPG"
                    alt="Whiteboard showing project planning and workflow"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-memorial-gray-500 mt-2 text-center">Project planning and workflow</p>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-blue">
              Learn More
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://francisfox.art/2010/09/22/bocolab-wins-grand-prize/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-6 hover:border-memorial-accent-blue transition-colors group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-memorial-gray-50 group-hover:text-memorial-accent-blue">
                    Francis Fox's Announcement
                  </h4>
                  <svg className="w-5 h-5 text-memorial-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-memorial-gray-400 text-sm">
                  Sculpture professor Francis Fox announces BOCOLAB's first place win
                </p>
              </a>
              <a
                href="https://www.idahopress.com/boiseweekly/news/features/2010-idaho-triennial/article_ec95db69-f5e8-586f-9ac4-190832c633dc.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-6 hover:border-memorial-accent-blue transition-colors group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-memorial-gray-50 group-hover:text-memorial-accent-blue">
                    Idaho Press Coverage
                  </h4>
                  <svg className="w-5 h-5 text-memorial-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-memorial-gray-400 text-sm">
                  Boise Weekly's coverage of the 2010 Idaho Triennial exhibition
                </p>
              </a>
            </div>

            {/* Artist Statement */}
            <div className="mt-8 bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
              <h4 className="text-lg font-semibold mb-4 text-memorial-gray-50">
                Artist Statement
              </h4>
              <div className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden border border-memorial-gray-700">
                <Image
                  src="/images/bocolab/bam-artist-statement.png"
                  alt="Boise Art Museum artist statement for Objects with Empathy"
                  fill
                  className="object-contain bg-memorial-gray-900"
                />
              </div>
              <p className="text-sm text-memorial-gray-500 mt-4 text-center italic">
                Original artist statement from the Boise Art Museum exhibition
              </p>
            </div>
          </div>
        </section>

        {/* Art Philosophy Section */}
        <section className="bg-gradient-to-r from-memorial-gray-900 to-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200">
            Technology as Art
          </h2>
          <div className="text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Throughout his career, John blurred the boundaries between technology, product design,
              and art. Whether creating educational toys, robotic companions, or interactive
              installations, his work always demonstrated a deep understanding of how form, function,
              and emotional resonance come together to create meaningful experiences.
            </p>
            <p>
              <em>Objects with Empathy</em> represented the culmination of these interests—a pure
              artistic expression of ideas that had driven his commercial work for decades. It proved
              that the same principles that made toys delightful and robots endearing could elevate
              everyday objects into art that provoked thought and stirred emotion.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
