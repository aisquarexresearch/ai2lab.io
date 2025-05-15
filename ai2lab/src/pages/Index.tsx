import React from 'react';
import { Linkedin } from "lucide-react";

const Index = () => {
  // Mentor data
  const mentors = [
    {
      name: "Prof. (Dr.) Sandeep Chaurasia",
      role: "Director, Directorate of Corporate Relations and Placements, MUJ",
      linkedin: "https://www.linkedin.com/in/prof-dr-sandeep-chaurasia-0457568a/"
    },
    {
      name: "Danush Khanna",
      role: "Co-founder",
      linkedin: "https://www.linkedin.com/in/danushkhanna/"
    },
    {
      name: "Abhilekh Borah",
      role: "Co-founder",
      linkedin: "https://www.linkedin.com/in/abhilekh-borah-aa758a15a/"
    },
    {
      name: "Disha Sheshanarayana",
      role: "Mentor",
      linkedin: "https://www.linkedin.com/in/disha-sheshanarayana-b54730253/"
    },
    {
      name: "Krishanu Bujarbaruah",
      role: "Mentor",
      linkedin: "https://www.linkedin.com/in/krishanubujarbaruah/"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Logo */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-[0.08]">
        <img 
          src="/ai2lab.io/lovable-uploads/e8bac67b-df40-433d-8b46-d59079ffdeca.png" 
          alt="Background Logo"
          className="w-[800px] h-[800px] object-contain"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Header/Navigation */}
        <header className="w-full border-b bg-white/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <img 
                src="/ai2lab.io/lovable-uploads/e8bac67b-df40-433d-8b46-d59079ffdeca.png" 
                alt="AI² Logo" 
                className="h-8 w-auto"
              />
              <span className="font-serif text-xl">AI² Research Lab</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#about" className="hover:underline">About</a>
              <a href="#research" className="hover:underline">Research</a>
              <a href="#mentors" className="hover:underline">Team</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 border-b bg-white/80">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center">
              <img 
                src="/ai2lab.io/lovable-uploads/e8bac67b-df40-433d-8b46-d59079ffdeca.png" 
                alt="AI² Logo" 
                className="w-24 h-24 mx-auto mb-6"
              />
              <h1 className="text-3xl font-serif mb-4">
                Computational Linguistics & Vision Lab
              </h1>
              <p className="text-gray-600 mb-4">
                Fostering innovation and excellence in AI research
              </p>
              <a 
                href="https://www.linkedin.com/company/ai2lab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline mb-2"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect with us on LinkedIn
              </a>
              <div className="mt-2">
                <a 
                  href="mailto:aisquarexresearch@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  aisquarexresearch@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-b bg-white/80">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-serif mb-6">About AI²</h2>
            <div className="prose max-w-none">
              <p>
                AI² is a research group & facility under the leadership of Prof. (Dr.) Sandeep Chaurasia (Director, Directorate of Corporate Relations and Placements, MUJ), co-founded by Danush Khanna & Abhilekh Borah.
              </p>
              <p>
                Our objective is to create an environment where students from all years (1-4) can learn and engage in meaningful AI research, present their research as patents, papers, and receive mentorship that equips them to solve real-world challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas Section */}
        <section id="research" className="py-16 border-b bg-white/90">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-serif mb-6">Research Areas</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-serif mb-3">Machine Learning & Deep Learning</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Foundation Models and Large Language Models</li>
                  <li>Computer Vision and Visual Language Models</li>
                  <li>Natural Language Processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">Applications</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Research Paper Publications</li>
                  <li>Patent Development</li>
                  <li>Real-world Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section - Mentors */}
        <section id="mentors" className="py-16 bg-white/80">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-serif mb-6">Research Team</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {mentors.map((mentor, index) => (
                <div key={index} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-serif text-lg">{mentor.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{mentor.role}</p>
                  <a 
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline text-sm"
                  >
                    <Linkedin className="mr-1 h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
