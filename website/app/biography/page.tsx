export default function Biography() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-5xl font-bold mb-8 text-memorial-gray-50">
        Biography
      </h1>

      {/* Early Life */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-memorial-accent-blue">
          Early Life & Education
        </h2>
        <div className="text-memorial-gray-300 leading-relaxed space-y-4">
          <p>
            John R. Sosoka II was born on June 21, 1953, growing up during a transformative era
            of technological advancement. From an early age, he demonstrated a natural
            curiosity about how things worked, often taking apart household electronics
            to understand their inner workings.
          </p>
          <p>
            Described as an "electronics whiz who never graduated from college," John possessed
            an innate technical brilliance and hands-on engineering talent that would define his career.
            Despite lacking a formal degree, his exceptional skills in electronics, software development,
            and product design proved that passion and natural talent could rival any formal education.
            He even obtained his pilot's license, demonstrating his diverse interests and capabilities.
          </p>
        </div>
      </section>

      {/* Family & Personal Life */}
      <section className="mb-12 bg-memorial-gray-900 rounded-lg p-8 border border-memorial-gray-800">
        <h2 className="text-3xl font-semibold mb-4 text-memorial-accent-blue">
          Family & Personal Life
        </h2>
        <div className="text-memorial-gray-300 leading-relaxed space-y-4">
          <p>
            John married Sylvia Sosoka and together they built a loving family, raising two children:
            John III and Emily. The family made their home in Belmont Shore, Long Beach, California,
            before eventually relocating to Eagle, Idaho.
          </p>
          <p>
            Colleagues and friends remember John for his warm, collaborative spirit and his wonderful
            way with babies and children—a natural extension of his passion for creating toys and
            technologies that enriched young lives. He was known for working in flip-flops and casual
            attire, his relaxed demeanor masking an intense dedication to solving complex technical
            problems. Whether contemplating a difficult engineering challenge or engaging in philosophical
            conversations, John remained authentically himself.
          </p>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-memorial-accent-blue">
          Professional Journey
        </h2>

        <div className="space-y-8">
          {/* Sosoka and Associates */}
          <div className="border-l-4 border-memorial-gray-700 pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Sosoka and Associates
            </h3>
            <p className="text-memorial-gray-400 mb-3">Early Career</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              John founded Sosoka and Associates, an engineering consulting firm in Long Beach,
              California. This venture established his reputation as both a talented engineer
              and a dedicated mentor. Kent and Kevin Peterson, identical twin brothers who later
              founded P2S Engineering (now a 175+ employee firm), both worked for John early in
              their careers. Kent joined at just 17 years old in 1981, and John became his most
              influential mentor in the industry.
            </p>
          </div>

          {/* Technology Applications Group */}
          <div className="border-l-4 border-memorial-gray-700 pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Technology Applications Group
            </h3>
            <p className="text-memorial-gray-400 mb-3">1980s-1990s</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              John founded Technology Application Group (TAG), a multimedia courseware and
              development company specializing in interactive applications. This early venture
              established his expertise in educational technology and set the stage for his
              later achievements in the software and toy industries.
            </p>
          </div>

          {/* Davidson & Associates */}
          <div className="border-l-4 border-memorial-accent-purple pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Davidson & Associates - Chief Technology Officer
            </h3>
            <p className="text-memorial-gray-400 mb-3">1980s-1996</p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              As CTO of Davidson & Associates, John oversaw software development and was
              instrumental in the success of the Math Blaster franchise, one of the most
              successful educational software series of the 1980s and 1990s. Under his technical
              leadership, Davidson grew into a multimillion-dollar company, achieving nearly $60
              million in sales with Math Blaster selling over 1.6 million copies.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed">
              In 1994, Davidson acquired Blizzard Entertainment (then Chaos Studios) for $6.75
              million—a transformative acquisition that enabled Blizzard to create legendary
              franchises including Warcraft, StarCraft, and Diablo. Two years later, Davidson
              itself was acquired by CUC International for $1.14 billion in stock.
            </p>
          </div>

          {/* Neurosmith */}
          <div className="border-l-4 border-memorial-accent-blue pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Neurosmith - Co-Founder & CTO
            </h3>
            <p className="text-memorial-gray-400 mb-3">1997-2004</p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              In 1997, John co-founded Neurosmith with Brooke Abercrombie in Long Beach, California.
              The company pioneered educational technology toys that brought child development
              principles into the physical world, creating interactive learning experiences for
              infants and toddlers that encouraged exploration, experimentation, and creativity.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              <strong className="text-memorial-gray-200">Music Blocks</strong> (1998-1999): This
              revolutionary toy allowed toddlers to compose music using plastic blocks with different
              shapes on each face. Despite manufacturing challenges in 1998, Music Blocks became a
              massive success in 1999, selling 100,000 units at $69.99 each and generating $5 million
              in revenue.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              <strong className="text-memorial-gray-200">Musini</strong> (2002): Won the prestigious
              "Most Innovative Toy of the Year" award at the 2002 T.O.T.Y. Awards. This innovative
              musical toy allowed children ages 3-8 to explore five different musical styles with
              interactive lighting features.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed">
              At its peak, Neurosmith grew to $12 million in sales. John's technical genius produced
              multiple patents for the company's products, showcasing his innovative approach to
              creating toys that taught through tactile interaction. In 2003-2004, Neurosmith was
              acquired by Small World Toys.
            </p>
          </div>

          {/* Ugobe */}
          <div className="border-l-4 border-memorial-accent-blue pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Ugobe - Co-Founder & Chief Technology Officer
            </h3>
            <p className="text-memorial-gray-400 mb-3">2001-2009</p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              Following Neurosmith, John co-founded Ugobe with inventor Caleb Chung (co-creator of Furby)
              and Derek Dotson. As CTO and head of Research & Development, he led the technical development
              of Pleo, an autonomous robotic baby Camarasaurus dinosaur that would become one of the most
              sophisticated consumer robots of its era.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              <strong className="text-memorial-gray-200">Pleo's Technical Marvel</strong>: Featuring 38
              sensors, 14 motors, over 100 custom-designed gears, and six microprocessors, Pleo exhibited
              stunning organic movement and dynamic behaviors. John and his team studied ethology research
              to make Pleo as authentic as possible, creating a sophisticated "Life OS" platform that
              decided how Pleo would react in various situations. The robot's spine gave it an
              alligator-like gait, twisting before placing its foot down.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed mb-3">
              Unveiled on February 7, 2006, at the DEMO Conference in Scottsdale, Arizona, Pleo shipped
              in late 2007 at $349 and generated approximately $20 million in sales. John presented on
              Pleo's development at prestigious venues including Stanford University and PARC Forum.
            </p>
            <p className="text-memorial-gray-300 leading-relaxed">
              Despite Pleo's technical success, Ugobe faced financial difficulties during the 2008-2009
              economic crisis and filed for Chapter 7 bankruptcy in April 2009. The manufacturing company
              Jetta later acquired Pleo's rights at the bankruptcy auction.
            </p>
          </div>

          {/* Vita Robotica & Pulse-Robotics */}
          <div className="border-l-4 border-memorial-gray-700 pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              Vita Robotica & Pulse-Robotics
            </h3>
            <p className="text-memorial-gray-400 mb-3">Post-2009</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              After Ugobe's bankruptcy, John founded two complementary companies reflecting his insights
              from the Pleo experience. Vita Robotica focused on developing "a completely new implementation
              of a brain for robots," while Pulse-Robotics worked on robotic operating systems. John believed
              one reason Ugobe failed was that "the one company tried to do too much, working on both hardware
              and software." His new ventures explored companion robots as alternatives to therapy dogs,
              representing a shift toward more practical therapeutic applications.
            </p>
          </div>

          {/* LumiLife */}
          <div className="border-l-4 border-memorial-gray-700 pl-6">
            <h3 className="text-2xl font-semibold mb-2 text-memorial-gray-50">
              LumiLife
            </h3>
            <p className="text-memorial-gray-400 mb-3">2013</p>
            <p className="text-memorial-gray-300 leading-relaxed">
              In April 2013, John co-founded LumiLife in Berkeley, California, with Ellen Wang and
              Andrew Wen. The company developed an innovative LED lighting system combining Bluetooth
              Smart wireless connectivity, efficient LED technology, motion sensors, and smartphone/tablet
              control with 16 million+ color options. LumiLife represented John's continued innovation
              in human-centered design and technology integration.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship & Industry Impact */}
      <section className="mb-12 bg-memorial-gray-900 rounded-lg p-8 border border-memorial-gray-800">
        <h2 className="text-3xl font-semibold mb-4 text-memorial-accent-blue">
          Mentorship & Industry Impact
        </h2>
        <div className="text-memorial-gray-300 leading-relaxed space-y-4">
          <p>
            John was a dedicated mentor who significantly influenced the next generation of engineers.
            His philosophy emphasized not just technical excellence, but giving back to the industry
            and helping others grow. As Kent Peterson recalled: "John has been by far my mentor in
            this industry. He taught me everything. Sky was the limit. It didn't matter whether I'd
            taken the courses in college yet. Anything that I could actually undertake, he would
            actually show me how to do that if I felt comfortable doing it."
          </p>
          <p>
            John actively encouraged those he mentored to join professional organizations like ASHRAE
            (American Society of Heating, Refrigerating and Air-Conditioning Engineers), emphasizing
            the importance of giving back to the industry. In 1991, Kent and Kevin Peterson partnered
            with John to form P2S Engineering, which has grown into a major firm with offices in Long
            Beach and San Diego.
          </p>
          <p>
            Monica Amalfitano, PE, DBIA, LEED, recalled: "When I first started in the industry as a
            student intern, John immediately took me under his wing. After I graduated and later received
            my Professional Engineering License when I was 25 years old, John introduced me to ASHRAE at
            the national level... This endearing support from a well respected man in our industry gave
            me the confidence I needed at a defining moment in my career."
          </p>
        </div>
      </section>

      {/* Professional Philosophy */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-memorial-accent-blue">
          Professional Philosophy
        </h2>
        <div className="text-memorial-gray-300 leading-relaxed space-y-4">
          <p>
            Throughout his career, John maintained a consistent philosophy: technology
            should serve humanity, not intimidate it. He believed in making complex
            systems accessible and creating products that enriched people's lives,
            particularly children's learning and development.
          </p>
          <p>
            His approach emphasized collaboration, always working closely with
            multidisciplinary teams to push boundaries while keeping the end user's
            experience at the forefront. Whether developing educational software, interactive
            toys, or autonomous robots, John's work demonstrated an unwavering focus on
            creating technology that brought joy and enrichment to people's lives.
          </p>
        </div>
      </section>

      {/* Personal Character */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-memorial-accent-blue">
          Personal Character & Values
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <CharacterCard
            title="Kind & Patient"
            description="John was known for his gentle demeanor and infinite patience, always taking time to explain complex concepts and help others understand. He was wonderful with babies and children, a natural extension of his passion for creating technologies that enriched young lives."
          />
          <CharacterCard
            title="Visionary Thinker"
            description="He had an uncanny ability to see possibilities where others saw limitations, imagining futures that inspired teams to achieve the extraordinary. Colleagues recalled his contemplative nature when solving technical problems, always ready to hear 'weird ideas about all sorts of things.'"
          />
          <CharacterCard
            title="Dedicated Mentor"
            description="John invested deeply in nurturing the next generation of engineers and creators, sharing knowledge generously and celebrating their successes. His mentorship shaped entire careers and influenced the founding of successful firms like P2S Engineering."
          />
          <CharacterCard
            title="Resilient Spirit"
            description="Even after his Posterior Cortical Atrophy diagnosis in 2017, John maintained his positive outlook. Though the disease gradually impaired his visual processing and speech generation, his comprehension remained strong, and he continued to contribute his wisdom to those around him."
          />
          <CharacterCard
            title="Authentic Soul"
            description="Whether working in flip-flops and casual attire or engaging in deep philosophical conversations, John remained true to himself and his values. His warm, collaborative spirit made him beloved by colleagues, friends, and everyone fortunate enough to know him."
          />
        </div>
      </section>

      {/* Final Years & Legacy */}
      <section className="mb-12 bg-memorial-gray-900 rounded-lg p-8 border border-memorial-gray-800">
        <h2 className="text-3xl font-semibold mb-4 text-memorial-accent-blue">
          Final Years & Legacy
        </h2>
        <div className="text-memorial-gray-300 leading-relaxed space-y-4">
          <p>
            In 2017, John was diagnosed with Posterior Cortical Atrophy (PCA), a rare form of
            Alzheimer's disease that affects the visual cortex. Despite the challenges this
            brought, John continued to inspire those around him with his courage and grace.
          </p>
          <p>
            John R. Sosoka II passed away on July 23, 2021, in Eagle, Idaho, at the age of 68.
            He left behind a profound legacy in educational technology, interactive toys, and
            robotics. His contributions fundamentally shaped how children learn through play
            and advanced the field of companion robotics.
          </p>
          <p>
            His legacy lives on through the engineers he mentored, the patents he secured,
            the products that brought joy to millions of children, and the pioneering work
            in companion robotics that continues to influence the field today. As one colleague
            aptly summarized: "He was an intelligent and kind person who spent a great deal of
            his energy trying to help and enable others."
          </p>
        </div>
      </section>
    </div>
  )
}

function CharacterCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-memorial-gray-900 rounded-lg p-6 border border-memorial-gray-800">
      <h3 className="text-xl font-semibold mb-3 text-memorial-gray-50">
        {title}
      </h3>
      <p className="text-memorial-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
