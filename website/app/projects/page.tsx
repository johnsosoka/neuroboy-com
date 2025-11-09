import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Pleo',
    company: 'Ugobe',
    years: '2006-2009',
    description: 'A revolutionary robotic dinosaur that exhibited life-like behaviors and emotions. Pleo could learn, adapt, and form genuine bonds with its owners. As CTO, John led the technical development that made Pleo one of the most successful consumer robots of its time.',
    achievements: [
      'Autonomous learning and behavior adaptation',
      'Realistic movements and emotional expressions',
      'Multiple awards for innovation in robotics',
      'Worldwide commercial success',
    ],
    link: 'https://en.wikipedia.org/wiki/Pleo',
    imagePlaceholder: '/images/pleo.jpg',
  },
  {
    title: 'Musini',
    company: 'Neurosmith',
    years: '1998',
    description: 'An innovative musical toy that introduced children to music creation through intuitive touch and movement. The Musini made music accessible and fun, embodying John\'s philosophy of making technology approachable for all ages.',
    achievements: [
      'Touch-responsive music creation',
      'Educational yet entertaining design',
      'Pioneer in educational technology toys',
      'Made music creation accessible to young children',
    ],
    imagePlaceholder: '/images/musini.jpg',
  },
  {
    title: 'Vita Robotica',
    company: 'Vita Robotica',
    years: '2010s',
    description: 'Advanced robot brain implementation work that pushed the boundaries of autonomous robotic systems. John contributed his expertise to developing more sophisticated and responsive robotic intelligence.',
    achievements: [
      'Advanced robot brain systems',
      'Autonomous behavior algorithms',
      'Cutting-edge AI integration',
    ],
    imagePlaceholder: '/images/vita-robotica.jpg',
  },
  {
    title: 'Pulse-Robotics robo-OS',
    company: 'Pulse-Robotics',
    years: '2010s',
    description: 'Development of a sophisticated robot operating system that provided the foundational software for advanced robotic behaviors and interactions. This work laid groundwork for next-generation autonomous robots.',
    achievements: [
      'Comprehensive robot operating system',
      'Modular architecture for diverse applications',
      'Advanced behavior management',
      'Foundation for future robotic systems',
    ],
    imagePlaceholder: '/images/pulse-robotics.jpg',
  },
  {
    title: 'Technology Applications Group',
    company: 'TAG',
    years: '1990s',
    description: 'Early career work applying cutting-edge technology to practical problems. This experience established John\'s approach to technology development and his commitment to making complex systems accessible.',
    achievements: [
      'Practical application of emerging technologies',
      'Foundation for future innovations',
      'Cross-disciplinary problem solving',
    ],
    imagePlaceholder: '/images/tech-applications.jpg',
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-5xl font-bold mb-4 text-memorial-gray-50">
        Projects
      </h1>
      <p className="text-xl text-memorial-gray-400 mb-12">
        Innovative products and technologies that defined a career
      </p>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="bg-memorial-gray-900 rounded-lg border border-memorial-gray-800 overflow-hidden hover:border-memorial-accent-blue transition-all duration-300 hover:shadow-lg hover:shadow-memorial-accent-blue/10">
      <div className="grid md:grid-cols-3 gap-6 p-8">
        {/* Image placeholder */}
        <div className="md:col-span-1">
          <div className="aspect-square bg-memorial-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-center p-4">
              <p className="text-memorial-gray-600 text-sm">
                Image placeholder
              </p>
              <p className="text-memorial-gray-700 text-xs mt-2">
                {project.imagePlaceholder}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold text-memorial-gray-50 mb-2">
                {project.title}
              </h2>
              <div className="flex items-center gap-3 text-memorial-gray-400">
                <span className="font-medium">{project.company}</span>
                <span className="text-memorial-gray-600">•</span>
                <span>{project.years}</span>
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-memorial-accent-blue hover:text-memorial-accent-purple transition-colors"
                aria-label={`Learn more about ${project.title}`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>

          <p className="text-memorial-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <div>
            <h3 className="text-sm font-semibold text-memorial-gray-400 uppercase tracking-wider mb-3">
              Key Achievements
            </h3>
            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start text-memorial-gray-300"
                >
                  <span className="text-memorial-accent-blue mr-2">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
