import Section from "@/components/Basic/Section.component";
import BackButton from "@/components/Buttons/BackButton";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.component";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="max-w-7xl m-auto">
        <BackButton className="fixed top-4 left-4" href={"/#about"} />
        <ThemeToggle className="fixed top-4 right-4" />

        {/* Education section */}
        <Section id="education" heading="*education" className="pb-2 pt-4">
          <div className="px-9 pt-4 ">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                New York University, Tandon School of Engineering
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Jan 2022 - May 2024</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                B.S. Computer Science, Minor in Mathematics, GPA 3.79
              </span>
              <span className="text-right italic ml-4">New York, NY</span>
            </div>
          </div>
          <div className="px-9 pt-4 ">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                Northeastern University, Khoury College of Computer Science
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Sep 2019 - Dec 2021</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                B.S. Computer Science & Cognitive Psychology, Incomplete -
                Transferred Out, GPA - 3.83
              </span>
              <span className="text-right italic ml-4">Boston, MA</span>
            </div>
          </div>
        </Section>

        {/* Work section */}
        <Section id="work" heading="*work" className="pb-2 pt-4">
          <div className="px-9 pt-4 ">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                Software Developer
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Jul 2024 - Present</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">TD Securities</span>
              <span className="text-right italic ml-4">New York, NY</span>
            </div>
            <ul>
              <li>— Bullets about current role</li>
            </ul>
          </div>
          <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                Software Developer Intern
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Jun 2023 - Aug 2023</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">TD Securities</span>
              <span className="text-right italic ml-4">New York, NY</span>
            </div>
            <ul>
              <li>— Bullets about role</li>
            </ul>
          </div>
          <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                Computer Science Tutor
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">May 2021 - Jan 2023</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">Prep Expert</span>
              <span className="text-right italic ml-4">Remote</span>
            </div>
            <ul>
              <li>— Bullets about role</li>
            </ul>
          </div>
          <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                Quality Assurance & Data Analyst Intern
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Apr 2021 - Jun 2021</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                Dialogue Health (formerly known as Tictrac)
              </span>
              <span className="text-right italic ml-4">Remote</span>
            </div>
            <ul>
              <li>— Bullets about role</li>
            </ul>
          </div>
        </Section>

        {/* Skills section */}
        <Section id="skills" heading="*skills" className="pb-2 pt-4"></Section>

        {/* Projects section */}
        <Section id="projects" heading="*projects" className="pb-2 pt-4">
          <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                SubletSwap
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Dec 2023</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                GH Link then Techstack here
              </span>
            </div>
            <ul>
              <li>— Bullets about project</li>
            </ul>
          </div>
          <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                Music Database with CRUD UI
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Dec 2021</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                GH Link then Techstack here
              </span>
            </div>
            <ul>
              <li>— Bullets about project</li>
            </ul>
          </div>
        </Section>

        {/* Footer */}
        <footer className="w-full py-8 flex justify-center">
          <div className="flex space-x-6">
            <a href="mailto:me@sebf.xyz">Email</a>
            <a
              href="https://github.com/seb-fousse"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sebastien-fousse"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/sebf.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
