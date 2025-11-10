export default function PhotoGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Photo Gallery
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        A collection of personal photographs celebrating John's life, relationships, and the moments that defined his journey.
      </p>

      {/* Coming Soon Notice */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-memorial-accent-blue/10 border border-memorial-accent-blue rounded-lg p-8 mb-12 text-center">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="text-2xl font-bold text-memorial-accent-blue mb-3">
            Photo Gallery Coming Soon
          </h2>
          <p className="text-memorial-gray-300 leading-relaxed">
            We're building a community photo gallery where family, friends, colleagues, and anyone whose life John touched can share their memories through photographs. This section will allow you to browse, search, and contribute personal photos that celebrate John's life and legacy.
          </p>
        </div>

        {/* Planned Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Planned Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-memorial-accent-blue mb-3">
                Professional Life
              </h3>
              <p className="text-memorial-gray-300 text-sm leading-relaxed">
                Photos from Davidson, Neurosmith, Ugobe, conferences, presentations, product launches, and professional achievements.
              </p>
            </div>

            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-memorial-accent-purple mb-3">
                Personal Moments
              </h3>
              <p className="text-memorial-gray-300 text-sm leading-relaxed">
                Family gatherings, personal hobbies, travels, everyday life, and the moments that show who John was beyond his work.
              </p>
            </div>

            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-memorial-accent-gold mb-3">
                Legacy & Impact
              </h3>
              <p className="text-memorial-gray-300 text-sm leading-relaxed">
                Photos showing John's mentorship, his impact on others, tributes, memorial events, and how his work continues to influence people.
              </p>
            </div>
          </div>
        </section>

        {/* Submission Guidelines Preview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Future Submission Guidelines
          </h2>
          <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
            <p className="text-memorial-gray-300 mb-4">
              When the photo gallery launches, you'll be able to contribute photos with the following guidelines:
            </p>
            <ul className="space-y-3 text-memorial-gray-300">
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>Photos should celebrate John's life, work, relationships, or impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>Include context: when and where the photo was taken, who's in it, and what was happening</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>High-resolution images preferred (will be optimized for web)</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>All submissions will be moderated by family to ensure appropriateness</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3">•</span>
                <span>Optional: Contributors can choose to share their name or remain anonymous</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Implementation Notes */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Technical Architecture
          </h2>
          <div className="bg-memorial-gray-900/50 border-l-4 border-memorial-accent-blue p-6 rounded-r-lg">
            <p className="text-memorial-gray-300 mb-4">
              The community photo gallery will be implemented with:
            </p>
            <ul className="space-y-2 text-memorial-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3 font-bold">→</span>
                <span><strong>Storage:</strong> Amazon S3 for scalable image hosting</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3 font-bold">→</span>
                <span><strong>CDN:</strong> CloudFront for fast, global image delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3 font-bold">→</span>
                <span><strong>Backend:</strong> Python Lambda functions via API Gateway</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3 font-bold">→</span>
                <span><strong>Database:</strong> DynamoDB for photo metadata and moderation queue</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3 font-bold">→</span>
                <span><strong>Authentication:</strong> AWS Cognito for submission authentication (optional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-3 font-bold">→</span>
                <span><strong>Moderation:</strong> Admin dashboard for family review and approval</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Current Memorial Photo */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Featured Photo
          </h2>
          <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
            <p className="text-memorial-gray-300 mb-4">
              Currently, the site features one photo from the Neurosmith company party in 2002, displayed on the homepage. As this gallery develops, it will showcase many more moments from John's remarkable life.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
