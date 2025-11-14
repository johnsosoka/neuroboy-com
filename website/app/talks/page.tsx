'use client'

export default function TalksPage() {
  // Smooth scroll to video embed
  const scrollToEmbed = (embedId: string) => {
    const element = document.getElementById(embedId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Talks & Presentations
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        John was a passionate educator who shared his knowledge and experiences through presentations at prestigious venues. These talks offer insights into his technical innovations, entrepreneurial journey, and the lessons learned from creating groundbreaking products.
      </p>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-xl border-2 border-memorial-gray-800 shadow-2xl">
          <img
            src="/images/personal/john-speaking.png"
            alt="John presenting at a conference"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-sm text-memorial-gray-400 mt-4 italic">
          John speaking at Stanford University in 2009
        </p>
      </div>

      {/* Chronological Overview Cards */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-memorial-gray-200">
          Complete Speaking Record
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* 2012 - TechLaunch */}
          <div className="bg-gradient-to-br from-memorial-gray-900/80 to-memorial-gray-900/50 border-l-4 border-memorial-accent-blue rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-blue/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-blue/20 text-memorial-accent-blue rounded-full">
                May 16, 2012
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              Been There, Done That: Insight from Successful Entrepreneurs
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <span>TechLaunch 9.0</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🎤</span>
                <span>Panel Discussion</span>
              </p>
            </div>
          </div>

          {/* 2010 - IdaVation */}
          <div className="bg-gradient-to-br from-memorial-gray-900/80 to-memorial-gray-900/50 border-l-4 border-memorial-accent-purple rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-purple/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-purple/20 text-memorial-accent-purple rounded-full">
                May 26, 2010
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              Creativity and Innovation in Isolation
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <span>IdaVation Conference</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🎤</span>
                <span>Panel Discussion</span>
              </p>
            </div>
          </div>

          {/* 2009 - Stanford (HAS VIDEO) */}
          <div className="bg-gradient-to-br from-memorial-accent-blue/5 to-memorial-gray-900/50 border-l-4 border-memorial-accent-blue rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-blue/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-blue/20 text-memorial-accent-blue rounded-full">
                May 27, 2009
              </span>
              <span className="text-xs font-semibold px-2 py-1 bg-memorial-accent-gold/20 text-memorial-accent-gold rounded">
                VIDEO
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              The Rise and Fall of a Companion Robot: Lessons Learned from Pleo
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400 mb-3">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <a
                  href="http://ee380.stanford.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-memorial-accent-blue transition-colors"
                >
                  Stanford University EE380 Colloquium
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🎓</span>
                <span>Computer Systems Colloquium</span>
              </p>
            </div>
            <button
              onClick={() => scrollToEmbed('stanford-embed')}
              className="text-sm text-memorial-accent-blue hover:text-memorial-accent-blue/80 transition-colors flex items-center gap-1"
            >
              Watch this presentation below ↓
            </button>
          </div>

          {/* 2008 - USC (HAS VIDEO) */}
          <div className="bg-gradient-to-br from-memorial-accent-purple/5 to-memorial-gray-900/50 border-l-4 border-memorial-accent-purple rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-purple/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-purple/20 text-memorial-accent-purple rounded-full">
                Oct 1, 2008
              </span>
              <span className="text-xs font-semibold px-2 py-1 bg-memorial-accent-gold/20 text-memorial-accent-gold rounded">
                VIDEO
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              Lifeforms: Exploring a New Medium
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400 mb-3">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <span>USC Cinema School, Interactive Media Division</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🎬</span>
                <span>USC's Robert Zemeckis Center for Digital Arts</span>
              </p>
            </div>
            <button
              onClick={() => scrollToEmbed('usc-embed')}
              className="text-sm text-memorial-accent-purple hover:text-memorial-accent-purple/80 transition-colors flex items-center gap-1"
            >
              Watch this presentation below ↓
            </button>
          </div>

          {/* 2008 - Xerox PARC (HAS VIDEO) */}
          <div className="bg-gradient-to-br from-memorial-accent-gold/5 to-memorial-gray-900/50 border-l-4 border-memorial-accent-gold rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-gold/20 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-gold/20 text-memorial-accent-gold rounded-full">
                Aug 14, 2008
              </span>
              <span className="text-xs font-semibold px-2 py-1 bg-memorial-accent-gold/20 text-memorial-accent-gold rounded">
                VIDEO
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              Design of Pleo: From Concept to Implementation
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400 mb-3">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <a
                  href="https://www.parc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-memorial-accent-gold transition-colors"
                >
                  Xerox Palo Alto Research Center (PARC)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🔬</span>
                <span>Technical Deep Dive</span>
              </p>
            </div>
            <button
              onClick={() => scrollToEmbed('parc-embed')}
              className="text-sm text-memorial-accent-gold hover:text-memorial-accent-gold/80 transition-colors flex items-center gap-1"
            >
              Watch this presentation below ↓
            </button>
          </div>

          {/* 2007 - Maker Faire */}
          <div className="bg-gradient-to-br from-memorial-gray-900/80 to-memorial-gray-900/50 border-l-4 border-memorial-accent-blue rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-blue/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-blue/20 text-memorial-accent-blue rounded-full">
                Oct 26, 2007
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              Inside Pleo
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <span>Maker Faire 2007 – Austin, TX</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🛠️</span>
                <span>Maker Community Event</span>
              </p>
            </div>
          </div>

          {/* 2007 - ARM */}
          <div className="bg-gradient-to-br from-memorial-gray-900/80 to-memorial-gray-900/50 border-l-4 border-memorial-accent-purple rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-purple/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-purple/20 text-memorial-accent-purple rounded-full">
                Oct 4, 2007
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              LifeOS – Where Artificial Intelligence and Robotics Merge
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <span>ARM Developers' Conference</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🏢</span>
                <span>Santa Clara, CA</span>
              </p>
            </div>
          </div>

          {/* 2007 - AAAS */}
          <div className="bg-gradient-to-br from-memorial-gray-900/80 to-memorial-gray-900/50 border-l-4 border-memorial-accent-gold rounded-lg p-6 hover:shadow-lg hover:shadow-memorial-accent-gold/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-semibold px-3 py-1 bg-memorial-accent-gold/20 text-memorial-accent-gold rounded-full">
                Feb 15-19, 2007
              </span>
            </div>
            <h3 className="text-xl font-bold text-memorial-gray-50 mb-2 leading-tight">
              Building an Autonomous Creature in a Remote Control World
            </h3>
            <div className="space-y-1 text-sm text-memorial-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">📍</span>
                <span>AAAS Annual Meeting</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-memorial-gray-500">🌉</span>
                <span>San Francisco, CA</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Presentations with Video Embeds */}
      <div className="max-w-5xl mx-auto space-y-16">
        <h2 className="text-3xl font-bold mb-8 text-memorial-gray-200">
          Featured Video Presentations
        </h2>

        {/* Stanford - Rise and Fall of a Companion Robot */}
        <section id="stanford-embed" className="scroll-mt-8 border-l-4 border-memorial-accent-blue pl-6">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-3 text-memorial-accent-blue">
              The Rise and Fall of a Companion Robot: Lessons Learned from Pleo
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-memorial-gray-500">
              <span>📍 Stanford University</span>
              <span>📅 May 27, 2009</span>
              <span>🎓 EE380: Computer Systems Colloquium</span>
            </div>
          </div>

          <div className="bg-memorial-gray-900 rounded-lg overflow-hidden border border-memorial-gray-800 mb-6">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/6O26pIJYXG4"
                title="The Rise and Fall of a Companion Robot: Lessons Learned from Pleo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              In this candid and insightful presentation at Stanford University, John reflects on the complete journey of creating Pleo and Ugobe. He shares both the technical innovations that made Pleo's lifelike behavior possible and the business challenges that ultimately led to the company's bankruptcy during the 2008-2009 economic crisis.
            </p>
            <p>
              This talk is particularly valuable for entrepreneurs and engineers, as John openly discusses what went wrong, what he would do differently, and how the experience informed his subsequent ventures. His willingness to analyze failure with the same rigor he applied to innovation makes this an essential case study in consumer robotics.
            </p>
          </div>
        </section>

        {/* USC IMD Forum */}
        <section id="usc-embed" className="scroll-mt-8 border-l-4 border-memorial-accent-purple pl-6">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-3 text-memorial-accent-purple">
              Lifeforms: Exploring a New Medium
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-memorial-gray-500">
              <span>📍 USC School of Cinematic Arts</span>
              <span>📅 October 1, 2008</span>
              <span>🎬 IMD Forum</span>
            </div>
          </div>

          <div className="bg-memorial-gray-900 rounded-lg overflow-hidden border border-memorial-gray-800 mb-6">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/tMdBtSQYAiE"
                title="Lifeforms: Exploring a New Medium - USC IMD Forum"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Speaking at the USC School of Cinematic Arts' IMD Forum, John discusses Ugobe and the development of Pleo from the perspective of interactive media and design. This presentation explores the intersection of robotics, entertainment, and emotional connection—how Pleo was designed not just to function, but to form genuine bonds with people.
            </p>
            <p>
              The talk provides insights into the interdisciplinary approach required to create a companion robot, bringing together insights from ethology, software engineering, industrial design, and entertainment to create something that felt truly alive.
            </p>
          </div>
        </section>

        {/* PARC - Design of Pleo */}
        <section id="parc-embed" className="scroll-mt-8 border-l-4 border-memorial-accent-gold pl-6">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-3 text-memorial-accent-gold">
              Design of Pleo: From Concept to Implementation
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-memorial-gray-500">
              <span>📍 Xerox PARC</span>
              <span>📅 August 14, 2008</span>
              <span>🤖 Technical Deep Dive</span>
            </div>
          </div>

          <div className="bg-memorial-gray-900 rounded-lg overflow-hidden border border-memorial-gray-800 mb-6">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/3iMN41JygPE?start=7"
                title="Design of Pleo: From Concept to Implementation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              In this technical presentation at the Xerox Palo Alto Research Center, John dives deep into the engineering challenges of creating Pleo. He explains the "puzzle" of bringing together 38 sensors, 14 motors, multiple microprocessors, and the Life OS platform to create a robot that exhibited genuinely autonomous, lifelike behavior.
            </p>
            <p>
              The presentation showcases John's ability to make complex technical concepts accessible, walking through the iterative process of solving interconnected problems in robotics, from low-level motor control to high-level behavioral algorithms. This is essential viewing for anyone interested in the technical details behind Pleo's remarkable capabilities.
            </p>
          </div>
        </section>

        {/* Additional Context */}
        <section className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200">
            John's Approach to Public Speaking
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Throughout his career, John was known for his engaging, accessible presentation style. He had a unique gift for making complex technical topics understandable without oversimplifying them, and he never shied away from discussing failures alongside successes.
            </p>
            <p>
              His presentations at Stanford, USC, PARC, and other prestigious venues weren't just technical lectures—they were stories about the human side of innovation. He understood that the most valuable lessons often came from understanding what went wrong and why, not just celebrating what went right.
            </p>
            <p>
              These recordings preserve not just John's technical insights, but his warmth, humor, and genuine passion for sharing knowledge with the next generation of engineers and entrepreneurs.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
