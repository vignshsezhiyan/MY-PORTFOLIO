import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-28 md:scroll-mt-20 py-16 md:py-20 bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground text-lg">
              My professional journey
            </p>
          </div>

          <Card className="p-8 shadow-medium">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Software Engineer - Full Stack</h3>
                  <p className="text-lg text-primary font-semibold">Worktual Innovations Pvt Ltd</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4" />
                    <span>December 2023 – Present</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm leading-relaxed">
                  {/* <p className="text-base leading-relaxed">
                  I worked on enterprise contact center solutions, building web and mobile applications that support real-time communication, multi-channel engagement, and business-critical workflows.
                  </p> */}
                  <ul className="space-y-3 leading-relaxed">
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Developed and maintained AI-powered CCaaS (Contact Center as a Service) and UCaaS platforms using React.js, Node.js, Fastify, Python (FastAPI), and MySQL, delivering scalable customer engagement solutions.
                      </span>                      </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Designed and deployed a Model Context Protocol (MCP) server that exposed Worktual APIs as AI-callable tools, implementing OAuth 2.0, Role-Based Access Control (RBAC), and seamless integration with ChatGPT, Claude, and GitHub Copilot.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Built an AI-powered RAG chatbot supporting PDF and website URL knowledge sources by implementing document chunking, embedding generation, and vector search using ChromaDB, improving automated customer support.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Integrated AI chatbot solutions with Shopify, BigCommerce, and Wix, enabling automated customer support, product recommendations, and sales assistance for e-commerce businesses.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Developed scalable RESTful APIs and backend services using Node.js, Fastify, and FastAPI to integrate enterprise CRM platforms including Salesforce, HubSpot, Microsoft Dynamics 365, Zoho CRM, Zendesk, and Pipedrive, enabling real-time customer data synchronization.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Published UCaaS and CCaaS APIs on the Zapier platform, enabling integrations with 500+ third-party applications and significantly reducing manual workflow and CRM synchronization efforts.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 rounded-md bg-background/70 px-3 py-2">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>Improved customer service efficiency by reducing context switching through unified CRM integrations and automating support workflows, resulting in faster agent response times and increased operational productivity.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
