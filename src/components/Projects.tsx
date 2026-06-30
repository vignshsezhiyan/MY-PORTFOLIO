import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

const professionalProjects = [
  {
    title: "Model Context Provider(MCP)",
    description: "Developed a secure Model Context Protocol (MCP) server that exposes Worktual APIs as AI-callable tools, enabling seamless integration with AI assistants such as ChatGPT, Claude, and GitHub Copilot.",
    features: [
      "Developed and deployed a Model Context Protocol (MCP) server to expose Worktual APIs as AI callable tools for LLM-powered agents",
      "Implemented OAuth 2.0 authentication and Role-based tool access control for secure AI integration.",
      "Successfully Integrated our Mcp server with Claude, Copilot and ChatGPT"
    ],
    tags: ["Python", "FASTApi", "MySQL", "LLM"],
    // link:"https://aiccaas.worktual.in/"
  },
  {
    title: "AI Contact Centre Platform",
    description: "A scalable CCaaS platform integrated with multiple CRM systems for seamless customer interaction management.",
    features: [
      "CRM integrations with Salesforce, HubSpot, Zoho, Zendesk, and Microsoft Dynamics",
      "Real-time customer interaction workflows",
      "Reduced handling time through automation",
      "Seamless integration within existing CRM environments"
    ],
    tags: ["React.js", "Node.js", "Fastify", "MySQL", "CRM Integration"],
    // link:"https://aiccaas.worktual.in/"
  },
  {
    title: "AI Chatbot for E-commerce",
    description: "AI-powered chatbot integrated with major e-commerce platforms to automate customer support.",
    features: [
      "Integrated with Shopify, BigCommerce, and Wix",
      "Automated customer query handling",
      "Enhanced user engagement",
      "AI-driven conversational responses"
    ],
    tags: ["Node.js", "AI Integration", "Chatbot", "E-commerce"],
    // link:"https://cvm.worktual.co.uk/"
  },
  {
    title: "Zapier Automation Integration",
    description: "Workflow automation system enabling integration with 500+ third-party applications.",
    features: [
      "Published APIs on Zapier platform",
      "Automated CRM synchronization",
      "Cross-platform communication workflows",
      "Reduced manual effort significantly"
    ],
    tags: ["Node.js", "Zapier", "Automation", "APIs"],
    // link:"https://ccaas.worktual.co.uk/"
  },
  {
    title: "SEO SaaS Platform",
    description: "Digital marketing platform for SEO analytics and campaign insights.",
    features: [
      "Integrated DataForSEO, Serpstat, and Google Ads APIs",
      "Real-time SEO performance tracking",
      "Campaign analytics and keyword monitoring",
      "Scalable SaaS architecture"
    ],
    tags: ["Next.js", "Node.js", "APIs", "SaaS"]
    // link:"https://ccaas.worktual.co.uk/"
  },
];

const personalProjects = [
  {
    title: "DeckGenie - AI PPT Generator",
    description: "An AI-powered presentation generator that turns a simple prompt into structured slides with editable content, AI-generated visuals, slideshow preview, and PPT export.",
    features: [
      "Prompt-to-slide content generation",
      "AI-powered slide editing",
      "Per-slide image generation",
      "Template preview and slideshow mode",
      "Editable and non-editable PPT export"
    ],
    tags: ["Next.js", "React", "Gemini", "Cloudflare Workers AI", "PptxGenJS"],
    link: "https://aislidechat.netlify.app/"
  },
  {
    title: "AI Chat App",
    description: "A real-time AI chat application built to deliver conversational responses with a clean chat interface and smooth messaging experience.",
    features: [
      "Real-time chat interface",
      "AI-generated responses",
      "Message flow and conversation handling",
      "Responsive mobile-friendly UI",
      "Integrated API-based AI communication"
    ],
    tags: ["React Native", "Socket.IO", "OpenAI API", "Chat UI", "API Integration"]
  }
];

const ProjectScreenshotCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || images.length < 2) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [api, images.length]);

  return (
    <div className="mb-5 overflow-hidden rounded-xl border border-white/15 bg-neutral-950">
      <Carousel className="relative" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="ml-0">
          {images.map((image, index) => (
            <CarouselItem key={`${title}-shot-${index}`} className="pl-0">
              <div className="group relative h-52 w-full overflow-hidden sm:h-56">
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="absolute inset-0 h-full w-full bg-neutral-900 object-contain p-2 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-neutral-950/35 to-neutral-950/10 transition-opacity duration-500 group-hover:opacity-20" />
                <div className="pointer-events-none absolute inset-0 -translate-x-[130%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-[170%]" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {images.length > 1 ? (
        <div className="flex items-center justify-center gap-2 py-3">
          {images.map((_, index) => (
            <button
              key={`${title}-dot-${index}`}
              type="button"
              aria-label={`Go to screenshot ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? "scale-125 bg-white" : "bg-white/35 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 md:scroll-mt-20 py-16 md:py-20 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">
              Professional and personal work showcase
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <span className="h-1 w-12 bg-gradient-primary rounded"></span>
                Professional Projects
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {professionalProjects.map((project) => (
                  <Card key={project.title} className="p-6 hover:shadow-medium transition-all hover:-translate-y-1">
                    <h4 className="text-xl font-bold mb-2 flex items-center justify-between">
                      {project.title}
                      {/* {project.link ? <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a> :""}                     */}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <ul className="space-y-1 mb-4 text-sm leading-relaxed">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <p className="text-sm text-secondary mb-4 font-medium leading-relaxed">{project.extra}</p> */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
