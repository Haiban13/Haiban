 
import GradientText from '../reactbits/GradientText/GradientText';
import ball from '../assets/ball.png';
import StarBorder from '../reactbits/starborder/starborder';
 
 

const IconMenu = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const IconX = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);
const IconCpu = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
  </svg>
);
const IconLayers = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
  </svg>
);
const IconCode = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconBrain = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6" {...props}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
</svg>

);
const IconDatabase = (props ) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6  " {...props}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
</svg>

);
const IconGitHub = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-4A5 5 0 0 0 18 0a6 6 0 0 0-2 2c-.5-.2-1-.3-1.5-.3A3.5 3.5 0 0 0 12 2c-.5 0-1 .1-1.5.3a6 6 0 0 0-2-2 5 5 0 0 0-1.5 4A5.5 5.5 0 0 0 5.5 8c0 5 3 6.5 6 6.5a4.8 4.8 0 0 0-1 3.5v4" />
  </svg>
);
const IconLinkedin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const IconSend = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="m22 2-11 11" />
  </svg>
);
const IconExternalLink = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const IconArrowUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
  </svg>
);



const skillsData = [
  {
    title: 'Backend & Frameworks',
    icon: <IconLayers className="w-8 h-8 text-cyan-400" />,
    skills: ['Nest.js', 'Laravel', 'Octagon', 'Node.js', 'PHP']
  },
  {
    title: 'Frontend & Web',
    icon: <IconCode className="w-8 h-8 text-cyan-400" />,
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'Tailwind CSS']
  },
  {
    title: 'AI & Machine Learning',
    icon: <IconBrain className="w-8 h-8 text-cyan-400" />,
    skills: ['PyTorch', 'Scikit-learn', 'Pandas', 'Jupyter']
  },
  {
    title: 'Core & Data',
    icon: <IconDatabase className="w-8 h-8 text-cyan-400" />,
    skills: ['Python', 'C++', 'SQL (PostgreSQL, MySQL)', 'MongoDB']
  }
];  



const projectData = [
  {
    title: 'AI Customer Support Bot',
    description: 'A deep-learning-based chatbot using PyTorch and a Nest.js backend for real-time, intelligent customer interactions.',
    image: 'https://placehold.co/600x400/0f172a/38bdf8?text=Project+AI',
    tags: ['PyTorch', 'Nest.js', 'React', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Scalable E-commerce API',
    description: 'A high-performance, microservice-ready API built with Laravel, designed to handle thousands of concurrent users and transactions.',
    image: 'https://placehold.co/600x400/0f172a/38bdf8?text=Project+API',
    tags: ['Laravel', 'PHP', 'MySQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'A web-based dashboard using Scikit-learn and React to visualize and interact with complex datasets in real-time.',
    image: 'https://placehold.co/600x400/0f172a/38bdf8?text=Project+Data',
    tags: ['Scikit-learn', 'React', 'Python', 'Pandas'],
    liveUrl: '#',
    githubUrl: '#'
  },
];

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }) => (
 
    <div className="bg-slate-800/30 backdrop-blur-lg border border-cyan-800/50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/10 hover:border-cyan-700/80">
      <img src={image} alt={`${title} screenshot`} className="w-full h-48 object-cover opacity-75" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-700/50 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="GitHub Repository"
          >
            <IconGitHub className="w-5 h-5" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Live Demo"
            >
            <IconExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  
);






