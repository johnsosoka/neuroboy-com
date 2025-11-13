import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

export default function UgobePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Ugobe
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        Co-Founder, Chief Technology Officer & Head of Research & Development
      </p>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Introduction */}
        <section>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Following his success at Neurosmith, John joined forces with inventor <strong>Caleb Chung</strong> (co-creator of Furby, which sold over 50 million units worldwide)
              and <strong>Bob Christopher</strong> to co-found Ugobe in 2001. As Co-founder, Chief Technology Officer, and head of Research & Development, John led the technical
              development of Pleo, an autonomous robotic baby Camarasaurus dinosaur that would become one of the
              most sophisticated consumer robots of its era.
            </p>
            <p>
              Bob Christopher served as CEO and raised over <strong>$26 million in funding</strong> for the ambitious venture. The company was initially based in Emeryville, California,
              with a design and R&D facility in Eagle, Idaho, where John and his team pushed the boundaries of what was possible in consumer robotics.
            </p>
          </div>
        </section>

        {/* Company Highlights */}
        <section className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">$26M</div>
              <div className="text-memorial-gray-400">Funding Raised</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">~100K</div>
              <div className="text-memorial-gray-400">Units Sold Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-memorial-accent-blue mb-2">60+</div>
              <div className="text-memorial-gray-400">Countries Reached</div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative aspect-video rounded-lg overflow-hidden border border-memorial-gray-700">
          <Image
            src="/images/ugobe/pleo-showcase.jpeg"
            alt="Pleo, the autonomous robotic baby Camarasaurus dinosaur"
            fill
            className="object-cover"
          />
        </section>

        {/* Founders & Leadership */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            The Founders & Leadership
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Ugobe brought together three visionaries with complementary expertise:
            </p>
            <div className="grid md:grid-cols-3 gap-6 my-6">
              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-memorial-gray-50 mb-2">Caleb Chung</h3>
                <p className="text-sm text-memorial-accent-blue mb-2">Co-Founder & Inventor</p>
                <p className="text-memorial-gray-400 text-sm">
                  Creator of Furby (50M+ units sold). Brought extensive experience in animatronic toy design and character development.
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-memorial-gray-50 mb-2">Bob Christopher</h3>
                <p className="text-sm text-memorial-accent-blue mb-2">Co-Founder & CEO</p>
                <p className="text-memorial-gray-400 text-sm">
                  Raised $26M in funding. Led business strategy and positioned Ugobe for rapid growth in the emerging consumer robotics market.
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-memorial-gray-50 mb-2">John Sosoka</h3>
                <p className="text-sm text-memorial-accent-blue mb-2">Co-Founder & CTO</p>
                <p className="text-memorial-gray-400 text-sm">
                  Former CTO at Neurosmith. Led all technical development, R&D, and the creation of the Life OS platform.
                </p>
              </div>
            </div>
            <p>
              In October 2008, facing financial pressures from the global economic crisis, Ugobe consolidated all operations to Eagle, Idaho, eliminating its California headquarters in an attempt to reduce overhead costs.
            </p>
          </div>
        </section>

        {/* Creating a Lifelike Companion */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Creating a Lifelike Companion
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Pleo was not just a toy—it was a breakthrough in autonomous robotics. John and his interdisciplinary
              team turned to <strong>ethology research</strong>, studying how animals handle environmental complexity, to make Pleo
              as authentic as possible. They built a virtual brain system that decided how Pleo would react in
              various situations, creating what the team called the <strong>"Life OS" (Life Operating System)</strong> platform.
            </p>
            <p>
              The result was a robot that exhibited "stunning organic movement and dynamic behaviors unlike other
              robots in the market." Pleo's spine gave it an <strong>alligator-like gait</strong> where it would twist before
              placing its foot down, creating remarkably lifelike locomotion that captivated both children and
              robotics researchers.
            </p>
            <p>
              Designed to resemble a week-old baby Camarasaurus dinosaur, Pleo would develop through three stages: <strong>"hatching," "infant," and "juvenile,"</strong> with its
              personality shaped by how it was treated. The robot could express moods, exhibit behaviors like sleeping when ignored, and wag its tail when given attention.
            </p>
          </div>
        </section>

        {/* Technical Specifications */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Technical Specifications
          </h2>
          <div className="bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-memorial-accent-blue uppercase tracking-wide mb-3">
                  Processing Power
                </h3>
                <ul className="text-memorial-gray-300 space-y-2">
                  <li><strong>Two ARM7 32-bit processors</strong> (main controller + image/sound processing)</li>
                  <li><strong>Four 8-bit microcontrollers</strong> for motor control</li>
                  <li><strong>Life OS software platform</strong> controlling sensors, actuators, and AI systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-memorial-accent-blue uppercase tracking-wide mb-3">
                  Sensors (38 Total)
                </h3>
                <ul className="text-memorial-gray-300 space-y-2">
                  <li>Color camera (nose-mounted)</li>
                  <li>Infrared transmitter/receiver</li>
                  <li>Temperature sensor</li>
                  <li>RFID reader</li>
                  <li>Two microphones</li>
                  <li>8 capacitive touch sensors (head, chin, cheeks, shoulder, back, thigh)</li>
                  <li>Ground foot sensors</li>
                  <li>Orientation and motion sensors</li>
                  <li>Force-feedback sensors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-memorial-accent-blue uppercase tracking-wide mb-3">
                  Actuators & Motion
                </h3>
                <ul className="text-memorial-gray-300 space-y-2">
                  <li><strong>14 motors</strong> providing 14 degrees of freedom</li>
                  <li><strong>100+ custom-designed gears</strong></li>
                  <li>Soft thermoplastic elastomer skin</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-memorial-accent-blue uppercase tracking-wide mb-3">
                  Power & Connectivity
                </h3>
                <ul className="text-memorial-gray-300 space-y-2">
                  <li><strong>Lithium-polymer battery</strong> (~1 hour playtime per 4-hour charge)</li>
                  <li>USB port</li>
                  <li>SD card slot</li>
                  <li><strong>Dimensions:</strong> 50.8cm × 17.8cm × 12.7cm</li>
                  <li><strong>Weight:</strong> 1.6 kg</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Inside Pleo: Engineering Marvel */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Inside Pleo: Engineering Marvel
          </h2>
          <p className="text-memorial-gray-300 mb-6 leading-relaxed">
            Creating lifelike movement required groundbreaking mechanical engineering. These images reveal the sophisticated systems
            that brought Pleo to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
              <Image
                src="/images/ugobe/dino_diagram_485.jpg"
                alt="Engineering diagram showing Pleo's internal systems and sensors"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Internal Systems Diagram</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
              <Image
                src="/images/ugobe/geneva head drive.JPG"
                alt="Geneva head drive mechanism providing smooth, lifelike head movements"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Geneva Head Drive Mechanism</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
              <Image
                src="/images/ugobe/PLO 3D mechanical.jpg"
                alt="3D mechanical rendering of Pleo's skeletal structure"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">3D Mechanical Structure</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-memorial-gray-700">
              <Image
                src="/images/ugobe/pleo-torndown-ifixit-source.jpeg"
                alt="Pleo teardown revealing the complex electronics and motor systems"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">iFixit Teardown View</p>
              </div>
            </div>
          </div>
        </section>

        {/* Life OS Platform */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Life OS: The Software Behind the Magic
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              The <strong>Life OS</strong> was Ugobe's proprietary software platform that enabled Pleo's autonomous behavior, adaptive learning, and emotional responses.
              The system used <strong>PAWN scripting language</strong> running on a virtual machine, allowing developers to modify behaviors and create custom applications.
            </p>
            <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-3">Life OS 1.1 Update (March 2008)</h3>
              <p className="text-memorial-gray-300 mb-3">
                Ugobe released software updates that expanded Pleo's capabilities:
              </p>
              <ul className="list-disc list-inside space-y-2 text-memorial-gray-300">
                <li>Sitting behavior</li>
                <li>Singing and vocalizations</li>
                <li>Calling for attention</li>
                <li>Getting sick (requiring care)</li>
              </ul>
            </div>
            <p>
              The Life OS platform represented a significant achievement in accessible robotics programming, enabling a community of developers
              and hobbyists to extend Pleo's behaviors beyond its factory programming.
            </p>
          </div>
        </section>

        {/* Patent Innovation */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Pioneering Autonomous Behavior
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              John co-invented the core technology behind Pleo's autonomous behavior with Caleb Chung, documented
              in <strong>Patent Application US20080958988A1: "Robots with Autonomous Behavior"</strong> (granted March 6, 2008). This patent described
              a groundbreaking method for robots to operate in response to environmental changes by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-memorial-gray-300">
              <li>Determining dominant drive states from competing drive states</li>
              <li>Sensing environmental changes in real-time</li>
              <li>Selecting appropriate behavior strategies from a database</li>
              <li>Executing robotic motions that created lifelike responses</li>
            </ul>
            <p>
              This approach represented a significant advancement in autonomous robotics, moving beyond
              pre-programmed responses to create genuinely adaptive behavior. The patents reflected Ugobe's innovative approach
              to creating robots with lifelike behaviors driven by <strong>internal motivational models</strong> rather than simple programmed responses.
            </p>
            <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-memorial-gray-50 mb-2">Additional Patent</h3>
              <p className="text-memorial-gray-300">
                <strong>USD614251S - "Robotic Eye"</strong> (design patent, granted April 20, 2010) - Inventor: Caleb Chung, assigned to Ugobe Inc., Jetta Industries Company Limited, and Innvo Labs Limited.
              </p>
            </div>
            <p className="text-sm text-memorial-gray-400 mt-4">
              The bankruptcy filing listed <strong>16 patents, 60 invention disclosures</strong> for potential future patents, and numerous trademarks—a testament
              to the depth of innovation that emerged from Ugobe's research and development efforts.
            </p>
          </div>
        </section>

        {/* Awards and Recognition */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Awards & Industry Recognition
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-memorial-gray-900 to-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
              <p className="text-2xl text-memorial-gray-200 italic mb-3">
                "The Doting Dinosaur"
              </p>
              <p className="text-memorial-gray-400">
                — TIME Magazine, Best Inventions of 2006
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-3">Major Awards</h3>
                <ul className="space-y-3 text-memorial-gray-300">
                  <li>
                    <strong className="text-memorial-accent-blue">TIME Magazine</strong> - Best Inventions of 2006
                  </li>
                  <li>
                    <strong className="text-memorial-accent-blue">Popular Science</strong> - Coolest Inventions of 2007
                  </li>
                  <li>
                    <strong className="text-memorial-accent-blue">DEMO 2006</strong> - INNY and DEMOgod Awards
                  </li>
                  <li>
                    <strong className="text-memorial-accent-blue">Idaho Innovation Award</strong> - Inaugural 2006 award (Mechanical Category)
                  </li>
                </ul>
              </div>

              <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-3">Media Coverage</h3>
                <ul className="space-y-3 text-memorial-gray-300">
                  <li>
                    <strong className="text-memorial-accent-blue">Television:</strong> NBC's Nightline, ABC's The Today Show
                  </li>
                  <li>
                    <strong className="text-memorial-accent-blue">Print:</strong> Wall Street Journal, Wired Magazine (multiple features), Forbes Magazine
                  </li>
                  <li>
                    <strong className="text-memorial-accent-blue">Recognition:</strong> Forbes named Caleb Chung one of the nation's top 10 innovators
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact & Sales */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Global Impact & Market Reception
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Pleo was unveiled at the <strong>DEMO Conference</strong> in Scottsdale, Arizona on <strong>February 7, 2006</strong>, where it received enthusiastic reception from the
              tech industry. Originally announced for $200 and a Christmas 2006 release, the product faced manufacturing delays of over a year due to the
              complexity of producing such a sophisticated robotic toy.
            </p>
            <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-4">Sales Performance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-memorial-gray-300 mb-3">
                    <strong>Launch:</strong> December 5, 2007 at $350<br/>
                    <strong>Total Sales:</strong> Approximately 100,000 units worldwide<br/>
                    <strong>Revenue:</strong> $19.2 million in 2008, $209,669 in early 2009
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-memorial-accent-blue uppercase tracking-wide mb-2">Geographic Distribution</h4>
                  <ul className="text-memorial-gray-300 space-y-1">
                    <li><strong>60%</strong> Europe</li>
                    <li><strong>30%</strong> Asia</li>
                    <li><strong>10%</strong> North America</li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              Despite critical acclaim and innovation, Pleo struggled in the marketplace. Ugobe had projected sales of over 1 million units, but actual performance
              fell far short. The high price point ($280-$350) during the 2008 economic downturn, combined with battery life issues and marketing challenges,
              limited consumer adoption.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Pleo Timeline
          </h2>
          <div className="border-l-2 border-memorial-accent-blue pl-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                2001
              </h3>
              <p className="text-memorial-gray-300">
                Ugobe founded (initially as Vernier Networks) by Caleb Chung, Bob Christopher, and John Sosoka.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                February 7, 2006
              </h3>
              <p className="text-memorial-gray-300">
                Pleo unveiled at the DEMO Conference in Scottsdale, Arizona, winning INNY and DEMOgod awards and generating immediate excitement
                in the robotics and consumer electronics industries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                November 2006
              </h3>
              <p className="text-memorial-gray-300">
                TIME Magazine names Pleo one of the Best Inventions of 2006 as "The Doting Dinosaur."
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                December 5, 2007
              </h3>
              <p className="text-memorial-gray-300">
                Pleo officially launched to consumers at $350, over a year later than originally announced due to manufacturing complexities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                March 2008
              </h3>
              <p className="text-memorial-gray-300">
                Life OS 1.1 released, adding new behaviors like sitting, singing, calling for attention, and getting sick.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                October 2008
              </h3>
              <p className="text-memorial-gray-300">
                Ugobe consolidates all operations to Eagle, Idaho, eliminating California headquarters to reduce overhead during economic crisis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                November-December 2008
              </h3>
              <p className="text-memorial-gray-300">
                Derek Dotson returns to help save the company. Doug Swanson brought in as CEO. Most employees laid off. Bob Christopher resigns as CEO.
                Entire board of directors resigns, returning control to co-founders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                April 17, 2009
              </h3>
              <p className="text-memorial-gray-300">
                Ugobe files for Chapter 7 bankruptcy, listing $1.6 million in assets and $3.6 million in liabilities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                May 21, 2009
              </h3>
              <p className="text-memorial-gray-300">
                Jetta Company Limited acquires all Ugobe intellectual property and assets at bankruptcy auction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                July 2009
              </h3>
              <p className="text-memorial-gray-300">
                Jetta establishes Innvo Labs Corporation to manage the Pleo brand. Derek Dotson becomes COO.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                December 2011
              </h3>
              <p className="text-memorial-gray-300">
                Pleo rb (ReBorn) launched with enhanced features including voice recognition, internal clock, RFID learning stones,
                and multiple color variations at $469.
              </p>
            </div>
          </div>
        </section>

        {/* The Perfect Storm */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            The Perfect Storm: What Went Wrong
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Despite groundbreaking technology and widespread acclaim, multiple factors converged to bring down Ugobe:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Economic Headwinds</h3>
                <p className="text-memorial-gray-300">
                  The 2008 financial crisis severely impacted consumer spending on luxury toys. Credit market collapse prevented the company from
                  raising its final funding round.
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Excessive Overhead</h3>
                <p className="text-memorial-gray-300">
                  The company had grown rapidly with expensive infrastructure, anticipating explosive growth that never materialized.
                  Two locations (California and Idaho) created unsustainable costs.
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Manufacturing Challenges</h3>
                <p className="text-memorial-gray-300">
                  Initial release delays of over a year due to manufacturing problems. The complexity of Pleo's design made consistent
                  production difficult.
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Product Issues</h3>
                <p className="text-memorial-gray-300">
                  Battery life problems (~1 hour playtime), slow movement, noisy gear sounds, and paint flaking disappointed some customers
                  and limited repeat purchases.
                </p>
              </div>
            </div>
            <div className="bg-memorial-gray-800 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
              <blockquote className="text-xl italic text-memorial-gray-200 mb-4">
                "One company tried to do too much, working on both hardware and software."
              </blockquote>
              <p className="text-memorial-gray-400 text-sm">
                — John Sosoka, reflecting on lessons learned
              </p>
            </div>
            <p>
              Major creditors at bankruptcy included $353,500 owed to each co-founder (Caleb Chung and Derek Dotson) in royalties,
              $604,161 to manufacturer Jetta Company Ltd., and $284,468 to Arrow Electronics.
            </p>
          </div>
        </section>

        {/* Pleo Lives On */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Pleo Lives On: The Resurrection
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              On May 21, 2009, at the bankruptcy auction, <strong>Jetta Company Limited</strong>—the Hong Kong-based manufacturer that had produced Pleo for Ugobe—acquired
              all intellectual property rights and assets. Jetta, established in 1977 with 32 years of manufacturing experience, committed to continuing the Pleo line.
            </p>
            <p>
              In July 2009, Jetta established <strong>Innvo Labs Corporation</strong> as a division to manage the Pleo brand. Derek Dotson, one of Ugobe's original founders,
              returned as COO of Innvo Labs, bringing continuity of vision to the product's next chapter.
            </p>
            <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-4">Pleo rb (ReBorn) - December 2011</h3>
              <p className="text-memorial-gray-300 mb-4">
                Innvo Labs launched the next generation at $469, pushing the original platform to its technical limits with enhanced features:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2 text-memorial-gray-300">
                  <li>Voice recognition system (works with any language)</li>
                  <li>Internal clock with time-of-day awareness</li>
                  <li>Temperature sensors</li>
                  <li>RFID-based "learning stone" technology</li>
                </ul>
                <ul className="list-disc list-inside space-y-2 text-memorial-gray-300">
                  <li>More touch sensors</li>
                  <li>Improved durability</li>
                  <li>Personality pre-setting (male vs. female tendencies)</li>
                  <li>Multiple color variations (green, pink, blue)</li>
                </ul>
              </div>
            </div>
            <p>
              Pleo remains available through Innvo Labs' PLEOworld website and continues to have devoted fans. The product is studied by researchers
              exploring human-robot interaction and stands as a testament to the pioneering work John and his team accomplished.
            </p>
          </div>
        </section>

        {/* Speaking Engagements */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Sharing Knowledge
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              John presented on Pleo's development and the Ugobe experience at prestigious venues including
              Stanford University's talk titled "Rise and Fall of a Companion Robot" and the PARC Forum,
              where he explained the unconventional approach Ugobe took to develop such a sophisticated product.
              These presentations offered valuable insights into both the technical innovations and business
              challenges of creating consumer robotics.
            </p>
          </div>
        </section>

        {/* Video Presentations */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Watch Pleo in Action
          </h2>
          <p className="text-memorial-gray-300 mb-6 leading-relaxed">
            These videos capture both the technical sophistication of Pleo and the emotional connections it created.
          </p>

          <div className="space-y-8">
            {/* PARC Forum - Evolution of Pleo Puzzle */}
            <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-memorial-gray-50 mb-2">
                  The Evolution of the Pleo Puzzle
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-memorial-gray-500">
                  <span>📍 PARC Forum</span>
                  <span>🤖 Technical Deep Dive</span>
                </div>
                <p className="text-memorial-gray-400 mt-2 text-sm">
                  John walks through the engineering challenges of creating Pleo, from 38 sensors to 14 motors
                  to the Life OS platform. A masterclass in making complex technical concepts accessible.
                </p>
              </div>
              <div className="bg-memorial-gray-900 rounded-lg overflow-hidden border border-memorial-gray-700">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/3iMN41JygPE?start=7"
                    title="The Evolution of the Pleo Puzzle"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* SeaWorld Dolphins */}
            <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-memorial-gray-50 mb-2">
                  Dolphins React to Pleo at SeaWorld
                </h3>
                <div className="flex flex-wrap gap-3 text-sm text-memorial-gray-500">
                  <span>🐬 SeaWorld</span>
                  <span>❤️ One of John's Favorite Videos</span>
                </div>
                <p className="text-memorial-gray-400 mt-2 text-sm">
                  A remarkable demonstration of Pleo's lifelike qualities—even dolphins were curious about this robotic dinosaur.
                  This video was one of John's favorites, showcasing the authentic presence Pleo achieved.
                </p>
              </div>
              <div className="bg-memorial-gray-900 rounded-lg overflow-hidden border border-memorial-gray-700">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/7i_HN_Twdds"
                    title="Dolphins React to Pleo at SeaWorld"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Link to all talks */}
            <div className="bg-memorial-gray-800/50 border border-memorial-gray-700 rounded-lg p-6 text-center">
              <p className="text-memorial-gray-300 mb-4">
                See all of John's presentations, including his Stanford talk and USC IMD Forum presentation:
              </p>
              <a
                href="/talks-and-presentations"
                className="inline-flex items-center gap-2 px-6 py-3 bg-memorial-accent-blue text-white rounded-lg hover:bg-memorial-accent-blue/80 transition-colors font-medium"
              >
                View All Talks & Presentations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Legacy and Lessons */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Legacy and Lessons
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Despite Ugobe's bankruptcy, Pleo achieved several notable accomplishments that continue to influence robotics:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Technical Achievement</h3>
                <p className="text-memorial-gray-300">
                  First consumer robot with truly lifelike movements and sophisticated behavioral AI, bridging the gap between
                  simple toys (like Furby) and advanced platforms (like Sony's AIBO).
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Emotional Engagement</h3>
                <p className="text-memorial-gray-300">
                  Successfully created emotional connections between users and a robotic pet. Pleo's realistic behavior
                  made people genuinely care about their robotic companion.
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Developer Community</h3>
                <p className="text-memorial-gray-300">
                  Inspired a dedicated community of hackers and developers who continued modifying and programming their Pleos,
                  demonstrating the platform's extensibility.
                </p>
              </div>
              <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">Market Lessons</h3>
                <p className="text-memorial-gray-300">
                  The "2 Year Itch" concept, developed by Bob Christopher based on Ugobe's experience, became a guide for
                  hardware startups navigating retail markets.
                </p>
              </div>
            </div>
            <p>
              The Ugobe experience taught John valuable lessons about the challenges of scaling hardware
              companies and the importance of focus. These insights would shape his subsequent ventures,
              Vita Robotica and Pulse-Robotics, where he split the hardware and software development into
              separate focused companies, learning from the challenges that contributed to Ugobe's difficulties.
            </p>
            <p>
              The Life OS platform and approaches to creating lifelike robotic behavior represented significant contributions
              that advanced the state of companion robotics. John's work on Pleo demonstrated that technology could create
              genuine emotional connections—a principle that would guide all his future work.
            </p>
          </div>
        </section>

        {/* Sources & References */}
        <section className="border-t border-memorial-gray-800 pt-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Sources & References
          </h2>
          <p className="text-memorial-gray-300 mb-6">
            Key sources documenting Ugobe's history, Pleo's development, and the company's impact on consumer robotics:
          </p>
          <div className="grid grid-cols-1 gap-3">
            <a
              href="https://en.wikipedia.org/wiki/Pleo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Wikipedia: Pleo
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  Comprehensive article covering Pleo's development, technical specifications, and legacy
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
                  "Ugobe Dinosaurs Go Extinct" - Comprehensive coverage of the bankruptcy and company history
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
                  "Best Inventions of 2006: The Doting Dinosaur" - Recognition of Pleo's innovation
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
                  "Ugobe Inc. Files for Chapter 7 Bankruptcy" - Details on bankruptcy filing and creditors
                </div>
              </div>
            </a>

            <a
              href="https://patents.google.com/patent/US20080958988A1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  US Patent US20080958988A1
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Robots with Autonomous Behavior" - Core patent co-invented by John Sosoka and Caleb Chung
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
              href="https://www.engadget.com/2011-01-08-pleo-rb-cuddles-up-to-ces-we-go-hands-on-and-talk-to-innvo-abou.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Engadget (January 2011)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Pleo rb cuddles up to CES" - Coverage of the ReBorn version and Innvo Labs
                </div>
              </div>
            </a>

            <a
              href="http://www.robotsrule.com/pleo/2009/10/inside-story-behind-pleos-rise-fall-and.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Robots Rule (October 2009)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Inside Story Behind Pleo's Rise, Fall and..." - Detailed analysis of Ugobe's business challenges
                </div>
              </div>
            </a>

            <a
              href="https://techcrunch.com/2009/04/26/pleo-creator-ugobe-files-for-bankruptcy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  TechCrunch (April 26, 2009)
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Pleo Creator Ugobe Files For Bankruptcy" - Tech industry perspective on the company's closure
                </div>
              </div>
            </a>

            <a
              href="https://robohub.org/robot-startup-series-2-bob-christopher/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 bg-memorial-gray-900/30 border border-memorial-gray-800 rounded-lg hover:border-memorial-accent-blue transition-colors"
            >
              <ExternalLink className="w-4 h-4 mt-1 flex-shrink-0 text-memorial-gray-500 group-hover:text-memorial-accent-blue" />
              <div>
                <div className="font-semibold text-memorial-gray-300 group-hover:text-memorial-accent-blue">
                  Robohub
                </div>
                <div className="text-memorial-gray-500 text-sm">
                  "Robot Startup Series: Bob Christopher" - Discussion of the "2 Year Itch" concept and lessons learned
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
