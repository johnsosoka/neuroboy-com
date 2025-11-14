export default function HikingOutdoorsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-memorial-gray-50">
        Hiking & the Outdoors
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12 max-w-3xl">
        John lived outside as much as he could. From California ski seasons to Idaho wilderness,
        he found clarity and purpose in wild places—backpacking through the Frank Church Wilderness,
        snowshoeing to mountain yurts, and earning summits with determination and joy.
      </p>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="aspect-[16/9] overflow-hidden rounded-xl border-2 border-memorial-gray-800 shadow-2xl">
          <img
            src="/images/personal/outdoors-backpacking-mountains.jpg"
            alt="John backpacking in snowy mountains"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-center text-sm text-memorial-gray-400 mt-4 italic">
          Backpacking in the Idaho wilderness
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Mountain Adventures */}
        <section className="border-l-4 border-memorial-accent-blue pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-blue">
            Mountain Adventures
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              After California ski seasons—mostly at Big Bear—and an ACL tear that slowed but never stopped him,
              John kept pushing into wild places. Idaho became his canvas: steady foothills hikes with his dogs,
              regular 3–6 mile walks around town, and weekend escapes that turned into traditions.
            </p>

            <p>
              In Idaho he kept backpacking, often returning to the Frank Church–River of No Return Wilderness.
              He loved the logistics and rhythm of llama packing on multi-night trips—moving farther with lighter
              loads, sharing the trail with sure-footed companions.
            </p>

            {/* Camping with Bob Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-camping-with-bob.jpg"
                    alt="John camping in the mountains with friend Bob Sesek"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-memorial-gray-400 mt-2">
                  Camping with friend Bob Sesek
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-montana-walk-2004.jpeg"
                    alt="John on a Montana trail walk in 2004"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-memorial-gray-400 mt-2">
                  Montana trail, 2004
                </p>
              </div>
            </div>

            <p>
              He also chased summits. Roughneck Peak was a favorite kind of challenge: route-finding, changing
              weather, and the satisfaction of earning a ridge with your legs and your wits. Those trips weren't
              about ticking lists; they were about time—time with friends and family, time with his dogs, and
              time to breathe.
            </p>
          </div>
        </section>

        {/* Winter Pursuits */}
        <section className="border-l-4 border-memorial-accent-purple pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-purple">
            Winter Pursuits
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Winters didn't end the season; they reshaped it. John snowshoed into yurts, savoring quiet miles,
              hot meals, and the first light on untracked snow. The cold never deterred him—it was just another
              condition to adapt to, another reason to gear up and head out.
            </p>

            {/* Skiing Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-skiing.jpg"
                    alt="John skiing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-memorial-gray-400 mt-2">
                  On the slopes
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-barefoot-ski.jpg"
                    alt="John at a ski resort"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center text-sm text-memorial-gray-400 mt-2">
                  At the ski resort
                </p>
              </div>
            </div>

            <p>
              His dogs were constant companions on these adventures. Whether hiking the foothills in summer or
              bounding through fresh powder in winter, they shared his enthusiasm for the outdoors and his
              unwillingness to stay inside when there was a trail to explore.
            </p>

            {/* Dog in Snow Image */}
            <div className="my-8 max-w-xl mx-auto">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-memorial-gray-700 shadow-xl">
                <img
                  src="/images/personal/outdoors-dog-in-snow.jpg"
                  alt="John with his dog in the snow"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-memorial-gray-400 mt-3 italic">
                With his faithful companion in the snow
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-memorial-gray-900/50 border border-memorial-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200">
            Nature as Operating System
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              Nature informed John's work as much as his weekends. He drew engineering lessons from the trail:
              simple systems survive; feedback loops matter; redundancy is not waste; constraints are design.
              He approached problems like backcountry routes—plan carefully, travel light, adapt in real time,
              and leave things better than you found them.
            </p>
            <p>
              The result was a life stitched together by movement: countless afternoons in the Boise foothills,
              long backpacks through the Frank, llama trains on dusty switchbacks, snowshoe tracks to warm yurts,
              and the occasional summit day that felt like a page marker in a larger story.
            </p>
            <p className="text-memorial-accent-blue font-medium">
              Outdoors wasn't an escape for John—it was the operating system he ran on.
            </p>
          </div>
        </section>

        {/* Additional Activities */}
        <section className="border-l-4 border-memorial-accent-gold pl-6">
          <h2 className="text-3xl font-bold mb-6 text-memorial-accent-gold">
            Water & Community
          </h2>
          <div className="text-lg text-memorial-gray-300 leading-relaxed space-y-4">
            <p>
              John's love for the outdoors extended beyond mountains and trails. He found joy in windsurfing,
              combining his love of water sports with the challenge of harnessing wind and waves. The athletic
              and technical demands of windsurfing appealed to the same part of him that loved sailing and
              problem-solving.
            </p>

            {/* Windsurfing Image */}
            <div className="my-8 max-w-xl mx-auto">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border-2 border-memorial-gray-700 shadow-xl">
                <img
                  src="/images/personal/outdoors-windsurfing.jpg"
                  alt="John windsurfing"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-memorial-gray-400 mt-3 italic">
                Windsurfing
              </p>
            </div>

            <p>
              He also valued community and social outdoor activities. Whether playing volleyball with friends
              or organizing group hikes, John understood that outdoor experiences were often best when shared.
              These activities combined his love of movement, competition, and connection with others.
            </p>

            {/* Volleyball Image */}
            <div className="my-8 max-w-xl mx-auto">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                <img
                  src="/images/personal/outdoors-volleyball-1989.jpg"
                  alt="John playing volleyball, 1989"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-memorial-gray-400 mt-3 italic">
                Volleyball, 1989
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-memorial-gray-50">
            Outdoor Adventures Gallery
          </h2>
          <div className="bg-memorial-gray-900 border border-memorial-gray-800 rounded-lg p-8">
            <p className="text-memorial-gray-300 mb-6 leading-relaxed">
              A collection of photographs capturing John's outdoor adventures—from mountain trails to ski slopes,
              each image reflects his deep connection to nature and his endless enthusiasm for exploration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-backpacking-mountains.jpg"
                    alt="Backpacking in the mountains"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  Mountain backpacking
                </p>
              </div>

              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-camping-with-bob.jpg"
                    alt="Camping with Bob"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  Camping with friends
                </p>
              </div>

              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-skiing.jpg"
                    alt="Skiing"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  Skiing adventures
                </p>
              </div>

              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-dog-in-snow.jpg"
                    alt="With his dog in the snow"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  Trail companions
                </p>
              </div>

              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-windsurfing.jpg"
                    alt="Windsurfing"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  Windsurfing
                </p>
              </div>

              <div className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-memorial-gray-700">
                  <img
                    src="/images/personal/outdoors-adventure-moment.JPG"
                    alt="Outdoor adventure"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm text-memorial-gray-400 mt-2 text-center">
                  Adventure moment
                </p>
              </div>
            </div>
            <p className="text-sm text-memorial-gray-500 mt-6 text-center italic">
              More photos from John's outdoor adventures will be added as they are collected from family and friends
            </p>
          </div>
        </section>

        {/* Cross-link to Sailing */}
        <section className="bg-gradient-to-r from-memorial-gray-900 to-memorial-gray-800 border border-memorial-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-memorial-gray-200 text-center">
            More of John's Passions
          </h2>
          <div className="text-memorial-gray-300 leading-relaxed">
            <p className="text-center max-w-2xl mx-auto mb-4">
              John's love for the outdoors complemented his passion for sailing. Both pursuits shared common
              themes: respect for natural forces, careful planning, adaptation to conditions, and the joy of
              movement through wild spaces.
            </p>
            <div className="text-center">
              <a
                href="/sailing"
                className="inline-flex items-center text-memorial-accent-blue hover:text-memorial-accent-purple transition-colors"
              >
                <span className="text-lg font-medium">Explore John's Sailing Journey</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
