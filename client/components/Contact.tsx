import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ Name: '', email: '', Message: '' });
    } else {
      alert('Failed to send message.');
    }
  };
  console.log("url" , formspreeUrl)
  return (
    <section id="contact" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-text mb-12 text-center lg:text-left">
            Contact
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label  className="block text-portfolio-text mb-2 font-medium">
                Your Name
              </label>
              <Input
                type="text"
                name="Name"
                placeholder="Enter your name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full bg-portfolio-dark-secondary border-portfolio-dark-secondary text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-blue focus:ring-portfolio-blue"
              />
            </div>
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">
                Your Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-portfolio-dark-secondary border-portfolio-dark-secondary text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-blue focus:ring-portfolio-blue"
              />
            </div>
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">
                Your Message
              </label>
              <Textarea
                placeholder="Enter your message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-portfolio-dark-secondary border-portfolio-dark-secondary text-portfolio-text placeholder:text-portfolio-text-muted focus:border-portfolio-blue focus:ring-portfolio-blue resize-none"
              />
            </div>
            <div className="text-right">
              <Button type="submit" className="bg-portfolio-blue hover:bg-portfolio-blue-hover text-white px-8 py-3 rounded-md font-medium">
                Send Message
              </Button>
            </div>
          </form> 
           {/* <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">Your Name</label>
              <Input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full ..."
              />
            </div>
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">Your Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full ..."
              />
            </div>
            <div>
              <label className="block text-portfolio-text mb-2 font-medium">Your Message</label>
              <Textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                rows={6}
                placeholder="Enter your message"
                className="w-full ..."
              />
            </div>
            <div className="text-right">
              <Button type="submit" className="...">
                Send Message
              </Button>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
}
