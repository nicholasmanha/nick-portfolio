import { Icon } from "@/components/Icon";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const socialLinks = [
  //   { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
  //   { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-500' },
  //   { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
  //   { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-900' },
  //   { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-600' }
  // ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="mb-12">
        <Text variant="h1">
          Contact{" "}
          <Text variant="h1" color="primary" as="span">
            Me
          </Text>
        </Text>
        <Text variant="h4">Let’s get in touch</Text>
      </div>

      <div className="grid md:grid-cols-2 gap-32">
        {/* Left Side - Contact Form */}
        <div className="">
          {submitted && (
            <div className="mb-6 p-4 bg-surface-elevated border border-green-900 rounded-lg text-green-200">
              Thank you! Your message has been sent successfully.
            </div>
          )}

          <div className="space-y-5">
            <div className="flex gap-5">
              <div className="flex flex-col gap-5 flex-1">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    <Text>Name</Text>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2">
                    <Text>Email</Text>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 flex-1">
                <div>
                  <label htmlFor="company" className="block mb-2">
                    <Text>Company Name</Text>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">
                    <Text>Phone Number</Text>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2">
                <Text>Subject</Text>
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                <Text>Message</Text>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-border px-3 py-2 text-base shadow-sm transition-colors outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30"
              />
            </div>

            <button onClick={handleSubmit} className="">
              <Button>Send Message</Button>
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="">
            <div className="space-y-5">
              <div className="flex gap-5 mb-12">
                <a
                  className="flex-shrink-0"
                  target="_blank"
                  href="https://github.com/nicholasmanha"
                >
                  <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                    <Icon variant="ghost" size="medium" icon="GitHub" />
                  </div>
                </a>
                <a
                  className="flex-shrink-0"
                  target="_blank"
                  href="https://www.linkedin.com/in/nicholas-manha/"
                >
                  <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                    <Icon variant="ghost" size="medium" icon="Linkedin" />
                  </div>
                </a>
                <a
                  className="flex-shrink-0"
                  target="_blank"
                  href="https://stackoverflow.com/users/14644022/nicholasm"
                >
                  <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                    <Icon variant="ghost" size="medium" icon="StackOverflow" />
                  </div>
                </a>
                <a
                  className="flex-shrink-0"
                  target="_blank"
                  href="https://app.joinhandshake.com/profiles/nctxta"
                >
                  <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                    <Icon variant="ghost" size="medium" icon="Handshake" />
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Icon size="medium" variant="ghost" icon="mail" />
                <Text>nickrmanha@gmail.com</Text>
              </div>

              <div className="flex items-center gap-4">
                <Icon size="medium" variant="ghost" icon="phone" />
                <Text>(530) 410-9658</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