export default function Home(){
 

  return (
    <>


    {/*=======================================================================HERO=======================================================================*/}
      <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-4 relative  m-auto bg-slate-950 z-0">
        {/* Background "Grid" Effect */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: `
          linear-gradient(to right, rgba(0, 224, 255, 0.2) 2px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 224, 255, 0.2) 2px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}></div>
        
        
        
        
        {/* Gradient Glow Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full filter blur-[100px] opacity-80 -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[100px] opacity-80 -z-10 animate-pulse animation-delay-4000"></div>

        <div className="z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          
            <GradientText  className=" text-6xl font-extrabold  " colors={["#00d3f2", "#155dfc", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={9}
  showBorder={false}
    >Haiban Aufar Irwanov</GradientText>
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8 font-light">
            Backend Engineer <span className="text-cyan-400 mx-2">|</span> Aspiring AI Architect
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-md font-medium text-white bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-md font-medium text-cyan-300 bg-slate-800/50 border border-cyan-800 hover:bg-slate-700/70 transition-colors duration-300"
              >
              Contact Me
            </a>
 
          </div>
           
            
          
        </div>
    </section>
  {/*=======================================================================ABOUT=======================================================================*/}
  <section id="about" className="py-20 md:py-32 px-4 bg-slate-900/50 relative    h-auto w-full over z-0">
            <div className="absolute   top-0.5  w-[200%]  animate-marquee left-0  h-11 bg-cyan-100   rotate-2  overflow-hidden   z-99999999999 animate-pulse flex flex-row justify-evenly items-center content-center">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-row justify-evenly items-center  w-1/2">
                  <h2 className="text-slate-800 font-bold">AI AREA</h2>
                  <h2 className="text-slate-800 font-bold text-2xl">+</h2>
                  <h2 className="text-slate-800 font-bold">AI AREA</h2>
                  <h2 className="text-slate-800 font-bold text-2xl">+</h2>
                  <h2 className="text-slate-800 font-bold">AI AREA</h2>
                  <h2 className="text-slate-800 font-bold text-2xl">+</h2>
                  <h2 className="text-slate-800 font-bold">AI AREA</h2>
                  <h2 className="text-slate-800 font-bold text-2xl">+</h2>
                </div>
              ))}
           
 
            </div>
            <div className="absolute top-0.5 left-0 w-[200%] h-11 bg-blue-600   overflow-hidden rotate-2  blur-lg   -z-50 animate-pulse"></div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-600 to-blue-600 rounded-lg blur-lg opacity-25"></div>
        <div className="relative w-full h-80 md:h-96 bg-slate-800 rounded-lg p-8 flex items-center justify-center border border-cyan-800/50  ">
          <IconCpu className="w-48 h-48 text-cyan-500 opacity-20 blur-md" />
          <p className="absolute text-xl text-gray-300 p-8">
            <span className="text-cyan-400 text-2xl font-bold block mb-2">// About Me</span>
            Driven by a passion for building intelligent systems, I'm bridging the gap between robust backend architecture and cutting-edge artificial intelligence. My journey is about engineering solutions that don't just work—they learn and adapt.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          From <span className="text-cyan-400">Code</span> to <span className="text-blue-400">Cognition</span>
        </h2>
        <p className="text-gray-300 text-lg mb-4">
          I am a Web & Backend Engineer with years of experience architecting scalable and reliable systems. My expertise lies in building strong foundations using frameworks like <span className="text-white font-medium">Nest.js</span> and <span className="text-white font-medium">Laravel</span>.
        </p>
        <p className="text-gray-300 text-lg">
          Now, I am channeling that same precision and passion into the field of Artificial Intelligence. My goal is to leverage my backend skills to build, deploy, and manage sophisticated AI models, with a focus on <span className="text-white font-medium">PyTorch</span> and <span className="text-white font-medium">Scikit-learn</span>.
        </p>
      </div>
    </div>
  </section>
  {/*=======================================================================HERO=======================================================================*/}
  <section id="skills" className="py-20 md:py-32 px-4 relative">
     
    <div className="max-w-7xl mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
        Digital <span className="text-cyan-400">Arsenal</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full z-50">
        {skillsData.map((category) => (
          <div
            key={category.title}
            className="bg-slate-800/50 border border-cyan-900/50 rounded-lg p-6 hover:border-cyan-700/50 transition-colors duration-300 z-1"
          >
            <div className="flex items-center space-x-4 mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-white" >{category.title}</h3>
          
            
            
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
       {/* Background "Grid" Effect */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
          backgroundImage: `
          linear-gradient(to right, rgba(0, 224, 255, 0.2) 2px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 224, 255, 0.2) 2px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}></div>
        
        {/* Gradient Glow Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full filter blur-[100px] opacity-80 -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[100px] opacity-80 -z-10 animate-pulse animation-delay-4000"></div>

    </div>
  </section>
  {/*=======================================================================HERO=======================================================================*/}
  <section id="projects" className="py-20 md:py-32 px-4 bg-slate-900/50 relative">
    <div className="max-w-7xl  mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
        Featured <span className="text-cyan-400">Creations</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative  z-1">
        <GradientText  className=" text-6xl font-extrabold  " colors={["#00d3f2", "#155dfc", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={9}
  showBorder={false}
    >soon</GradientText>
        {/* {projectData.map((project) => (
 
          <ProjectCard key={project.title} {...project} />
  
        ))} */}
      </div>

    <img src={ball} alt="" className='absolute  md:block  md:w-3/4 md:top-1/5  md:h-auto  w-5xl top-1/2  hidden   left-1/2 -translate-x-1/2 z-0 opacity-90' />
    </div>
  </section>
  {/*=======================================================================HERO=======================================================================*/}
  <section id="contact" className="py-20 md:py-32 px-4 overflow-hidden relative z-1   backdrop-blur-3xl ">
    {/* Background Glow */}
    <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-cyan-900 rounded-full filter blur-[150px] opacity-30 z-10"></div>

    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Initiate <span className="text-cyan-400">Contact</span>
      </h2>
      <p className="text-gray-300 text-lg mb-12">
        Have a project, a question, or just want to connect? My inbox is always open.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-left grid grid-cols-1 gap-6 mb-12"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-cyan-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="block w-full px-4 py-3 rounded-md bg-slate-800/70 border border-slate-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="[Your Name]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cyan-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="block w-full px-4 py-3 rounded-md bg-slate-800/70 border border-slate-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="[your.email@matrix.com]"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-cyan-300 mb-2">Message</label>
          <textarea
            id="message"
            rows="5"
            className="block w-full px-4 py-3 rounded-md bg-slate-800/70 border border-slate-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Your message, query, or algorithm..."
            ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-10 py-3 rounded-md font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
          >
            <IconSend className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </div>
      </form>

      <div className="flex justify-center space-x-8">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          aria-label="GitHub"
          >
          <IconGitHub className="w-8 h-8" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
          aria-label="LinkedIn"
          >
          <IconLinkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  </section>
  {/*=======================================================================HERO=======================================================================*/}
   <footer className="py-8 bg-slate-900 border-t border-cyan-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      <p className="mt-1">Designed with a futuristic vision.</p>
    </div>
  </footer>
  </>
  )
  
  
}