import { Card } from "@/components/ui/card";
import { Code, Smartphone, Server, Database, Wrench, Bot, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React.js", "Next.js","Typescript", "Redux", "HTML5", "CSS3", "SCSS"],
    color: "text-primary"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Fastify","Python"," FastAPI", "REST APIs", "GraphQL"],
    color: "text-primary"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL","ChromaDB","Redis"],
    color: "text-secondary"
  },
  {
    title: "Authentication & Security",
    icon: Shield,
    skills: ["JWT", "OAuth 2.0", "crypto"],
    color: "text-secondary"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "CI/CD", "GitHub", "Jenkins", "Bitbucket", "postman", "netlify","Webhooks"],
    color: "text-primary"
  },
  {
    title: "AI / LLM Integration",
    icon: Bot,
    skills: ["RAG", "Model Context Protocol (MCP)", "Web Scraping", "LangChain","LangGraph"],
    color: "text-secondary"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-28 md:scroll-mt-20 py-16 md:py-20 bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="p-6 hover:shadow-medium transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`h-6 w-6 ${category.color}`} />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
