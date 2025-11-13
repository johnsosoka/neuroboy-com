const timelineEvents = [
    {
        "year": "1953",
        "title": "Birth",
        "description": "John R. Sosoka II is born on June 21st, beginning a life of invention, curiosity, and kindness."
    },
    {
        "year": "1950s–1970s",
        "title": "Early Years",
        "description": "Raised in a family of engineers, machinists, and educators, John grew up in an environment that valued critical thinking and hands-on problem solving. From a young age he experimented with electronics, clever pranks, and small inventions—early signs of the creativity and technical brilliance that would define his life."
    },
    {
        "year": "1971–1975",
        "title": "University Years",
        "description": "Studies computer science and cognitive science at CSU Long Beach and UC Irvine, laying the foundation for a career that would bridge art, engineering, and cognition."
    },
    {
        "year": "1978",
        "title": "Founds Technology Application Group (TAG)",
        "description": "Launches TAG, a high-tech consulting firm advancing user interface systems, industrial automation, and early AI-driven control technologies."
    },
    {
        "year": "1978–1990",
        "title": "Early Innovations at TAG",
        "description": "Develops a multi-threaded windowing system for DOS PCs, industrial automation for major manufacturers, avionics documentation for Boeing, and control systems used by federal research labs."
    },
    {
        "year": "1990–1992",
        "title": "Director of Graphics, Emerson Technologies",
        "description": "Leads graphics and UI innovation for Emerson’s advanced TI-based multimedia PC. Achievements include streaming video on an Intel 386, a pioneering video-agent interface, and early video compression techniques later echoed in Apple QuickTime."
    },
    {
        "year": "1992–1994",
        "title": "Director of Graphics, Davidson & Associates",
        "description": "Builds a state-of-the-art multimedia studio and modernizes graphics pipelines for one of the largest educational software publishers in the world."
    },
    {
        "year": "1994–1997",
        "title": "Chief Technology Officer, Davidson & Associates",
        "description": "Leads engineering for nearly 100 commercial titles, including the Math Blaster franchise. Architects the ATLAS multimedia engine, and participates in due diligence that funded Blizzard Entertainment and Knowledge Adventure."
    },
    {
        "year": "1994",
        "title": "Special Thanks – Warcraft: Orcs & Humans",
        "description": "Credited in Blizzard’s groundbreaking Warcraft: Orcs & Humans for his support of emergent game technologies during the Davidson era."
    },
    {
        "year": "1996",
        "title": "Davidson Sold for $1.14 Billion",
        "description": "As CTO, helps guide Davidson & Associates through one of the largest ed-tech acquisitions in history."
    },
    {
        "year": "1997",
        "title": "Co-Founds Neurosmith",
        "description": "Launches Neurosmith, redefining early childhood learning with cognitive-science-driven interactive toys such as Music Blocks and Little Linguist."
    },
    {
        "year": "1998–1999",
        "title": "Music Blocks Breakout Success",
        "description": "Music Blocks becomes a landmark STEM toy, selling over 100,000 units and earning widespread acclaim for its child-directed exploration model."
    },
    {
        "year": "2002",
        "title": "Musini Wins Most Innovative Toy of the Year",
        "description": "Neurosmith's Musini receives the T.O.T.Y. Award for Most Innovative Toy of the Year, cementing John’s legacy in educational play."
    },
    {
        "year": "2003",
        "title": "LEGO Collaboration",
        "description": "Leads Neurosmith’s joint development project with LEGO, merging digital learning concepts with physical play systems."
    },
    {
        "year": "2003–2004",
        "title": "Research Sabbatical",
        "description": "Steps back to study biological and artificial cognition—research that will directly feed into the creation of one of the most beloved consumer robots ever made."
    },
    {
        "year": "September 2004",
        "title": "Neurosmith Assets Acquired",
        "description": "Neurosmith’s product line and IP are acquired by Small World Kids, supported by a $16.5 million credit facility to expand the brand."
    },
    {
        "year": "2004–2009",
        "title": "Co-Founds Ugobe Lifeforms",
        "description": "Co-founds Ugobe with Caleb Chung and Derek Dotson. As CTO, John architects LifeOS, the artificial intelligence system behind Pleo—the first lifelike robotic companion designed for emotional interaction rather than utility."
    },
    {
        "year": "February 2006",
        "title": "Pleo Unveiled at DEMO",
        "description": "Pleo debuts at DEMO 2006, winning both the INNY and DEMOgod awards for its groundbreaking synthesis of AI, mechatronics, and character design."
    },
    {
        "year": "2006",
        "title": "Idaho Innovation Award",
        "description": "Ugobe wins the inaugural Idaho Innovation Award in the mechanical category for its pioneering lifelike robotics."
    },
    {
        "year": "2007",
        "title": "Pleo Commercial Release",
        "description": "Pleo launches globally, earning widespread acclaim and becoming one of the most iconic consumer robots of its era."
    },
    {
        "year": "April 2009",
        "title": "Ugobe Bankruptcy",
        "description": "The global economic crisis forces Ugobe to file for Chapter 7. Pleo’s rights are later acquired at auction, and the robot continues to influence robotics research and education worldwide."
    },
    {
        "year": "2009",
        "title": "Pulse-Robotics",
        "description": "Founds Pulse-Robotics to explore new control systems, robot mechanisms, and artistic robotics. Provides consulting across commercial, industrial, and fine-art robotics."
    },
    {
        "year": "2009–2012",
        "title": "Vita Robotica",
        "description": "Launches Vita Robotica to explore new architectures for artificial cognition, continuing a lifelong fascination with adaptive systems."
    },
    {
        "year": "2010",
        "title": "Idaho Triennial – First Place Award",
        "description": "Collaborates with Francis Fox and Caleb Chung as BOCOLAB on 'Objects with Empathy.' The work wins First Place at the 2010 Idaho Triennial, celebrated for blending robotics, sculpture, and empathy."
    },
    {
        "year": "2012",
        "title": "Symbeeco Co-Founded",
        "description": "Co-founds Symbeeco to build intelligent lighting and smartphone-connected devices. The first product, SymbeeStars, is successfully crowd-funded."
    },
    {
        "year": "2017",
        "title": "Posterior Cortical Atrophy Diagnosis",
        "description": "Diagnosed with PCA, a rare neurodegenerative disorder affecting visual processing. Even as abilities changed, his curiosity, warmth, and humor endured."
    },
    {
        "year": "July 23, 2021",
        "title": "Passing & Lasting Impact",
        "description": "John passes away in Eagle, Idaho, at age 68. His influence lives on through the people he mentored, the children who learned through his inventions, the robots that carried his imagination, and the countless lives shaped by his kindness."
    }
];


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
