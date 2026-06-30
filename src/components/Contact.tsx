import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const isLocalDev = ["localhost", "127.0.0.1"].includes(window.location.hostname);
      if (isLocalDev) {
        toast({
          title: "Netlify Forms in local dev",
          description: "This works after deploy on Netlify. Local Vite server returns 404 for POST '/'."
        });
        return;
      }

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": "contact",
          ...formData
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 md:scroll-mt-20 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss your next project
            </p>
          </div>

          <Card className="p-8 shadow-medium">
            <div className="mb-8 flex items-center justify-center gap-3 text-muted-foreground">
              <Mail className="h-5 w-5" />
              <a href="mailto:vigneshgovindhan57@gmail.com" className="hover:text-primary transition-colors">
                vigneshgovindhan57@gmail.com
              </a>
            </div>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input type="hidden" name="form-name" value="contact" />
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <Button variant="outline" asChild>
                <a href="/Vignesh-Govindhan-Fullstack-Developer.pdf" download="Vignesh-Govindhan.pdf">
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
