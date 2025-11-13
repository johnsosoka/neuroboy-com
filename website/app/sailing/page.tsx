export default function SailingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Sailing
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        Beyond his groundbreaking work in technology and robotics, John was an accomplished sailor
        who found something essential on the water—a place where strategy met instinct, where careful
        planning danced with spontaneous adaptation, and where the complexities of modern life gave way
        to the elemental simplicity of wind, water, and sail. From learning the ropes with his uncle
        on <em>Gracie</em> to racing high-performance dinghies and competing in the Long Beach racing
        circuit, sailing wasn't just a hobby—it was a lifelong passion that shaped how he saw the world.
      </p>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-xl border-2 border-memorial-gray-800 shadow-2xl">
          <img
            src="/images/personal/sailing-scenic-moment.jpg"
            alt="John sailing on the water"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-sm text-memorial-gray-400 mt-4 italic">
          A moment of tranquility on the water
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Early Years */}
        <section className="border-l-4 border-memorial-accent-blue pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Early Years: Learning on the Ocean with Uncle John
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              John's love for sailing began early in life, learning to sail on the ocean with his
              uncle, <strong>John Howell</strong>. Uncle John was more than just a teacher—he was a
              mentor who opened up a world of adventure on the water. Together, they sailed aboard
              a boat called <em>Gracie</em>, where young John learned not just the technical skills
              of seamanship, but also the values of patience, respect for nature, and the importance
              of careful planning that would serve him throughout his life.
            </p>

            <div className="my-6">
              <div className="overflow-hidden rounded-lg border-2 border-memorial-gray-700">
                <img
                  src="/images/sailing/gracie.jpg"
                  alt="Painting of Gracie, Uncle John Howell's wooden yawl"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-sm text-memorial-gray-400 mt-2 text-center italic">
                <strong>GRACIE</strong> — A wooden yawl built in 1955 by Hinckley Co. in Southwest Harbor, Maine.<br />
                36' OAL × 9' Beam × 5' Draft. Owned, operated & skippered by John Howell.
              </p>
            </div>

            <p>
              Those early days on <em>Gracie</em> with Uncle John instilled a deep appreciation for
              the ocean and the art of sailing. The lessons learned went beyond handling lines and
              reading the wind—they were about understanding the rhythm of the sea, respecting its
              power, and finding joy in the challenge of working with natural forces.
            </p>

            <p>
              Sailing was a family tradition that ran deep. John's mother grew up on a lake in
              Pennsylvania, where she too learned to sail. This maritime heritage connected
              generations of the family through shared experiences on the water, creating bonds
              that transcended the everyday and connected them to something larger. From Pennsylvania
              lakes to ocean sailing with Uncle John, the water was where the Sosoka family found
              both adventure and connection.
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
              During his years in Long Beach, California, John became a dedicated presence in the
              Long Beach Yacht Club's legendary "Wet Wednesday" racing series. Week after week, he'd
              leave the dock as the afternoon sun began its descent, joining a fleet of competitive
              sailors for evening races that became a rhythm in his life. What started as sport evolved
              into something richer—a community of sailors who shared the same drive for excellence,
              the same love of the challenge, and the same appreciation for those perfect moments when
              wind, tactics, and crew work came together in seamless harmony.
            </p>
            <p>
              The competitive racing environment brought out the same qualities that made John
              successful in technology: meticulous attention to detail, strategic thinking several
              moves ahead, lightning-quick adaptation to shifting conditions, and the drive to optimize
              performance under pressure. But where his technology work dealt with circuits and code,
              racing demanded reading the wind, anticipating competitors' moves, and making split-second
              decisions with real consequences. On the water, as in his career, John approached every
              challenge with intelligence, thorough preparation, and a collaborative spirit that made
              him both a formidable competitor and a valued crew member.
            </p>

            {/* Catalina 30 Race Schedule - 2002 Season */}
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold text-memorial-gray-200 mb-4">
                Cuckoo's Nest: 2002 Racing Season
              </h3>
              <p className="text-memorial-gray-400 mb-4 text-sm">
                John sailed his family's Catalina 30, the <em>Cuckoo's Nest</em>, in competitive racing
                throughout the 2002 season at Long Beach Yacht Club and beyond.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-memorial-gray-700">
                      <th className="text-left py-2 px-3 text-memorial-gray-300 font-semibold">Date</th>
                      <th className="text-left py-2 px-3 text-memorial-gray-300 font-semibold">Race</th>
                      <th className="text-left py-2 px-3 text-memorial-gray-300 font-semibold">Club</th>
                      <th className="text-left py-2 px-3 text-memorial-gray-300 font-semibold">Result</th>
                    </tr>
                  </thead>
                  <tbody className="text-memorial-gray-400">
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">8/7/02</td>
                      <td className="py-2 px-3">Wet Wednesday Series 3 - Race 1</td>
                      <td className="py-2 px-3">LBYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">8/14/02</td>
                      <td className="py-2 px-3">Wet Wednesday Series 3 - Race 2</td>
                      <td className="py-2 px-3">LBYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">8/17/02</td>
                      <td className="py-2 px-3">Catalina 30 Nationals (2 races)</td>
                      <td className="py-2 px-3">LSF</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="bg-memorial-accent-purple/10 border-b border-memorial-accent-purple/30">
                      <td className="py-2 px-3 font-medium text-memorial-gray-200">8/18/02</td>
                      <td className="py-2 px-3 font-medium text-memorial-gray-200">Catalina 30 Nationals (1 race)</td>
                      <td className="py-2 px-3 font-medium text-memorial-gray-200">LSF</td>
                      <td className="py-2 px-3 font-semibold text-memorial-accent-purple">4th of 6</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">8/21/02</td>
                      <td className="py-2 px-3">Wet Wednesday Series 3 - Race 3</td>
                      <td className="py-2 px-3">LBYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">8/28/02</td>
                      <td className="py-2 px-3">Wet Wednesday Series 3 - Race 4</td>
                      <td className="py-2 px-3">LBYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">9/4/02</td>
                      <td className="py-2 px-3">Wet Wednesday Series 3 - Race 5</td>
                      <td className="py-2 px-3">LBYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">9/14/02</td>
                      <td className="py-2 px-3">LSF Fall Club Race - Interclub #7</td>
                      <td className="py-2 px-3">LSF</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">9/21/02</td>
                      <td className="py-2 px-3">Night Point Fermin Race</td>
                      <td className="py-2 px-3">SLBYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">10/19/02</td>
                      <td className="py-2 px-3">Columbus Day Race - Interclub #8</td>
                      <td className="py-2 px-3">SLBYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                    <tr className="border-b border-memorial-gray-800">
                      <td className="py-2 px-3">11/9/02</td>
                      <td className="py-2 px-3">Turkey Trot Race - Interclub #9</td>
                      <td className="py-2 px-3">SYC</td>
                      <td className="py-2 px-3">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-start gap-2">
                <div className="aspect-[4/3] w-48 overflow-hidden rounded-lg border border-memorial-gray-700 flex-shrink-0">
                  <img
                    src="/images/sailing/w_cuckoo_finish.jpg"
                    alt="Cuckoo's Nest finishing a race"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 italic flex-1">
                  The <em>Cuckoo's Nest</em> finishing an early race, a moment captured during
                  the 2002 season when John and his family competed regularly in the Southern
                  California racing circuit.
                </p>
              </div>

              <p className="text-xs text-memorial-gray-500 mt-4">
                Club Abbreviations: LBYC (Long Beach Yacht Club), LSF (Lido Sailing Foundation),
                SLBYC (Seal Beach Yacht Club), SYC (South Coast Corinthian Yacht Club)
              </p>
            </div>
          </div>
        </section>

        {/* 505 Class Racing */}
        <section className="border-l-4 border-memorial-accent-blue pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            The 505: Racing on the Edge
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Among the various boats John sailed over the years, the <strong>505 class</strong> held
              a special place in his heart. The 505 is a high-performance racing dinghy known for being
              incredibly racey and maneuverable—a demanding boat that rewards skill, quick reflexes, and
              an intimate understanding of wind and water. It's the kind of boat that doesn't forgive
              mistakes but offers an unmatched thrill when sailed well.
            </p>
            <p>
              John loved the 505 for exactly these qualities. Where larger boats might be more forgiving,
              the 505 demanded constant attention and delivered immediate feedback. Every adjustment to the
              sails, every shift in weight, every tactical decision played out instantly on the water. It was
              sailing at its most pure and exhilarating—a direct conversation between sailor, boat, and the
              elements.
            </p>
            <p>
              In a testament to both his skill and adventurous spirit, John once sailed a 505 from
              <strong> Belmont Shore to Catalina Island and back</strong>—a significant ocean passage that's
              unusual for a boat of that size. The 505, at just 16.5 feet long, is primarily designed for
              inland and protected waters racing, not open ocean voyages. Making that crossing demonstrated
              not just technical proficiency, but also careful planning, weather sense, and the kind of
              calculated risk-taking that defined John's approach to challenges both on the water and in life.
            </p>
            <p>
              This journey to Catalina spoke to something essential about John's character: he didn't just
              participate in sailing—he pushed boundaries, tested limits, and found new ways to experience
              the sport he loved. The 505 wasn't just a boat; it was a platform for exploration, competition,
              and the pure joy of mastering a demanding craft.
            </p>
          </div>
        </section>

        {/* Idaho Sailing */}
        <section className="border-l-4 border-memorial-accent-gold pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-gold">
            Eagle, Idaho: A New Chapter
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              When John relocated to Eagle, Idaho, he didn't leave sailing behind—he transformed it.
              Trading ocean swells and salt air for the alpine freshness of Idaho's mountain lakes,
              he adapted to an entirely different sailing landscape. The boats were smaller, the conditions
              more variable, the seasons more defined. Where California offered year-round sailing in
              familiar Pacific winds, Idaho presented new puzzles: gusty mountain thermals, afternoon
              thunderstorms rolling off the peaks, and a shorter but intensely beautiful sailing season.
            </p>
            <p>
              True to form, John didn't just sail for pleasure in Idaho—he raced. The competitive spirit
              that drove him on California's ocean courses found new expression on freshwater lakes,
              where different winds, different boats, and different tactics created an entirely new set
              of challenges to master. His decades of ocean racing experience gave him an edge, but the
              humility of a true sailor meant he approached these new conditions as a student, learning
              the quirks of mountain lake sailing while sharing his wealth of knowledge with the local
              sailing community.
            </p>
            <p>
              Sailing in Idaho was more than adaptation—it was connection. Each time John rigged his
              boat and pushed off from the dock, he was reaching back to those early days with Uncle John
              on <em>Gracie</em>, back to the California racing circuit, back to every lesson learned and
              every challenge met on the water. The boats changed, the waters changed, the years passed,
              but sailing remained his constant—a thread woven through every chapter of his life, connecting
              past to present, family to passion, challenge to joy.
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

            {/* Long Beach Era */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-memorial-accent-blue mb-4">
                Long Beach, California
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                    <img
                      src="/images/personal/sailing-san-francisco-bay.jpeg"
                      alt="John on a boat in San Francisco Bay"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                    John on San Francisco Bay
                  </p>
                </div>

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
              </div>
            </div>

            {/* Idaho Era */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-memorial-accent-gold mb-4">
                Eagle, Idaho
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                    <img
                      src="/images/personal/sailing-macgregor-25.jpg"
                      alt="John with his MacGregor 25 sailboat"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                    John with his MacGregor 25 in Idaho
                  </p>
                </div>

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
              </div>
            </div>

            {/* Social & Community */}
            <div>
              <h3 className="text-xl font-semibold text-memorial-accent-purple mb-4">
                With Friends & Family
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Sailing offered John something fundamentally different from his work in technology and
              robotics. In the lab or at the workbench, success came from understanding systems,
              controlling variables, and engineering solutions. On the water, it was almost the inverse:
              success came from reading forces you couldn't control, adapting to conditions that changed
              by the minute, and working in harmony with natural forces rather than trying to dominate
              them. You couldn't debug the wind or reprogram the tide—you could only learn to dance
              with them.
            </p>
            <p>
              The skills that made John exceptional in both worlds were remarkably similar—strategic
              thinking, rapid adaptation, meticulous attention to detail, deep respect for complex
              systems. But sailing added dimensions that circuits and code couldn't provide: the
              physical immediacy of trimming sails in building winds, the social bond of crew working
              in perfect sync, the almost meditative state that came during long passages when time
              dissolved and nothing existed but the rhythm of waves, the feel of the tiller, and the
              infinite variations of wind and water.
            </p>
            <p>
              From those first lessons with Uncle John Howell on <em>Gracie</em> to his final races
              on Idaho's alpine lakes, sailing was the golden thread woven through every chapter of
              John's life. It was where competition met contemplation, where challenge yielded to
              peace, where family tradition merged with personal passion. The boats changed, the
              waters changed, the decades passed—but on the water, John was always fully himself:
              strategic and spontaneous, ambitious and humble, forever learning, forever connected
              to something larger than any single race or single lifetime.
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

        {/* Cross-link to Hiking & Outdoors */}
        <section className="bg-gradient-to-r from-memorial-accent-blue/10 to-memorial-accent-purple/10 border border-memorial-accent-blue/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200 text-center">
            More of John's Passions
          </h2>
          <div className="text-memorial-gray-300 leading-relaxed">
            <p className="text-center max-w-2xl mx-auto mb-4">
              John's love for sailing was part of a broader connection to the natural world. He found
              similar joy and challenge in hiking Idaho's mountains, backpacking through wilderness,
              and snowshoeing to remote yurts—always moving, always exploring.
            </p>
            <div className="text-center">
              <a
                href="/hiking-outdoors"
                className="inline-flex items-center text-memorial-accent-blue hover:text-memorial-accent-purple transition-colors"
              >
                <span className="text-lg font-medium">Explore John's Hiking & Outdoor Adventures</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
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
