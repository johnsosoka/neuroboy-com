import { BookOpen, Send, Database } from 'lucide-react'

const exampleStories = [
  {
    title: 'The Barefoot Innovator',
    author: 'A Former Colleague',
    date: 'Example Story',
    content: 'John had this wonderful habit of walking around the office barefoot. It wasn\'t just quirky—it was a statement about being authentic and comfortable in your own skin. He taught us that innovation doesn\'t require formality; it requires genuine passion and openness.',
  },
  {
    title: 'Patience in Problem-Solving',
    author: 'An Engineer',
    date: 'Example Story',
    content: 'I was struggling with a particularly complex robotics algorithm when John sat down with me. For two hours, he patiently walked me through different approaches, never once making me feel inadequate. His mentorship changed not just how I code, but how I think about problems.',
  },
  {
    title: 'Making Technology Human',
    author: 'A Designer',
    date: 'Example Story',
    content: 'During Pleo\'s development, John constantly reminded us: "This isn\'t just a robot—it\'s a companion." He pushed us to think beyond technical specifications and consider the emotional connections people would form. That human-centered approach defined everything we built.',
  },
]

export default function Stories() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-5xl font-bold mb-4 text-memorial-gray-50">
        Personal Stories & Memories
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        Share your memories and read how John touched lives
      </p>

      {/* Coming Soon Notice */}
      <div className="bg-memorial-gray-900 border border-memorial-accent-blue rounded-lg p-8 mb-12">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-memorial-accent-blue/10 rounded-full">
              <BookOpen className="text-memorial-accent-blue" size={24} />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-memorial-gray-50 mb-3">
              Story Submissions Opening Soon
            </h2>
            <p className="text-memorial-gray-300 leading-relaxed mb-4">
              We're building a platform where friends, colleagues, and those whose lives
              John touched can share their personal stories and memories. All submissions
              will be moderated to maintain the respectful nature of this memorial.
            </p>
            <div className="flex items-center gap-4 text-sm text-memorial-gray-500">
              <div className="flex items-center gap-2">
                <Send size={16} />
                <span>Authenticated submissions</span>
              </div>
              <div className="flex items-center gap-2">
                <Database size={16} />
                <span>Moderated content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Stories */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-memorial-gray-50 mb-6">
          Example Stories
        </h2>
        <p className="text-memorial-gray-400 mb-6">
          Here are some examples of the types of stories that will be featured:
        </p>

        <div className="space-y-8">
          {exampleStories.map((story, index) => (
            <StoryCard key={index} story={story} />
          ))}
        </div>
      </div>

      {/* Submission Guidelines Preview */}
      <div className="bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 p-8">
        <h2 className="text-2xl font-semibold text-memorial-gray-50 mb-4">
          Future Submission Guidelines
        </h2>
        <div className="text-memorial-gray-300 space-y-3">
          <p>When story submissions open, we'll ask contributors to:</p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start">
              <span className="text-memorial-accent-blue mr-2">•</span>
              <span>Share authentic, respectful memories</span>
            </li>
            <li className="flex items-start">
              <span className="text-memorial-accent-blue mr-2">•</span>
              <span>Include your name and relationship to John (optional anonymity)</span>
            </li>
            <li className="flex items-start">
              <span className="text-memorial-accent-blue mr-2">•</span>
              <span>Focus on specific moments or lessons learned</span>
            </li>
            <li className="flex items-start">
              <span className="text-memorial-accent-blue mr-2">•</span>
              <span>Authenticate via AWS Cognito for security</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Implementation Note */}
      <div className="mt-8 p-6 bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg">
        <h3 className="text-sm font-semibold text-memorial-gray-400 uppercase tracking-wider mb-2">
          Technical Implementation
        </h3>
        <p className="text-memorial-gray-500 text-sm">
          Story submissions will be powered by AWS Cognito for authentication, stored in
          DynamoDB, and moderated through Python Lambda functions accessible via API Gateway.
          The frontend will dynamically fetch and display approved stories.
        </p>
      </div>
    </div>
  )
}

function StoryCard({ story }: { story: typeof exampleStories[0] }) {
  return (
    <div className="bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 p-6 hover:border-memorial-accent-blue/50 transition-colors">
      <h3 className="text-2xl font-semibold text-memorial-gray-50 mb-2">
        {story.title}
      </h3>
      <div className="flex items-center gap-3 text-sm text-memorial-gray-500 mb-4">
        <span>{story.author}</span>
        <span className="text-memorial-gray-700">•</span>
        <span className="italic">{story.date}</span>
      </div>
      <p className="text-memorial-gray-300 leading-relaxed">
        {story.content}
      </p>
    </div>
  )
}
