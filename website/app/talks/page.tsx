export default function TalksPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Talks & Presentations
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        John was a passionate educator who shared his knowledge and experiences through presentations at prestigious venues. These talks offer insights into his technical innovations, entrepreneurial journey, and the lessons learned from creating groundbreaking products.
      </p>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Stanford - Rise and Fall of a Companion Robot */}
        <section className="border-l-4 border-memorial-accent-blue pl-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3 text-memorial-accent-blue">
              The Rise and Fall of a Companion Robot: Lessons Learned from Pleo
            </h2>
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
        <section className="border-l-4 border-memorial-accent-purple pl-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3 text-memorial-accent-purple">
              John Sosoka, Ugobe
            </h2>
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
                title="John Sosoka, Ugobe - USC IMD Forum"
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

        {/* Evolution of Pleo Puzzle */}
        <section className="border-l-4 border-memorial-accent-gold pl-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-3 text-memorial-accent-gold">
              The Evolution of the Pleo Puzzle
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-memorial-gray-500">
              <span>📍 PARC Forum</span>
              <span>🤖 Technical Deep Dive</span>
            </div>
          </div>

          <div className="bg-memorial-gray-900 rounded-lg overflow-hidden border border-memorial-gray-800 mb-6">
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

          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              In this technical presentation at the PARC Forum, John dives deep into the engineering challenges of creating Pleo. He explains the "puzzle" of bringing together 38 sensors, 14 motors, multiple microprocessors, and the Life OS platform to create a robot that exhibited genuinely autonomous, lifelike behavior.
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
