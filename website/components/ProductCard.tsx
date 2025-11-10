'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'

export interface Product {
  id: string
  name: string
  company: string
  year: string
  imagePath: string
  shortDescription: string
  fullDescription?: string
  awards?: string[]
  patents?: string[]
  impact?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg overflow-hidden hover:border-memorial-accent-blue transition-colors">
      {/* Product Image */}
      <div className="relative aspect-video bg-memorial-gray-800 flex items-center justify-center">
        {product.imagePath ? (
          <Image
            src={product.imagePath}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="text-center p-8">
            <svg
              className="w-16 h-16 mx-auto mb-3 text-memorial-gray-600"
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
            <p className="text-sm text-memorial-gray-500">
              Image placeholder for {product.name}
            </p>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-2xl font-bold text-memorial-gray-50">
              {product.name}
            </h3>
            <span className="text-sm font-semibold text-memorial-accent-blue bg-memorial-accent-blue/10 px-3 py-1 rounded">
              {product.year}
            </span>
          </div>
          <p className="text-memorial-accent-purple text-sm font-medium">
            {product.company}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-memorial-gray-300 leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {/* Expand/Collapse Button */}
        {(product.fullDescription || product.awards || product.patents || product.impact) && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-memorial-accent-blue hover:text-memorial-accent-blue/80 transition-colors text-sm font-medium"
          >
            {isExpanded ? (
              <>
                <span>Show less</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>Learn more</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}

        {/* Expanded Details */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-memorial-gray-800 space-y-6">
            {product.fullDescription && (
              <div>
                <h4 className="text-lg font-semibold text-memorial-gray-200 mb-2">
                  About
                </h4>
                <p className="text-memorial-gray-300 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>
            )}

            {product.awards && product.awards.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-memorial-gray-200 mb-2">
                  Awards & Recognition
                </h4>
                <ul className="space-y-2">
                  {product.awards.map((award, index) => (
                    <li
                      key={index}
                      className="flex items-start text-memorial-gray-300"
                    >
                      <span className="text-memorial-accent-gold mr-2">🏆</span>
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.patents && product.patents.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-memorial-gray-200 mb-2">
                  Patents
                </h4>
                <ul className="space-y-2">
                  {product.patents.map((patent, index) => (
                    <li
                      key={index}
                      className="text-memorial-gray-300 font-mono text-sm bg-memorial-gray-800/50 px-3 py-2 rounded"
                    >
                      {patent}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.impact && (
              <div>
                <h4 className="text-lg font-semibold text-memorial-gray-200 mb-2">
                  Impact & Legacy
                </h4>
                <p className="text-memorial-gray-300 leading-relaxed italic">
                  {product.impact}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
