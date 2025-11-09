const timelineEvents = [
  {
    year: '1953',
    title: 'Birth',
    description: 'John R. Sosoka II is born, beginning a life that would inspire countless innovators.',
  },
  {
    year: '1990s',
    title: 'Technology Applications Group',
    description: 'Early career work applying cutting-edge technology to practical solutions.',
  },
  {
    year: '1995',
    title: 'Neurosmith Founded',
    description: 'Co-founded Neurosmith, pioneering educational technology toys.',
  },
  {
    year: '1998',
    title: 'Musini Launch',
    description: 'Released the Musini, a revolutionary musical toy that made music creation accessible to children.',
  },
  {
    year: '2001',
    title: 'Ugobe - Chief Technology Officer',
    description: 'Joined Ugobe as CTO to develop advanced consumer robotics.',
  },
  {
    year: '2006',
    title: 'Pleo Launch',
    description: 'Led the technical development of Pleo, a robotic dinosaur that became a worldwide phenomenon.',
  },
  {
    year: '2010s',
    title: 'Vita Robotica',
    description: 'Worked on implementing advanced robot brain systems.',
  },
  {
    year: '2010s',
    title: 'Pulse-Robotics',
    description: 'Developed sophisticated robot operating systems (robo-OS).',
  },
  {
    year: '2015+',
    title: 'Continued Innovation & Mentorship',
    description: 'Despite his PCA diagnosis, John continued mentoring and contributing to the robotics community.',
  },
  {
    year: '2021',
    title: 'Legacy Lives On',
    description: 'John passed away, leaving behind a legacy of innovation, kindness, and inspiration.',
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
