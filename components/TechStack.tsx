import PythonIcon from './icons/PythonIcon';
import TypeScriptIcon from './icons/TypeScriptIcon';
import ReactIcon from './icons/ReactIcon';
import VercelIcon from './icons/VercelIcon';
import AnthropicIcon from './icons/AnthropicIcon';

export default function TechStack() {
  const technologies = [
    { name: "Python", Icon: PythonIcon, description: "AI & ML Development" },
    { name: "TypeScript", Icon: TypeScriptIcon, description: "Type-Safe Apps" },
    { name: "React", Icon: ReactIcon, description: "Modern UI" },
    { name: "Vercel", Icon: VercelIcon, description: "Deployment" },
    { name: "Anthropic Claude", Icon: AnthropicIcon, description: "AI Models" }
  ];

  const otherTech = [
    "OpenAI GPT-4", "LangChain", "TensorFlow", "PyTorch",
    "FastAPI", "Node.js", "PostgreSQL", "Redis",
    "Docker", "Kubernetes", "AWS", "Azure"
  ];

  return (
    <section id="tech" className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Teknisk Stack
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Enterprise-grade verktyg och ramverk för skalbar AI-implementation
          </p>
        </div>

        {/* Main Technologies */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0">
                <tech.Icon />
              </div>
              <h3 className="font-semibold text-neutral-50 text-center mb-1 text-sm">
                {tech.name}
              </h3>
              <p className="text-xs text-neutral-500 text-center">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Other Technologies */}
        <div className="pt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {otherTech.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-neutral-900/50 border border-neutral-800 text-neutral-400 rounded-lg text-sm font-medium hover:border-neutral-700 hover:text-neutral-300 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
