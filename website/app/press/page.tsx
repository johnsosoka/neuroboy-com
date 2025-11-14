import { ExternalLink } from 'lucide-react'

export default function PressPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Press & Awards
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        Recognition and Media Coverage Across Three Decades of Innovation
      </p>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Introduction */}
        <section>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Throughout his career, John's work garnered recognition from prestigious industry organizations,
              major media outlets, and technical communities. From <strong>TIME Magazine</strong> features to
               <strong> Oppenheim Toy Portfolio Platinum Awards</strong>, his innovations consistently captured
              the attention of both consumers and industry experts.
            </p>
            <p>
              His contributions spanned educational software, award-winning toys, and groundbreaking robotics,
              with coverage in publications including the <strong>Wall Street Journal</strong>, <strong>Wired Magazine</strong>,
              <strong>Forbes</strong>, and appearances on <strong>NBC's TODAY Show</strong> and <strong>ABC's Nightline</strong>.
            </p>
          </div>
        </section>

        {/* Recognition Highlights */}
        <section className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-memorial-accent-blue">
            Recognition Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">2×</div>
              <div className="text-memorial-gray-400">TIME Magazine Features</div>
              <div className="text-xs text-memorial-gray-500 mt-1">(2002 Musini, 2006 Pleo)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">5+</div>
              <div className="text-memorial-gray-400">Patents Granted</div>
              <div className="text-xs text-memorial-gray-500 mt-1">(Robotics & Educational Tech)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">15+</div>
              <div className="text-memorial-gray-400">Major Industry Awards</div>
              <div className="text-xs text-memorial-gray-500 mt-1">(Oppenheim, Parents Mag, etc.)</div>
            </div>
          </div>
        </section>

          {/* Ugobe/Pleo */}
          <section>
              <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
                  Ugobe / Pleo (2006-2009)
              </h2>

              <div className="text-memorial-gray-300 leading-relaxed mb-6">
                  <p>
                      John's work as Co-founder and CTO at Ugobe garnered international attention for creating Pleo,
                      one of the most sophisticated consumer robots of its era. The robotic baby dinosaur received
                      widespread acclaim from major media outlets and industry organizations.
                  </p>
              </div>

              {/* Major Awards */}
              <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-memorial-gray-50">Major Awards</h3>

                  {/* TIME Best Inventions - Featured */}
                  <div className="bg-gradient-to-r from-memorial-gray-900 to-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-8 rounded-r-lg mb-6">
                      <div className="flex items-start gap-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                              <span className="text-3xl">🏅</span>
                          </div>
                          <div>
                              <h4 className="text-2xl font-bold text-memorial-gray-50 mb-2">
                                  TIME Magazine - Best Inventions of 2006
                              </h4>
                              <p className="text-xl text-memorial-gray-200 italic mb-3">
                                  "The Doting Dinosaur"
                              </p>
                              <p className="text-memorial-gray-300 mb-3">
                                  Pleo was recognized as one of the best inventions of the year, bringing international attention
                                  to the project and establishing it as a milestone in consumer robotics.
                              </p>
                              <a
                                  href="https://content.time.com/time/specials/packages/article/0,28804,1939342_1939430_1939711,00.html"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-memorial-accent-blue hover:underline flex items-center gap-2"
                              >
                                  View TIME Magazine feature <ExternalLink className="w-3 h-3" />
                              </a>
                          </div>
                      </div>
                  </div>

                  <div className="space-y-4">
                      <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                                  <span className="text-2xl">🔬</span>
                              </div>
                              <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                                      Popular Science - Coolest Inventions of 2007
                                  </h4>
                                  <p className="text-memorial-gray-400 text-sm">
                                      Recognized for groundbreaking robotics technology and lifelike autonomous behavior
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                                  <span className="text-2xl">🎯</span>
                              </div>
                              <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                                      DEMO 2006 Conference Awards
                                  </h4>
                                  <p className="text-memorial-gray-400 text-sm">
                                      Won INNY and DEMOgod Awards when unveiled; over 500 attendees lined up after presentation
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                                  <span className="text-2xl">🌟</span>
                              </div>
                              <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                                      Idaho Innovation Award (2006)
                                  </h4>
                                  <p className="text-memorial-gray-400 text-sm">
                                      Inaugural award winner in the Mechanical Category
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Patents */}
              <div className="mb-8 bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-memorial-gray-50">Patents & Intellectual Property</h3>
                  <p className="text-memorial-gray-300 mb-4">
                      The bankruptcy filing listed <strong>16 patents, 60 invention disclosures</strong> for potential
                      future patents, and numerous trademarks. Key patents included:
                  </p>
                  <div className="space-y-3">
                      <div className="bg-memorial-gray-800/50 border-l-4 border-memorial-accent-blue p-4 rounded-r-lg">
                          <h4 className="font-semibold text-memorial-gray-50 mb-1">
                              US20080058988A1 - "Robots with Autonomous Behavior"
                          </h4>
                          <p className="text-memorial-gray-400 text-sm">
                              Granted March 6, 2008. Co-invented by John R. Sosoka and Caleb Chung. Covered methods for
                              operating robots in response to environmental changes by determining dominant drive states,
                              selecting appropriate behavior strategies, and executing robotic motions.
                          </p>
                      </div>
                      <div className="bg-memorial-gray-800/50 border-l-4 border-memorial-accent-blue p-4 rounded-r-lg">
                          <h4 className="font-semibold text-memorial-gray-50 mb-1">
                              USD614251S - "Robotic Eye" (Design Patent)
                          </h4>
                          <p className="text-memorial-gray-400 text-sm">
                              Granted April 20, 2010. Inventor: Caleb Chung
                          </p>
                      </div>
                  </div>
              </div>

              {/* Press Coverage */}
              <div>
                  <h3 className="text-2xl font-semibold mb-4 text-memorial-gray-50">Press Coverage</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-memorial-gray-50 mb-2">Print Media</h4>
                          <ul className="space-y-2 text-memorial-gray-300 text-sm">
                              <li className="flex items-start gap-2">
                                  <span className="text-memorial-accent-blue mt-1">•</span>
                                  <span><strong>Wall Street Journal</strong> - Multiple features on the company and product</span>
                              </li>
                              <li className="flex items-start gap-2">
                                  <span className="text-memorial-accent-blue mt-1">•</span>
                                  <span><strong>Wired Magazine</strong> - Cover stories and detailed technical reviews</span>
                              </li>
                              <li className="flex items-start gap-2">
                                  <span className="text-memorial-accent-blue mt-1">•</span>
                                  <span><strong>Forbes Magazine</strong> - Named Caleb Chung one of nation's top 10 innovators</span>
                              </li>
                              <li className="flex items-start gap-2">
                                  <span className="text-memorial-accent-blue mt-1">•</span>
                                  <span><strong>Bloomberg/BusinessWeek</strong> - News coverage and analysis</span>
                              </li>
                          </ul>
                      </div>

                      <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-memorial-gray-50 mb-2">Television</h4>
                          <ul className="space-y-2 text-memorial-gray-300 text-sm">
                              <li className="flex items-start gap-2">
                                  <span className="text-memorial-accent-blue mt-1">•</span>
                                  <span><strong>NBC's Nightline</strong> - Featured segment</span>
                              </li>
                              <li className="flex items-start gap-2">
                                  <span className="text-memorial-accent-blue mt-1">•</span>
                                  <span><strong>ABC's The Today Show</strong> - Product demonstration</span>
                              </li>
                              <li className="flex items-start gap-2">
                                  <span className="text-memorial-accent-blue mt-1">•</span>
                                  <span>Various tech review programs and robotics documentaries</span>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="mt-6 bg-memorial-gray-800/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                      <p className="text-memorial-gray-300 mb-3">
                          <strong>Impact:</strong> Pleo represented a significant milestone in consumer robotics, bridging the gap
                          between simple robotic toys (like Furby) and advanced robotics platforms (like Sony's AIBO). It demonstrated
                          that lifelike movement and emotional engagement were achievable in consumer products.
                      </p>
                      <p className="text-memorial-gray-400 text-sm">
                          Despite Ugobe's eventual bankruptcy, Pleo achieved lasting recognition in the robotics community and is
                          studied by researchers exploring human-robot interaction.
                      </p>
                  </div>
              </div>
          </section>

        {/* Neurosmith */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Neurosmith (1997-2003)
          </h2>

          <div className="text-memorial-gray-300 leading-relaxed mb-6">
            <p>
              As Co-founder and CTO of Neurosmith, John led the technical development of award-winning
              educational toys that combined child development research with sophisticated electronics.
              The company received nearly every major toy industry award during its peak years.
            </p>
          </div>

          {/* Awards */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-memorial-gray-50">Awards & Recognition</h3>
            <div className="space-y-4">
              <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                      Oppenheim Toy Portfolio Platinum Award
                    </h4>
                    <p className="text-memorial-gray-400 text-sm mb-2">
                      <strong>Music Blocks Maestro</strong> - The highest recognition for innovative and engaging products
                    </p>
                    <div className="text-xs text-memorial-gray-500">
                      The Oppenheim Platinum Award is the gold standard in the toy industry, recognizing exceptional quality and innovation.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                      Oppenheim Toy Portfolio Blue Chip Classic Award
                    </h4>
                    <p className="text-memorial-gray-400 text-sm">
                      <strong>Music Blocks</strong> - Recognizing outstanding products that remain relevant over time
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                      Parents Magazine "Best Toys of the Year" (1999)
                    </h4>
                    <p className="text-memorial-gray-400 text-sm">
                      <strong>Music Blocks</strong> - Featured on NBC's TODAY Show through Oppenheim Toy Portfolio coverage
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎖️</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                      Musini: Platinum Best Toy Award
                    </h4>
                    <p className="text-memorial-gray-400 text-sm">
                      Revolutionary motion sensor technology toy
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-memorial-accent-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-memorial-gray-50 mb-1">
                      Most Innovative Toy of the Year (TOTY Award)
                    </h4>
                    <p className="text-memorial-gray-400 text-sm">
                      Multiple Neurosmith products also won Creative Child Foundation and Dr. Toy awards (2006)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neurosmith Press Coverage */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-memorial-gray-50">Neurosmith Press Coverage</h3>
            <div className="space-y-3">
              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 mt-1 flex-shrink-0 text-memorial-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-memorial-gray-50 mb-1">TIME Magazine (February 2002)</h4>
                    <p className="text-memorial-gray-300 text-sm mb-2">
                      Featured Musini as <strong>"the most innovative musical toy"</strong> at the Toy Fair
                    </p>
                    <a
                      href="https://time.com/archive/6665809/toys-that-twist-and-shout/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-memorial-accent-blue hover:underline"
                    >
                      Read article →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 mt-1 flex-shrink-0 text-memorial-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-memorial-gray-50 mb-1">Los Angeles Times (Multiple Features)</h4>
                    <p className="text-memorial-gray-300 text-sm">
                      Profiled company and founders in 2000, 2002, and 2004, covering both successes and challenges
                      in bringing educational principles to the toy market
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 mt-1 flex-shrink-0 text-memorial-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-memorial-gray-50 mb-1">Los Angeles Business Journal (2000)</h4>
                    <p className="text-memorial-gray-300 text-sm">
                      Featured the founders' entrepreneurial journey from Davidson & Associates executives to toy innovators
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 mt-1 flex-shrink-0 text-memorial-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-memorial-gray-50 mb-1">Television Coverage</h4>
                    <p className="text-memorial-gray-300 text-sm">
                      <strong>NBC's TODAY Show</strong> - Products featured through Oppenheim Toy Portfolio coverage
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 mt-1 flex-shrink-0 text-memorial-accent-blue" />
                  <div>
                    <h4 className="font-semibold text-memorial-gray-50 mb-1">Wired Magazine (2000)</h4>
                    <p className="text-memorial-gray-300 text-sm">
                      Included in feature on tech-teaching toys and the integration of neuroscience research into toy design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-memorial-gray-800/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
            <p className="text-memorial-gray-300 italic">
              "The publicity from these awards provided crucial visibility for the company, which was too small
              to afford major advertising campaigns."
            </p>
            <p className="text-memorial-gray-500 text-sm mt-2">
              — Los Angeles Business Journal, on Neurosmith's award strategy
            </p>
          </div>
        </section>

      {/* Davidson & Associates / Early Career */}
      <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
              Davidson & Associates / Early Career (1990s)
          </h2>

          <div className="space-y-6">
              {/* Warcraft Credit */}
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-memorial-gray-50 mb-3">
                      Warcraft: Orcs & Humans (1994)
                  </h3>
                  <p className="text-memorial-gray-300 mb-3">
                      Received "Special Thanks" credit in Blizzard Entertainment's seminal real-time strategy game
                      as Chief Technology Officer at Davidson & Associates, which had acquired Blizzard earlier that year.
                  </p>
                  <div className="text-sm text-memorial-gray-400">
                      <strong>Context:</strong> CTO position during Davidson's peak; responsible for technical
                      direction during the period when Davidson acquired Blizzard Entertainment for $6.75 million.
                  </div>
              </div>

              {/* Intel Award */}
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-memorial-gray-50 mb-3">
                      Intel Recognition
                  </h3>
                  <p className="text-memorial-gray-300">
                      Received award from Intel Corporation for contributions to developing the <strong>MMX instruction set</strong>,
                      which significantly boosted PC graphics performance in the late 1990s.
                  </p>
              </div>
          </div>
      </section>

        {/* Academic & Speaking Engagements */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Academic Recognition & Speaking Engagements
          </h2>

          <div className="space-y-4">
            <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-3">
                Stanford University Lecture (June 2009)
              </h3>
              <p className="text-memorial-gray-300 mb-3">
                <strong>"The Rise and Fall of a Companion Robot"</strong>
              </p>
              <p className="text-memorial-gray-400 text-sm mb-3">
                Following Ugobe's closure, John delivered a candid lecture at Stanford's EE380 Computer Systems
                Colloquium, offering valuable insights into both the technical innovations and business challenges
                of creating consumer robotics. The lecture has been cited in robotics education contexts and
                provides a rare insider perspective on hardware startup challenges.
              </p>
              <a
                href="https://web.stanford.edu/class/ee380/Abstracts/090527.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-memorial-accent-blue hover:underline flex items-center gap-2"
              >
                View lecture details <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-3">
                PARC Forum Presentation
              </h3>
              <p className="text-memorial-gray-400 text-sm">
                <strong>"The Evolution of the Pleo Puzzle"</strong> - Technical deep dive explaining the
                unconventional approach Ugobe took to develop such a sophisticated product, from sensor
                integration to the Life OS platform.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Overview */}
        <section className="bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Career Recognition Timeline
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">1994</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4 pb-4">
                <p className="text-memorial-gray-300">Warcraft: Orcs & Humans credit (Davidson & Associates CTO)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">Late 1990s</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4 pb-4">
                <p className="text-memorial-gray-300">Intel award for MMX instruction set development</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">1999</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4 pb-4">
                <p className="text-memorial-gray-300">Oppenheim Platinum & Blue Chip Awards, Parents Magazine recognition (Neurosmith)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">2002</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4 pb-4">
                <p className="text-memorial-gray-300">TIME Magazine features Musini as "most innovative musical toy"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">2006</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4 pb-4">
                <p className="text-memorial-gray-300">TIME Magazine "Best Inventions of 2006" - Pleo recognized as "The Doting Dinosaur"</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">2007</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4 pb-4">
                <p className="text-memorial-gray-300">Popular Science "Coolest Inventions" recognition</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">2008</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4 pb-4">
                <p className="text-memorial-gray-300">Patent granted for "Robots with Autonomous Behavior" (co-inventor with Caleb Chung)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-memorial-accent-blue font-bold">2009</span>
              </div>
              <div className="flex-1 border-l-2 border-memorial-gray-700 pl-4">
                <p className="text-memorial-gray-300">Stanford University lecture on robotics innovation and entrepreneurship</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sources & References */}
        <section className="border-t border-memorial-gray-800 pt-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Sources & References
          </h2>
          <p className="text-memorial-gray-300 mb-6">
            Key sources documenting John's career recognition and media coverage:
          </p>
          <div className="grid grid-cols-1 gap-3">
            <a
              href="https://time.com/archive/6665809/toys-that-twist-and-shout/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  TIME Magazine (February 2002)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Toys That Twist and Shout" - Features Musini as the most innovative musical toy
                </div>
              </div>
            </a>

            <a
              href="https://content.time.com/time/specials/packages/article/0,28804,1939342_1939430_1939711,00.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  TIME Magazine (2006)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Best Inventions of 2006: The Doting Dinosaur" - Pleo recognition
                </div>
              </div>
            </a>

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
                <div className="text-memorial-gray-500 text-sm">
                  "Toys Learning to Have Fun" - Neurosmith founders' entrepreneurial journey
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
                  Los Angeles Times (March 15, 2000)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  Profile of Neurosmith and its award-winning educational toy development
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
                <div className="text-memorial-gray-500 text-sm">
                  Documentation of Music Blocks Platinum and Blue Chip Classic Awards
                </div>
              </div>
            </a>

            <a
              href="https://www.wired.com/2009/02/ugobe-dinosaurs/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Wired Magazine (February 2009)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Ugobe Dinosaurs Go Extinct" - Comprehensive coverage of Ugobe's history and impact
                </div>
              </div>
            </a>

            <a
              href="https://www.wired.com/2007/01/alive/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Wired Magazine (January 2007)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "It's Alive!" - Feature on Pleo's development and lifelike movement systems
                </div>
              </div>
            </a>

            <a
              href="https://web.stanford.edu/class/ee380/Abstracts/090527.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Stanford University EE380 (May 27, 2009)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Rise and Fall of a Companion Robot" - John Sosoka's lecture on Ugobe and Pleo
                </div>
              </div>
            </a>

            <a
              href="https://patents.google.com/patent/US20080058988A1/en"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  US Patent US20080058988A1
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Robots with Autonomous Behavior" - Core patent co-invented by John Sosoka and Caleb Chung
                </div>
              </div>
            </a>

            <a
              href="https://idahobusinessreview.com/2009/04/21/ugobe-inc-files-for-chapter-7-bankruptcy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Idaho Business Review (April 21, 2009)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  Details on Ugobe's intellectual property portfolio and patent holdings
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
