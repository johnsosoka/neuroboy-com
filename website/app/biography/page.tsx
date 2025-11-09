export default function Biography() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-5xl font-bold mb-8 text-memorial-gray-50">
        Biography
      </h1>

      {/* Early Life */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-memorial-accent-blue">
          Early Life & Education
        </h2>
        <div className="text-memorial-gray-300 leading-relaxed space-y-4">
          <p>
            John R. Sosoka II was born in 1953, growing up during a transformative era
            of technological advancement. From an early age, he demonstrated a natural
            curiosity about how things worked, often taking apart household electronics
            to understand their inner workings.
          </p>
          <p>
            His passion for technology and engineering led him to pursue formal education
            in the field, where he developed the technical foundation that would later
            enable him to pioneer new frontiers in robotics and interactive technology.
          </p>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-memorial-accent-blue">
          Professional Journey
        </h2>

        <div className="space-y-8">
          {/* Technology Applications Group */}
          <div className="border-l-4 border-memorial-gray-700 pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Technology Applications Group
            </h3>
            <p className="text-memorial-gray-400 mb-3">1990s</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              John's early career included work with the Technology Applications Group,
              where he honed his skills in applying cutting-edge technology to practical
              problems. This experience laid the groundwork for his future innovations
              in consumer robotics and interactive products.
            </p>
          </div>

          {/* Neurosmith */}
          <div className="border-l-4 border-memorial-accent-blue pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Neurosmith
            </h3>
            <p className="text-memorial-gray-400 mb-3">Founded 1995</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              At Neurosmith, John helped pioneer educational technology toys that made
              learning fun and accessible. The company's flagship product, the Musini,
              was a revolutionary musical toy that responded to touch and movement,
              introducing children to music creation in an intuitive, playful way.
              This work demonstrated John's belief that technology should be accessible
              to everyone, regardless of age or technical background.
            </p>
          </div>

          {/* Ugobe */}
          <div className="border-l-4 border-memorial-accent-blue pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Ugobe - Chief Technology Officer
            </h3>
            <p className="text-memorial-gray-400 mb-3">2001-2009</p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              As CTO of Ugobe, John led the technical development of Pleo, a robotic
              dinosaur that captured hearts worldwide. Pleo wasn't just a toy—it was
              a demonstration of life-like robotics, featuring realistic movements,
              emotions, and autonomous behaviors that created genuine emotional
              connections with users.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed">
              Under John's technical leadership, Pleo became one of the most successful
              consumer robots of its era, winning numerous awards and demonstrating
              that robotics could be both technically sophisticated and emotionally
              engaging.
            </p>
          </div>

          {/* Vita Robotica */}
          <div className="border-l-4 border-memorial-gray-700 pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Vita Robotica
            </h3>
            <p className="text-memorial-gray-400 mb-3">2010s</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              At Vita Robotica, John worked on implementing advanced robot brain
              systems, continuing his mission to create more intelligent and responsive
              robotic systems. This work pushed the boundaries of what autonomous
              robots could achieve.
            </p>
          </div>

          {/* Pulse-Robotics */}
          <div className="border-l-4 border-memorial-gray-700 pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Pulse-Robotics
            </h3>
            <p className="text-memorial-gray-400 mb-3">2010s</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              John's work with Pulse-Robotics focused on developing sophisticated
              robot operating systems (robo-OS), creating the foundational software
              that would enable more advanced robotic behaviors and interactions.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="mb-12 bg-memorial-gray-900 rounded-lg p-8 border border-memorial-gray-800">
        <h2 className="text-3xl font-semibold mb-4 text-memorial-accent-blue">
          Professional Philosophy
        </h2>
        <div className="text-memorial-gray-300 leading-relaxed space-y-4">
          <p>
            Throughout his career, John maintained a consistent philosophy: technology
            should serve humanity, not intimidate it. He believed in making complex
            systems accessible and creating products that enriched people's lives.
          </p>
          <p>
            His approach emphasized collaboration, always working closely with
            multidisciplinary teams to push boundaries while keeping the end user's
            experience at the forefront. He mentored countless engineers and designers,
            sharing his knowledge freely and encouraging innovation.
          </p>
        </div>
      </section>

      {/* Personal Character */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-memorial-accent-blue">
          Personal Character & Values
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <CharacterCard
            title="Kind & Patient"
            description="John was known for his gentle demeanor and infinite patience, always taking time to explain complex concepts and help others understand."
          />
          <CharacterCard
            title="Visionary Thinker"
            description="He had an uncanny ability to see possibilities where others saw limitations, imagining futures that inspired teams to achieve the extraordinary."
          />
          <CharacterCard
            title="Dedicated Mentor"
            description="John invested deeply in nurturing the next generation of engineers and creators, sharing knowledge generously and celebrating their successes."
          />
          <CharacterCard
            title="Resilient Spirit"
            description="Even after his PCA diagnosis, John maintained his positive outlook and continued to contribute his wisdom and vision to the community."
          />
          <CharacterCard
            title="Authentic Soul"
            description="Whether walking barefoot through the office or engaging in deep philosophical conversations, John remained true to himself and his values."
          />
        </div>
      </section>
    </div>
  )
}

function CharacterCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-memorial-gray-900 rounded-lg p-6 border border-memorial-gray-800">
      <h3 className="text-xl font-semibold mb-3 text-memorial-gray-50">
        {title}
      </h3>
      <p className="text-memorial-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
