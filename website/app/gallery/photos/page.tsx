export default function PhotoGalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Photo Gallery
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        A collection of personal photographs celebrating John's life, relationships, and the moments that defined his journey.
      </p>

      <div className="max-w-6xl mx-auto">
        {/* Professional Moments Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue border-l-4 border-memorial-accent-blue pl-4">
            Professional Moments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoCard
              src="/images/personal/john-pleo-on-shoulder.jpg"
              alt="John with Pleo on his shoulder"
              caption="John with Pleo, the autonomous robotic dinosaur he helped create at Ugobe"
            />
            <PhotoCard
              src="/images/personal/2010-john-and-caleb-chung.jpeg"
              alt="John with Caleb Chung"
              caption="John with Caleb Chung, co-founder of Ugobe, 2010"
            />
            <PhotoCard
              src="/images/personal/2010-john-in-hong-kong.jpg"
              alt="John in Hong Kong"
              caption="John on a business trip to Hong Kong, 2010"
            />
            <PhotoCard
              src="/images/personal/john-in-his-lab.jpg"
              alt="John working in his laboratory"
              caption="John at work in his lab, where innovation happened"
            />
          </div>
        </section>

        {/* Adventures & Life Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-purple border-l-4 border-memorial-accent-purple pl-4">
            Adventures & Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoCard
              src="/images/personal/champagne-hot-air-balloon.jpeg"
              alt="John on a hot air balloon adventure"
              caption="Champagne celebration aboard a hot air balloon"
            />
            <PhotoCard
              src="/images/personal/john-backpacking.jpg"
              alt="John on a backpacking trip"
              caption="John on a backpacking adventure, embracing the outdoors"
            />
            <PhotoCard
              src="/images/personal/john-friends-windsurfing.jpeg"
              alt="John and friends windsurfing"
              caption="John and friends enjoying windsurfing together"
            />
          </div>
        </section>

        {/* Sailing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-gold border-l-4 border-memorial-accent-gold pl-4">
            Sailing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoCard
              src="/images/personal/sailing-john-captain-with-dave.jpg"
              alt="John at the helm with Dave"
              caption="John at the helm with Dave, commanding the vessel"
            />
            <PhotoCard
              src="/images/personal/sailing-john-ding.jpg"
              alt="John sailing his dinghy"
              caption="John sailing his dinghy in Idaho waters"
            />
          </div>
        </section>

        {/* Family & Friends Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50 border-l-4 border-memorial-gray-50 pl-4">
            Family & Friends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PhotoCard
              src="/images/personal/john-with-family.jpg"
              alt="John with his family"
              caption="John with his loving family"
            />
            <PhotoCard
              src="/images/personal/john-with-lifetime-friends.jpg"
              alt="John with lifetime friends"
              caption="John surrounded by lifetime friends"
            />
            <PhotoCard
              src="/images/personal/john-brooke-deb-lego-jet.jpeg"
              alt="John, Brooke, and Deb with Lego jet"
              caption="John, Brooke, and Deb with an impressive Lego creation"
            />
            <PhotoCard
              src="/images/personal/john-his-irish-wolfhound.jpeg"
              alt="John with his Irish Wolfhound"
              caption="John with his beloved Irish Wolfhound"
            />
          </div>
        </section>

        {/* Community Contributions Notice */}
        <div className="mt-12">
          <div className="bg-memorial-accent-blue/10 border border-memorial-accent-blue rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-memorial-accent-blue mb-3">
              More Photos Coming Soon
            </h2>
            <p className="text-memorial-gray-300 leading-relaxed">
              We're building a community photo gallery where family, friends, colleagues, and anyone whose life John touched can share their memories through photographs. These initial photos will be re-uploaded alongside new contributions from the community.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

function PhotoCard({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="group bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg overflow-hidden hover:border-memorial-accent-blue transition-colors">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-memorial-gray-400 leading-relaxed">
          {caption}
        </p>
      </div>
    </div>
  )
}
