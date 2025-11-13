export default function SailingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Sailing
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        Beyond his work in technology and robotics, John was an avid sailor who found peace,
        challenge, and joy on the water. From ocean sailing with his uncle to competitive racing
        at Long Beach Yacht Club, sailing was a lifelong passion.
      </p>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Early Years */}
        <section className="border-l-4 border-memorial-accent-blue pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Early Years: Learning on the Ocean
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              John's love for sailing began early in life, learning to sail on the ocean with his
              uncle, also named John. These formative experiences on the water taught him not just
              the technical skills of seamanship, but also the values of patience, respect for
              nature, and the importance of careful planning that would serve him throughout his life.
            </p>
            <p>
              Sailing was a family tradition. John's mother grew up on a lake in Pennsylvania,
              where she too learned to sail. This maritime heritage connected generations of the
              family through shared experiences on the water, creating bonds that transcended the
              everyday and connected them to something larger.
            </p>
          </div>
        </section>

        {/* Long Beach Yacht Club */}
        <section className="border-l-4 border-memorial-accent-purple pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-purple">
            Long Beach Yacht Club: Wet Wednesday Racing
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              During his years in Long Beach, California, John became a regular competitor in the
              Long Beach Yacht Club's "Wet Wednesday" racing series. Every Wednesday, he would take
              to the water to compete against fellow sailors in what became not just a sporting
              event, but a community of like-minded enthusiasts.
            </p>
            <p>
              The competitive racing environment appealed to the same qualities that made John
              successful in technology: attention to detail, strategic thinking, quick adaptation
              to changing conditions, and the ability to optimize performance under pressure. On the
              water, as in his work, John approached challenges with intelligence, preparation, and
              a collaborative spirit.
            </p>

            {/* Race Stats Placeholder */}
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-memorial-gray-200 mb-4">
                Race Statistics
              </h3>
              <p className="text-memorial-gray-400 mb-4 text-sm">
                Detailed race results and statistics from Long Beach Yacht Club competitions
                will be added here.
              </p>
              <div className="bg-memorial-gray-800/50 rounded p-4 text-center text-memorial-gray-500 text-sm">
                Race statistics coming soon
              </div>
            </div>
          </div>
        </section>

        {/* Idaho Sailing */}
        <section className="border-l-4 border-memorial-accent-gold pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-gold">
            Eagle, Idaho: A New Chapter
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              After relocating to Eagle, Idaho, John adapted his sailing passion to new waters and
              a new vessel. He transitioned to sailing a much smaller boat, embracing the different
              challenges and pleasures that came with fresh-water sailing in Idaho's lakes.
            </p>
            <p>
              True to his competitive spirit, John continued to participate in races even in this
              new environment. The smaller boat and different conditions required new skills and
              approaches, but his fundamental love for sailing—the wind, the water, the challenge,
              and the community—remained constant.
            </p>
            <p>
              Sailing in Idaho represented more than just continuing a hobby in a new place. It was
              a connection to his past, to family tradition, and to the experiences that had shaped
              him since youth. Even as his life and location changed, the water remained a place
              where John could find both challenge and peace.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Sailing Photos
          </h2>
          <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-8">
            <p className="text-memorial-gray-300 mb-6 leading-relaxed">
              A collection of photographs from John's sailing adventures—capturing moments
              on the water that reflect his lifelong passion for the sport.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sailing with Dave */}
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/sailing-john-captain-with-dave.jpg"
                    alt="John at the helm with Dave"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  John at the helm with Dave
                </p>
              </div>

              {/* Sailing the Dinghy */}
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/sailing-john-ding.jpg"
                    alt="John sailing his dinghy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  John sailing his dinghy in Idaho
                </p>
              </div>

              {/* Windsurfing with Friends */}
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/john-friends-windsurfing.jpeg"
                    alt="John and friends windsurfing"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  John and friends windsurfing
                </p>
              </div>
            </div>
            <p className="text-sm text-memorial-gray-500 mt-6 text-center italic">
              More photos from John's sailing adventures will be added as they are collected from family and friends
            </p>
          </div>
        </section>

        {/* Sailing Philosophy */}
        <section className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200">
            What Sailing Meant to John
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Sailing offered John something different from his work in technology and robotics.
              On the water, success came from reading the wind, understanding the currents,
              responding to immediate conditions, and working in harmony with natural forces
              rather than trying to control them.
            </p>
            <p>
              The skills required for sailing—strategic thinking, quick adaptation, attention to
              detail, respect for complexity—were the same skills that made John successful in his
              professional life. But sailing provided something more: a direct, physical connection
              to nature, a community of fellow enthusiasts, and moments of pure presence when
              nothing existed but the wind, the water, and the boat.
            </p>
            <p>
              From his early days learning from his uncle to his final races in Idaho, sailing
              remained a constant thread through John's life—a place where he could be simultaneously
              competitive and contemplative, challenged and at peace, connected to both family
              tradition and personal passion.
            </p>
          </div>
        </section>

        {/* Family Connection */}
        <section className="bg-gradient-to-r from-memorial-gray-900 to-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200 text-center">
            A Family Heritage
          </h2>
          <div className="text-memorial-gray-300 leading-relaxed space-y-4">
            <p className="text-center max-w-2xl mx-auto">
              Sailing connected John to his family's past and to the values they shared. From his
              mother's childhood on Pennsylvania lakes to learning the ropes from his uncle John,
              to his own decades of racing and cruising, sailing was more than a sport—it was a
              way of life that linked generations through shared experiences on the water.
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Sailing Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://lbyc.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6 hover:border-memorial-accent-blue transition-colors"
            >
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                Long Beach Yacht Club
              </h3>
              <p className="text-sm text-memorial-gray-400 mb-3">
                Home of the Wet Wednesday racing series where John competed regularly during his
                California years.
              </p>
              <div className="flex items-center text-memorial-accent-blue text-sm">
                <span>Visit website</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                Race Results Archive
              </h3>
              <p className="text-sm text-memorial-gray-400 mb-3">
                Historical race results and statistics from John's competitive sailing career will
                be compiled and featured here.
              </p>
              <div className="text-memorial-gray-500 text-sm italic">
                Coming soon
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
