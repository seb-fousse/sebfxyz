import Section from "@/components/Basic/Section.component";
import BackButton from "@/components/Buttons/BackButton";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.component";
import Link from "next/link";
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

        <h1 className="text-6xl font-bold text-center pt-4 pb-2">Sebastien Foussé</h1>
        <div className="flex space-x-6 justify-center text-primary">
          <a href="/pdf/SebastienFousse_Resume_Apr2025.pdf" download>Download Condensed Resume</a>
          <a href="mailto:me@sebf.xyz">Email me</a>
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
        </div>

        {/* Education section */}
        <Section id="education" heading="*education" className="pb-2">
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
                B.S. Computer Science, Minor in Mathematics, Cum Laude, GPA 3.79
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
                Candidate for B.S. Computer Science & Cognitive Psychology, Incomplete -
                Transferred Out, GPA 3.83
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
                Rotational Software Developer
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Jul 2024 - Present</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">TD Securities</span>
              <span className="text-right italic ml-4">New York, NY</span>
            </div>
            <ul className="pl-4">
              <li>— Built a new feature (React, Typescript, Java, Spring Boot) that allows front office users to create/edit/delete precious metals products with safe guards and a maker-checker workflow</li>
              <li>— Trained a classification model to predict whether a company is likely to be a target of an activist investor campaign</li>
              <li>— Built a pipeline with MLFlow to test various combinations of feature selection, imputation, oversampling, model selection, and hyperparam tuning</li>
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
            <ul className="pl-4">
              <li>— Developed micro-services using Java Spring Boot and Solace PubSub+ with comprehensive test coverage</li>
              <li>— Pushed tickets to production, collaboratively debugged code, and participated in code review</li>
              <li>— Studied FIX protocol, commodities trading, and event-driven architecture between tasks</li>
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
            <ul className="pl-4">
              <li>— Assisted students in preparing for the AP Computer Science Principles and AP Computer Science exams</li>
              <li>— Covered key topics, built personalized lesson plans, and compiled study materials for students</li>
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
                Dialogue Health (formerly Tictrac)
              </span>
              <span className="text-right italic ml-4">Remote</span>
            </div>
            <ul className="pl-4">
              <li>— Used Postman to send API requests and verified the results on the front-end</li>
              <li>— Analyzed statistics on Tableau pages to determine user engagement for different clients</li>
            </ul>
          </div>
        </Section>

        {/* Skills section */}
        <Section id="skills" heading="*skills" className="pb-2 pt-4">
          <div className="px-9 pt-4">
            <span className="text-left text-lg sm:text-xl font-bold">Languages:</span>
            <span className="pl-4">JavaScript, Typescript, HTML/CSS, Python, Java, SQL</span>
          </div>
          <div className="px-9">
            <span className="text-left text-lg sm:text-xl font-bold">Frameworks:</span>
            <span className="pl-4">React, Next.js, Mantine, Tailwind CSS, Django, Flask, FastAPI, JUnit, Spring Boot</span>
          </div>
          <div className="px-9">
            <span className="text-left text-lg sm:text-xl font-bold">Dev Tools:</span>
            <span className="pl-4">Git, Github, Jira, Bitbucket, VS Code, IntelliJ, JupyterLab, Postman API</span>
          </div>
          <div className="px-9">
            <span className="text-left text-lg sm:text-xl font-bold">Libraries:</span>
            <span className="pl-4">pandas, NumPy, Matplotlib, scikit-learn, XGBoost, MLFlow</span>
          </div>
        </Section>

        {/* Projects section */}
        <Section id="projects" heading="*projects" className="pb-16 pt-4">
        <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                NoteMark
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Sep - Dec 2023</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                Typescript, React, Electron, Tailwind CSS
              </span>
              <span className="italic text-primary"> 
                <Link href="https://github.com/seb-fousse/note-mark" target= "_blank">GitHub</Link>
              </span>
            </div>
            <ul className="pl-4">
              <li>— Designed and developed a lightweight web app for creating and managing Markdown notes with real-time preview functionality.</li>
              <li>— Implemented user-friendly features including local storage persistence, dark/light themes, and intuitive note organization.</li>
              <li>— Leveraged modern web technologies (TypeScript, React, Tailwind CSS) to deliver a fast, responsive, and accessible user experience.</li>
            </ul>
          </div>
          <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                SubletSwap
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Sep - Dec 2023</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                Javascript, Python, SQL, Next.js, FastAPI, PostgreSQL, Bootstrap
              </span>
            </div>
            <ul className="pl-4">
              <li>— Developed a web-app to allow students to list and search for sublets with filters for date and location</li>
              <li>— Created an API accessible back-end that provides the site with account creation and login functionality</li>
              <li>— Wrote a comprehensive project proposal, project management plan, and system requirements specification</li>
              <li>— Followed agile development methodologies combined with kanban boards and bi-weekly stand-ups</li>
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
                Java, SQL, Spring Boot
              </span>
            </div>
            <ul className="pl-4">
              <li>— Designed an SQL database to keep track of song, playlist, and user data</li>
              <li>— Used database concepts such as one-to-many relationships, mapping tables, and foreign keys</li>
              <li>— Developed a UI with Java and Spring to perform CRUD operations on the database</li>
            </ul>
          </div>
          <div className="px-9 pt-4">
            <div className="flex items-center justify-between w-full">
              <span className="text-left text-lg sm:text-xl font-bold">
                Hiking With Dad
              </span>
              <div className="flex-grow h-px bg-foreground mx-4" />
              <span className="text-right ml-4">Sep - Dec 2023</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-left italic">
                Javascript, React, Netlify
              </span>
              <span className="italic text-primary"> 
                <Link href="https://github.com/seb-fousse/hiking-with-dad" target= "_blank">GitHub</Link>
              </span>
            </div>
            <ul className="pl-4">
              <li>— Developed a web-app in 36 hours as an entry for Hack Beanpot 2021 and won the runner-up prize</li>
              <li>— Pulled data from a Weather API to determine an ideal packing list for a hike</li>
              <li>— Built a chatbot with branching conversation paths and deployed the code on Netlify</li>
            </ul>
          </div>
        </Section>

      </div>
    </div>
  );
}
