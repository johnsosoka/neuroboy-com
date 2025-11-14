import { Image as ImageIcon, Upload, Server } from 'lucide-react'

const placeholderCategories = [
  {
    title: 'Professional Life',
    description: 'Photos from John\'s career in technology and robotics',
    icon: Server,
  },
  {
    title: 'Personal Moments',
    description: 'Candid moments and cherished memories',
    icon: ImageIcon,
  },
  {
    title: 'Legacy & Impact',
    description: 'Projects, products, and the lives he touched',
    icon: Upload,
  },
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-5xl font-bold mb-4 text-memorial-gray-50">
        Photo Gallery
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        A visual journey through John's life and legacy
      </p>

      {/* Coming Soon Notice */}
      <div className="bg-memorial-gray-900 border border-memorial-accent-blue rounded-lg p-8 mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-memorial-accent-blue/10 rounded-full mb-4">
          <ImageIcon className="text-memorial-accent-blue" size={32} />
        </div>
        <h2 className="text-2xl font-semibold text-memorial-gray-50 mb-3">
          Gallery Coming Soon
        </h2>
        <p className="text-memorial-gray-300 leading-relaxed max-w-2xl mx-auto mb-4">
          We're currently curating a collection of photos that celebrate John's life,
          work, and the impact he had on those around him. This gallery will feature
          images from his personal and professional journey.
        </p>
        <div className="text-sm text-memorial-gray-500 mt-6">
          <p className="mb-2">Future features will include:</p>
          <ul className="inline-block text-left space-y-1">
            <li>• Photo browsing by category and timeline</li>
            <li>• High-resolution image viewing</li>
            <li>• Community photo submissions (moderated)</li>
            <li>• AWS S3-backed storage with CloudFront delivery</li>
          </ul>
        </div>
      </div>

      {/* Planned Categories */}
      <div>
        <h2 className="text-2xl font-semibold text-memorial-gray-50 mb-6">
          Planned Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {placeholderCategories.map((category, index) => (
            <div
              key={index}
              className="bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-memorial-gray-800 rounded-full mb-4">
                <category.icon className="text-memorial-accent-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
                {category.title}
              </h3>
              <p className="text-memorial-gray-400 text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Implementation Note */}
      <div className="mt-12 p-6 bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg">
        <h3 className="text-sm font-semibold text-memorial-gray-400 uppercase tracking-wider mb-2">
          Technical Implementation
        </h3>
        <p className="text-memorial-gray-500 text-sm">
          The photo gallery will be powered by AWS S3 for storage, CloudFront for global
          delivery, and will integrate with Python Lambda functions via API Gateway for
          dynamic features like photo uploads and moderation.
        </p>
      </div>
    </div>
  )
}
