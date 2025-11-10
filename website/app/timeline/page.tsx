const timelineEvents = [
  {
    year: '1953',
    title: 'Birth',
    description: 'John R. Sosoka II is born on June 21st, beginning a life that would inspire countless innovators.',
  },
  {
    year: '1981',
    title: 'Sosoka and Associates & Early Mentorship',
    description: 'Founded engineering consulting firm in Long Beach, California. Kent Peterson joins at age 17, beginning a mentorship that would shape the industry.',
  },
  {
    year: '1980s',
    title: 'Technology Application Group (TAG)',
    description: 'Founded TAG, a multimedia courseware and development company specializing in interactive applications, establishing expertise in educational technology.',
  },
  {
    year: '1980s-1996',
    title: 'Davidson & Associates - Chief Technology Officer',
    description: 'Led software development for the Math Blaster franchise. Under his leadership, Davidson achieved nearly $60 million in sales with Math Blaster selling over 1.6 million copies.',
  },
  {
    year: '1991',
    title: 'P2S Engineering Partnership',
    description: 'Kent and Kevin Peterson partnered with John to form P2S Engineering, which has grown into a major firm with 175+ employees.',
  },
  {
    year: '1994',
    title: 'Blizzard Entertainment Acquisition',
    description: 'Davidson & Associates acquired Blizzard Entertainment (then Chaos Studios) for $6.75 million, enabling the creation of legendary franchises including Warcraft, StarCraft, and Diablo.',
  },
  {
    year: '1996',
    title: 'Davidson Acquired by CUC International',
    description: 'Davidson & Associates was acquired by CUC International for $1.14 billion in stock, marking a major milestone in educational software.',
  },
  {
    year: '1997',
    title: 'Neurosmith Co-Founded',
    description: 'Co-founded Neurosmith with Brooke Abercrombie in Long Beach, California, pioneering interactive learning toys for infants and toddlers.',
  },
  {
    year: '1998-1999',
    title: 'Music Blocks Success',
    description: 'Music Blocks became a massive success, selling 100,000 units at $69.99 each and generating $5 million in revenue after overcoming initial manufacturing challenges.',
  },
  {
    year: '2002',
    title: 'Musini Wins "Most Innovative Toy" Award',
    description: 'Musini won the prestigious "Most Innovative Toy of the Year" award at the 2002 T.O.T.Y. Awards, allowing children ages 3-8 to explore five musical styles with interactive lighting.',
  },
  {
    year: '2003-2004',
    title: 'Neurosmith Acquired',
    description: 'Neurosmith, having grown to $12 million in peak sales, was acquired by Small World Toys with support from a $16.5 million credit facility.',
  },
  {
    year: '2001-2009',
    title: 'Ugobe Co-Founded',
    description: 'Co-founded Ugobe with Caleb Chung and Derek Dotson to create lifelike robotic companions. Served as CTO and head of Research & Development.',
  },
  {
    year: 'February 7, 2006',
    title: 'Pleo Unveiled at DEMO Conference',
    description: 'Pleo, an autonomous robotic baby Camarasaurus with 38 sensors, 14 motors, and stunning organic movement, was unveiled in Scottsdale, Arizona.',
  },
  {
    year: '2007',
    title: 'Pleo Commercial Launch',
    description: 'Pleo shipped at $349 and became one of the most successful consumer robots, generating approximately $20 million in sales with its lifelike behaviors and "Life OS" platform.',
  },
  {
    year: 'April 2009',
    title: 'Ugobe Bankruptcy',
    description: 'Despite Pleo\'s technical success, Ugobe faced financial difficulties during the economic crisis and filed for Chapter 7 bankruptcy. Jetta later acquired Pleo\'s rights at auction.',
  },
  {
    year: 'Post-2009',
    title: 'Vita Robotica & Pulse-Robotics Founded',
    description: 'Founded two complementary companies: Vita Robotica for developing advanced robot brain systems and Pulse-Robotics for robotic operating systems, exploring therapeutic applications.',
  },
  {
    year: 'April 2013',
    title: 'LumiLife Co-Founded',
    description: 'Co-founded LumiLife in Berkeley, California, developing an innovative LED lighting system with Bluetooth Smart connectivity, motion sensors, and 16 million+ color options.',
  },
  {
    year: '2017',
    title: 'Posterior Cortical Atrophy Diagnosis',
    description: 'Diagnosed with Posterior Cortical Atrophy (PCA), a rare form of Alzheimer\'s disease affecting the visual cortex. Despite this, John continued to inspire and contribute.',
  },
  {
    year: 'July 23, 2021',
    title: 'Passing & Enduring Legacy',
    description: 'John passed away in Eagle, Idaho, at age 68, leaving behind a profound legacy in educational technology, interactive toys, robotics, and mentorship that continues to inspire.',
  },
]

export default function Timeline() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-5xl font-bold mb-4 text-memorial-gray-50">
        Timeline
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        Key milestones in John's remarkable journey
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-memorial-gray-800" />

        {/* Timeline events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={index}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TimelineEvent({
  event,
  index,
}: {
  event: typeof timelineEvents[0]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-memorial-accent-blue border-4 border-memorial-dark transform -translate-x-1/2 z-10" />

      {/* Content */}
      <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <div className="bg-memorial-gray-900 rounded-lg p-6 border border-memorial-gray-800 hover:border-memorial-accent-blue transition-all duration-300 hover:shadow-lg hover:shadow-memorial-accent-blue/10">
          <div className="text-2xl font-bold text-memorial-accent-blue mb-2">
            {event.year}
          </div>
          <h3 className="text-xl font-semibold text-memorial-gray-50 mb-2">
            {event.title}
          </h3>
          <p className="text-memorial-gray-400 leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  )
}
