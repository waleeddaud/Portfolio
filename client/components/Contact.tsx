import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-text mb-12 text-center lg:text-left">
            Contact
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">
                Your Name
              </label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-portfolio-dark-secondary border-portfolio-dark-secondary text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-blue focus:ring-portfolio-blue"
              />
            </div>
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">
                Your Email
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-portfolio-dark-secondary border-portfolio-dark-secondary text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-blue focus:ring-portfolio-blue"
              />
            </div>
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">
                Your Message
              </label>
              <Textarea
                placeholder="Enter your message"
                rows={6}
                className="w-full bg-portfolio-dark-secondary border-portfolio-dark-secondary text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-blue focus:ring-portfolio-blue resize-none"
              />
            </div>
            <div className="text-right">
              <Button className="bg-portfolio-blue hover:bg-portfolio-blue-hover text-white px-8 py-3 rounded-md font-medium">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
