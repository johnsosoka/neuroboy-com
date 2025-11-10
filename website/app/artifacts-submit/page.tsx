export default function ArtifactsSubmitPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Submit an Artifact
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        Share a piece of John's legacy - code he wrote, letters he sent, poems he crafted,
        or any artifact that tells part of his story. These contributions help preserve his
        impact for future generations.
      </p>

      {/* Coming Soon Notice */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-memorial-accent-purple/10 border border-memorial-accent-purple rounded-lg p-8 mb-12 text-center">
          <div className="text-4xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-memorial-accent-purple mb-3">
            Artifact Submission Coming Soon
          </h2>
          <p className="text-memorial-gray-300 leading-relaxed">
            We're building a system to accept and preserve artifacts from John's life and work.
            Once live, you'll be able to upload digital files or photos of physical artifacts,
            add context and tags, and contribute to the permanent archive of his legacy.
          </p>
        </div>

        {/* Preview of Submission Form */}
        <section className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-memorial-gray-50">
            Future Submission Form (Preview)
          </h2>

          <div className="space-y-6 opacity-60 pointer-events-none">
            {/* Artifact Type */}
            <div>
              <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                Artifact Type *
              </label>
              <select className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300">
                <option>Select a type...</option>
                <option>Code / Software</option>
                <option>Letter / Email</option>
                <option>Poem / Writing</option>
                <option>Document / Paper</option>
                <option>Photo / Image</option>
                <option>Audio / Video</option>
                <option>Design / Schematic</option>
                <option>Other</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                Title *
              </label>
              <input
                type="text"
                placeholder="Brief descriptive title for this artifact"
                className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300 placeholder-memorial-gray-600"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                File Upload *
              </label>
              <div className="border-2 border-dashed border-memorial-gray-700 rounded-lg p-8 text-center">
                <svg className="w-12 h-12 mx-auto mb-3 text-memorial-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-memorial-gray-400 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm text-memorial-gray-500">
                  PDF, DOC, TXT, JPG, PNG, MP3, MP4 (max 50MB)
                </p>
              </div>
            </div>

            {/* Description/Context */}
            <div>
              <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                Description & Context *
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about this artifact. What is it? When was it created? What's the story behind it? Why is it significant?"
                className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300 placeholder-memorial-gray-600"
              />
            </div>

            {/* Era/Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                  Era / Time Period (Optional)
                </label>
                <select className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300">
                  <option>Select era...</option>
                  <option>1970s - Early Career</option>
                  <option>1980s - TAG & Early Software</option>
                  <option>1980s-1996 - Davidson & Associates</option>
                  <option>1997-2004 - Neurosmith</option>
                  <option>2001-2009 - Ugobe</option>
                  <option>2009-2017 - Later Ventures</option>
                  <option>Unknown / Multiple Eras</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                  Specific Date (Optional)
                </label>
                <input
                  type="date"
                  className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                Tags (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g., robotics, code, patent, mentorship, neurosmith (comma-separated)"
                className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300 placeholder-memorial-gray-600"
              />
              <p className="text-sm text-memorial-gray-500 mt-1">
                Use hashtags or comma-separated tags to help categorize this artifact
              </p>
            </div>

            {/* Related People */}
            <div>
              <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                Related People (Optional)
              </label>
              <input
                type="text"
                placeholder="Names of people involved with or mentioned in this artifact"
                className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300 placeholder-memorial-gray-600"
              />
            </div>

            {/* Your Information */}
            <div className="border-t border-memorial-gray-800 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-memorial-gray-200 mb-4">
                Your Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="How should we credit you?"
                    className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300 placeholder-memorial-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-memorial-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="For follow-up questions"
                    className="w-full bg-memorial-gray-800 border border-memorial-gray-700 rounded-lg px-4 py-2 text-memorial-gray-300 placeholder-memorial-gray-600"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 bg-memorial-gray-800 border-memorial-gray-700 rounded"
                  />
                  <span className="text-sm text-memorial-gray-400">
                    I have the right to share this artifact and grant permission for it to be displayed
                    on this memorial website. I understand all submissions will be reviewed by the family
                    before being published.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled
              className="w-full bg-memorial-accent-purple text-white py-3 rounded-lg font-medium opacity-50 cursor-not-allowed"
            >
              Submit Artifact (Coming Soon)
            </button>
          </div>
        </section>

        {/* Guidelines */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-memorial-gray-50">
            Submission Guidelines
          </h2>
          <div className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-6">
            <ul className="space-y-4 text-memorial-gray-300">
              <li className="flex items-start">
                <span className="text-memorial-accent-purple mr-3 font-bold">✓</span>
                <span>
                  <strong className="text-memorial-gray-200">Authenticity:</strong> Only submit artifacts
                  you have personal knowledge of or permission to share
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-purple mr-3 font-bold">✓</span>
                <span>
                  <strong className="text-memorial-gray-200">Context Matters:</strong> Provide as much
                  background as possible - when, where, why, and how this artifact came to be
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-purple mr-3 font-bold">✓</span>
                <span>
                  <strong className="text-memorial-gray-200">Quality:</strong> For physical artifacts,
                  please provide high-resolution scans or photos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-purple mr-3 font-bold">✓</span>
                <span>
                  <strong className="text-memorial-gray-200">Copyright:</strong> Ensure you have rights
                  to share the artifact or that it falls under fair use for memorial purposes
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-purple mr-3 font-bold">✓</span>
                <span>
                  <strong className="text-memorial-gray-200">Review Process:</strong> All submissions
                  will be reviewed by the family. We may contact you for additional information
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Artifact Categories */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-memorial-gray-50">
            Types of Artifacts We're Looking For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-memorial-accent-blue mb-3">
                💻 Code & Software
              </h3>
              <p className="text-sm text-memorial-gray-400">
                Source code snippets, software he wrote, technical documents, algorithms, or system designs
              </p>
            </div>
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-memorial-accent-purple mb-3">
                ✉️ Correspondence
              </h3>
              <p className="text-sm text-memorial-gray-400">
                Letters, emails, notes, or other written communication to/from John
              </p>
            </div>
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-memorial-accent-gold mb-3">
                ✍️ Creative Writing
              </h3>
              <p className="text-sm text-memorial-gray-400">
                Poems, essays, blog posts, technical articles, or any other writing by John
              </p>
            </div>
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-memorial-accent-blue mb-3">
                📄 Documents
              </h3>
              <p className="text-sm text-memorial-gray-400">
                Patents, presentations, whitepapers, research papers, or technical documentation
              </p>
            </div>
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-memorial-accent-purple mb-3">
                🎨 Designs & Schematics
              </h3>
              <p className="text-sm text-memorial-gray-400">
                Product designs, circuit diagrams, sketches, CAD files, or engineering drawings
              </p>
            </div>
            <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-memorial-accent-gold mb-3">
                🎥 Media
              </h3>
              <p className="text-sm text-memorial-gray-400">
                Audio recordings, video clips, photographs of documents, or other multimedia artifacts
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
