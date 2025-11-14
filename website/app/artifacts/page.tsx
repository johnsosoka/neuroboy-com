export default function ArtifactsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Artifacts Exhibit
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        A curated collection of artifacts from John's life and work - code he wrote, letters he sent,
        designs he created, and other tangible pieces of his legacy that tell the story of his impact.
      </p>

      {/* Coming Soon Notice */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-memorial-accent-blue/10 border border-memorial-accent-blue rounded-lg p-8 mb-12 text-center">
          <div className="text-4xl mb-4">🏛️</div>
          <h2 className="text-2xl font-bold text-memorial-accent-blue mb-3">
            Artifacts Exhibit Coming Soon
          </h2>
          <p className="text-memorial-gray-300 leading-relaxed mb-4">
            We're building a digital archive to preserve and share artifacts from John's remarkable career.
            This exhibit will feature curated selections of his code, correspondence, designs, and other
            meaningful items that illuminate different aspects of his work and character.
          </p>
          <p className="text-memorial-gray-400 text-sm">
            Have an artifact to contribute?{' '}
            <a href="/artifacts-submit" className="text-memorial-accent-blue hover:underline">
              Submit it here
            </a>
          </p>
        </div>

        {/* Planned Organization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Exhibit Organization
          </h2>
          <p className="text-memorial-gray-300 mb-6 leading-relaxed">
            The Artifacts Exhibit will organize items both chronologically and thematically,
            allowing visitors to explore John's legacy from multiple perspectives.
          </p>

          {/* Browse By Type */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-memorial-gray-200 mb-4">
              Browse by Artifact Type
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: '💻', label: 'Code', count: 'TBD' },
                { icon: '✉️', label: 'Letters', count: 'TBD' },
                { icon: '✍️', label: 'Writing', count: 'TBD' },
                { icon: '📄', label: 'Documents', count: 'TBD' },
                { icon: '🎨', label: 'Designs', count: 'TBD' },
                { icon: '📐', label: 'Schematics', count: 'TBD' },
                { icon: '🎥', label: 'Media', count: 'TBD' },
                { icon: '🏆', label: 'Awards', count: 'TBD' },
              ].map((type) => (
                <div
                  key={type.label}
                  className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-4 text-center hover:border-memorial-accent-blue transition-colors cursor-pointer"
                >
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <div className="text-sm font-medium text-memorial-gray-300">{type.label}</div>
                  <div className="text-xs text-memorial-gray-500 mt-1">{type.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Browse By Era */}
          <div>
            <h3 className="text-xl font-semibold text-memorial-gray-200 mb-4">
              Browse by Era
            </h3>
            <div className="space-y-3">
              {[
                { era: '1970s - Early Career', description: 'Early electronics and engineering work' },
                { era: '1980s - TAG Era', description: 'Technology Application Group multimedia courseware' },
                { era: '1980s-1996 - Davidson & Associates', description: 'Math Blaster, CTO leadership, Blizzard acquisition' },
                { era: '1997-2004 - Neurosmith', description: 'Music Blocks, Musini, interactive learning toys' },
                { era: '2001-2009 - Ugobe', description: 'Pleo development, companion robotics' },
                { era: '2009-2017 - Later Ventures', description: 'Vita Robotica, Pulse-Robotics, LumiLife' },
                { era: 'Personal & Family', description: 'Personal correspondence, poems, family moments' },
              ].map((item) => (
                <div
                  key={item.era}
                  className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-4 hover:border-memorial-accent-blue transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-memorial-gray-200 mb-1">{item.era}</h4>
                      <p className="text-sm text-memorial-gray-400">{item.description}</p>
                    </div>
                    <div className="text-memorial-gray-500 text-sm">TBD artifacts</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections Preview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Planned Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-memorial-gray-900 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-memorial-accent-blue mb-3">
                Pleo Development Archives
              </h3>
              <p className="text-memorial-gray-300 text-sm leading-relaxed mb-3">
                A collection of code snippets, design documents, technical memos, and development notes
                from the creation of Pleo - offering insight into the engineering process behind this
                groundbreaking companion robot.
              </p>
              <p className="text-xs text-memorial-gray-500">Collection in progress</p>
            </div>

            <div className="bg-memorial-gray-900 border-l-4 border-memorial-accent-purple p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-memorial-accent-purple mb-3">
                Letters to Mentees
              </h3>
              <p className="text-memorial-gray-300 text-sm leading-relaxed mb-3">
                Correspondence and advice John shared with engineers and entrepreneurs he mentored,
                revealing his philosophy on innovation, failure, professional development, and giving back.
              </p>
              <p className="text-xs text-memorial-gray-500">Collection in progress</p>
            </div>

            <div className="bg-memorial-gray-900 border-l-4 border-memorial-accent-gold p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-memorial-accent-gold mb-3">
                Early TAG Projects
              </h3>
              <p className="text-memorial-gray-300 text-sm leading-relaxed mb-3">
                Software, documentation, and materials from Technology Application Group's multimedia
                courseware projects - showing John's early vision for interactive learning technology.
              </p>
              <p className="text-xs text-memorial-gray-500">Collection in progress</p>
            </div>

            <div className="bg-memorial-gray-900 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-memorial-accent-blue mb-3">
                Patents & Technical Papers
              </h3>
              <p className="text-memorial-gray-300 text-sm leading-relaxed mb-3">
                Complete collection of John's patents from Neurosmith, Ugobe, and other ventures, along
                with whitepapers and technical articles explaining his innovations in accessible terms.
              </p>
              <p className="text-xs text-memorial-gray-500">Collection in progress</p>
            </div>
          </div>
        </section>

        {/* Artifact Display Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            How Artifacts Will Be Displayed
          </h2>
          <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
            <p className="text-memorial-gray-300 mb-4 leading-relaxed">
              Each artifact in the exhibit will include:
            </p>
            <ul className="space-y-3 text-memorial-gray-300">
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>
                  <strong>High-resolution display</strong> of the artifact (viewable, downloadable where appropriate)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>
                  <strong>Historical context</strong> explaining when, where, and why it was created
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>
                  <strong>Related artifacts</strong> showing connections to other items in the collection
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>
                  <strong>Technical annotations</strong> for code or designs, explaining their significance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>
                  <strong>Search and filtering</strong> by tags, dates, people, companies, or technologies
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>
                  <strong>Contributor attribution</strong> crediting those who shared the artifact
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-memorial-gray-900 to-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200">
            Help Build the Archive
          </h2>
          <p className="text-memorial-gray-300 mb-6 max-w-2xl mx-auto">
            Do you have artifacts from John's life or work? Code he wrote, letters he sent, designs
            he created, or photos of items he made? Your contributions help preserve his legacy for
            future generations.
          </p>
          <a
            href="/artifacts-submit"
            className="inline-flex items-center gap-2 px-8 py-3 bg-memorial-accent-purple text-white rounded-lg hover:bg-memorial-accent-purple/80 transition-colors font-medium"
          >
            Submit an Artifact
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </section>
      </div>
    </div>
  )
}
