import { MessageCircle, Heart, Shield } from 'lucide-react'

const exampleTributes = [
  {
    name: 'Sarah Mitchell',
    relationship: 'Former Colleague at Ugobe',
    date: 'Example Tribute',
    message: 'John was more than a brilliant engineer—he was a kind soul who made everyone feel valued. His legacy lives on in every robot that brings joy to a child.',
  },
  {
    name: 'Michael Chen',
    relationship: 'Mentee',
    date: 'Example Tribute',
    message: 'Thank you for believing in me when I didn\'t believe in myself. Your patience and wisdom shaped my career and my character. Rest in peace, mentor and friend.',
  },
  {
    name: 'Jennifer Rodriguez',
    relationship: 'Industry Peer',
    date: 'Example Tribute',
    message: 'The robotics community lost a giant. John\'s vision and generosity inspired an entire generation of engineers. His impact will be felt for decades to come.',
  },
]

export default function Guestbook() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-5xl font-bold mb-4 text-memorial-gray-50">
        Guestbook & Tributes
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        Leave your message of remembrance and read tributes from others
      </p>

      {/* Coming Soon Notice */}
      <div className="bg-memorial-gray-900 border border-memorial-accent-blue rounded-lg p-8 mb-12">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-memorial-accent-blue/10 rounded-full">
              <MessageCircle className="text-memorial-accent-blue" size={24} />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-memorial-gray-50 mb-3">
              Guestbook Opening Soon
            </h2>
            <p className="text-memorial-gray-300 leading-relaxed mb-4">
              We're creating a digital guestbook where you can leave messages of
              remembrance, share condolences, and celebrate John's life. All messages
              will be moderated to maintain a respectful and supportive environment.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-memorial-gray-500">
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-memorial-accent-blue" />
                <span>Share your tribute</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-memorial-accent-blue" />
                <span>Moderated for respect</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-memorial-accent-blue" />
                <span>Public or anonymous</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Tributes */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-memorial-gray-50 mb-6">
          Example Tributes
        </h2>
        <p className="text-memorial-gray-400 mb-6">
          Here are examples of the types of messages that will appear in the guestbook:
        </p>

        <div className="space-y-6">
          {exampleTributes.map((tribute, index) => (
            <TributeCard key={index} tribute={tribute} />
          ))}
        </div>
      </div>

      {/* How to Leave a Tribute */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 p-6">
          <h2 className="text-xl font-semibold text-memorial-gray-50 mb-4">
            How to Leave a Tribute
          </h2>
          <div className="text-memorial-gray-300 space-y-3 text-sm">
            <p>When the guestbook opens, you'll be able to:</p>
            <ol className="space-y-2 ml-6 list-decimal">
              <li>Sign in securely (or post anonymously)</li>
              <li>Write your message of remembrance</li>
              <li>Optionally include your relationship to John</li>
              <li>Submit for moderation</li>
              <li>See your message appear within 24-48 hours</li>
            </ol>
          </div>
        </div>

        <div className="bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 p-6">
          <h2 className="text-xl font-semibold text-memorial-gray-50 mb-4">
            Moderation Guidelines
          </h2>
          <div className="text-memorial-gray-300 space-y-2 text-sm">
            <p className="mb-3">We welcome heartfelt messages that:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-2">✓</span>
                <span>Share personal memories and reflections</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-2">✓</span>
                <span>Express condolences and support</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-2">✓</span>
                <span>Celebrate John's impact and legacy</span>
              </li>
              <li className="flex items-start">
                <span className="text-memorial-accent-blue mr-2">✓</span>
                <span>Maintain a respectful and supportive tone</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Implementation Note */}
      <div className="mt-8 p-6 bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg">
        <h3 className="text-sm font-semibold text-memorial-gray-400 uppercase tracking-wider mb-2">
          Technical Implementation
        </h3>
        <p className="text-memorial-gray-500 text-sm">
          Guestbook entries will be authenticated via AWS Cognito (or allow anonymous
          submissions), stored in DynamoDB, and moderated through Python Lambda functions
          via API Gateway. The frontend will fetch and display approved messages in real-time.
        </p>
      </div>
    </div>
  )
}

function TributeCard({ tribute }: { tribute: typeof exampleTributes[0] }) {
  return (
    <div className="bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-memorial-gray-800 rounded-full flex items-center justify-center text-memorial-accent-blue font-semibold">
            {tribute.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-memorial-gray-50">
                {tribute.name}
              </h3>
              <p className="text-sm text-memorial-gray-500">
                {tribute.relationship}
              </p>
            </div>
            <span className="text-xs text-memorial-gray-600 italic">
              {tribute.date}
            </span>
          </div>
          <p className="text-memorial-gray-300 leading-relaxed">
            {tribute.message}
          </p>
        </div>
      </div>
    </div>
  )
}
