import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="scroll-mt-28 md:scroll-mt-20 min-h-screen flex items-center justify-center bg-gradient-hero pt-24 md:pt-16 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <p className="text-secondary font-medium text-sm uppercase tracking-wider">
                Welcome to my portfolio
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Hi, I&apos;m <span className="gradient-text">Vignesh</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                Full Stack Developer
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                React | Next.js | Node.js | AI Integrations
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button onClick={scrollToContact} size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Vignesh-Govindhan-Fullstack-Developer.pdf" download="vignesh_resume.pdf">
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-4 pt-8">
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:vigneshgovindhan57@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/vignshsezhiyan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/vignesh-g-a92a28244/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
