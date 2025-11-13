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
        {/* Objects with Empathy - Main Project */}
        <section>
          <div className="bg-gradient-to-br from-memorial-accent-gold/10 to-memorial-accent-purple/10 border-2 border-memorial-accent-gold rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-memorial-accent-gold text-memorial-darker px-6 py-2 rounded-full font-bold text-sm">
                🏆 2010 Boise Art Triennial Winner
              </div>
            </div>
            <h2 className="text-4xl font-bold text-center mb-4 text-memorial-gray-50">
              Objects with Empathy
            </h2>
            <p className="text-center text-memorial-gray-300 text-lg">
              An exploration of technology, emotion, and the objects that connect us
            </p>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-memorial-accent-blue">
              About the Project
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4">
              <p>
                <strong className="text-memorial-gray-50">Objects with Empathy</strong> was John's
                visionary art project that earned him the prestigious 2010 Boise Art Triennial award.
                This groundbreaking work explored the intersection of technology, design, and human
                emotion—asking fundamental questions about how we relate to the objects around us and
                how technology can foster emotional connections.
              </p>
              <p>
                The project combined John's deep expertise in robotics and interactive systems with
                his philosophical curiosity about the nature of empathy and connection. True to his
                lifelong mission of making technology serve humanity, <em>Objects with Empathy</em>
                demonstrated how inanimate objects, when imbued with responsive behaviors, could
                evoke emotional responses and create meaningful interactions.
              </p>
              <p>
                This work represented a natural evolution of John's career—from educational toys that
                responded to children's actions, to robotic companions like Pleo that exhibited lifelike
                behaviors, to art installations that challenged viewers to reconsider their relationships
                with the technological objects in their lives.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-memorial-accent-blue">
              Development Process: The Robotic Lamp
            </h3>
            <p className="text-memorial-gray-300 mb-6 leading-relaxed">
              This video captures John at work developing the robotic lamp component of the
              <em> Objects with Empathy</em> installation. Watch as he brings his vision to life,
              combining mechanical engineering, electronics, and artistic expression.
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

          {/* The Significance */}
          <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-memorial-accent-purple">
              The Significance
            </h3>
            <div className="text-memorial-gray-300 leading-relaxed space-y-4">
              <p>
                Winning the 2010 Boise Art Triennial was a significant recognition of John's
                multifaceted talents. While he was widely known in the technology and robotics
                industries, this award acknowledged his contributions to contemporary art and his
                ability to bridge the gap between science and artistic expression.
              </p>
              <p>
                The project exemplified John's philosophy that technology should not intimidate or
                alienate, but rather connect and enhance human experience. By creating objects that
                appeared to possess empathy—responding to human presence and interaction in ways that
                felt alive and aware—John challenged viewers to consider the emotional dimensions of
                our increasingly technological world.
              </p>
            </div>
          </div>

          {/* More Media Placeholder */}
          <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-memorial-gray-50">
              Additional Media & Documentation
            </h3>
            <p className="text-memorial-gray-300 mb-6 leading-relaxed">
              More photographs, videos, and documentation of the <em>Objects with Empathy</em>
              installation will be added here as they are collected from archives, galleries,
              and personal collections.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[4/3] bg-memorial-gray-800 rounded-lg flex items-center justify-center border border-memorial-gray-700"
                >
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-memorial-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-xs text-memorial-gray-500">Media {i}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-memorial-gray-500 mt-6 text-center italic">
              Installation photos, exhibition documentation, and additional project materials coming soon
            </p>
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
