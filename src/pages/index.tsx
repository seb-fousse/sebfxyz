import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

// Components
import TypewriterComponent from "typewriter-effect";
import ExplodingTextLink from "@/components/ExplodingTextLink/ExplodingTextLink.component";
import Section from "@/components/Basic/Section.component";
import List from "@/components/List/List.component";
import HoverPopup from "@/components/HoverPopup/HoverPopup.component";
import LocalWeather from "@/components/Weather/LocalWeather.component";
import RecentlyListened from "@/components/RecentlyListened/RecentlyListened";
import ListItem from "@/components/List/ListItem.component";
import CustomHead from "@/components/CustomHead/CustomHead.component";
import Layout from "@/components/Layout/Layout.component";

// Constants
import myThingItems from "@/constants/myThings.json";
import myThoughtItems from "@/constants/myThoughts.json";
import otherThoughtItems from "@/constants/otherThoughts.json";

// Motion
import { motion as m } from "motion/react";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  // Used to present the user with a down arrow if they've been at the top for 6+ seconds
  useEffect(() => {
    let timer: number;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        setShowArrow(false); // Reset the arrow visibility if user scrolls
      }
    };

    if (isAtTop) {
      // Start the timer only if the user is at the top
      timer = window.setTimeout(() => {
        setShowArrow(true);
      }, 6000); // 6 seconds
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer); // Clear the timer on cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAtTop]);

  return (
    <>
      <CustomHead title="Seb Fousse" description="Seb's personal site - showcasing work, projects, skills, writing, and contact information." url="https://sebf.xyz" />

      <Layout>

        {/* Splash section */}
        <section
          id="splash"
          className="container sm:flex sm:mx-auto min-h-screen"
        >
          <div className="flex flex-row flex-wrap mx-auto my-auto justify-start xl:justify-center">
            {/* Splash video */}
            <div id="splash-image-wrapper" className="p-4 mx-auto xl:mx-0">
              <video
                src={"images/home/splashImage.mp4"}
                width={512}
                height={512}
                loop
                autoPlay
                muted
                playsInline
              >
                Video could not be displayed
              </video>
            </div>

            {/* Title and links */}
            <m.div
              id="title-and-menu"
              className="absolute bottom-0 left-0 sm:relative px-4 lg:px-8 lg:mx-28 xl:mx-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Intro */}
              <m.div
                id="intro"
                className="text-2xl mt-8"
                variants={itemVariants}
              >
                <TypewriterComponent
                  options={{
                    strings: [
                      "Hey, I'm",
                      "Hi, the name's",
                      "What's up, you can call me",
                      "Hello, I go by",
                    ],
                    cursor: "_",
                    delay: 65,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </m.div>

              {/* Name */}
              <m.div
                id="name"
                className="font-bold text-7xl"
                variants={itemVariants}
              >
                <h1 className="group">
                  Seb
                  <span className="inline-block text-primary opacity-10 transition-opacity duration-300 group-hover:opacity-100">
                    astien
                  </span>
                </h1>
                <h1>Foussé</h1>
              </m.div>

              {/* Links */}
              <m.div
                id="splash-menu-wrapper"
                className="menu-wrapper py-8 xl:block hidden"
                variants={itemVariants}
              >
                <div id="splash-menu" className="space-y-8">
                  <ExplodingTextLink
                    text="*about"
                    href="#about"
                  ></ExplodingTextLink>
                  <ExplodingTextLink
                    text="*things"
                    href="#things"
                  ></ExplodingTextLink>
                  <ExplodingTextLink
                    text="*thoughts"
                    href="#thoughts"
                  ></ExplodingTextLink>
                </div>
              </m.div>
            </m.div>
          </div>
        </section>

        {/* Downward Arrow */}
        <AnimatePresence>
          {showArrow && (
            <m.div
              className="fixed bottom-5 right-5 sm:right-1/2 sm:-translate-x-1/2 m-1 md:m-3 text-4xl animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              &darr;
            </m.div>
          )}
        </AnimatePresence>

        {/* About section */}
        <Section id="about" heading="*about" className="pb-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-9 pt-4 pb-8">
            <div>
              <h4 className="text-2xl font-bold italic pb-2">Who is Seb?</h4>
              <HoverPopup text="Globetrotting multi-citizen">
                <div className="p-2 bg-card text-card-foreground rounded-sm drop-shadow-lg">
                  London born-n-bred! American, British, and French passport
                  holder
                </div>
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="software developer">
                <Image
                  className="drop-shadow-lg"
                  src="/images/home/tanner-computer-kid.gif"
                  alt="Gif of kid coding at computer"
                  width="320"
                  height="241"
                  unoptimized
                />
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="Brooklyn based">
                <div className="p-2 bg-card text-card-foreground rounded-sm drop-shadow-lg">
                  <LocalWeather />
                </div>
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="hobby hopper">
                <div className="p-2 bg-card text-card-foreground rounded-sm drop-shadow-lg">
                  Jack of some trades, master of fewer
                </div>
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="sudoku enthusiast" />
              ,&nbsp;
              <HoverPopup text="beginner boulderer">
                <Image
                  className="drop-shadow-lg"
                  src="/images/home/fail-jump.gif"
                  alt="Gif of guy falling of a wall"
                  width="480"
                  height="270"
                  unoptimized
                />
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="music appreciator">
                <div className="p-2 bg-card text-card-foreground rounded-sm drop-shadow-lg">
                  <RecentlyListened />
                </div>
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="psych-study participant" />, and other things
              that make me, <span className="italic">me</span>.
            </div>
            <div>
              <h4 className="text-2xl font-bold italic pb-2">
                What is this website?
              </h4>
              <p>
                It&apos;s my digital scrapbook. A junk yard for me to dump
                things I make, write, or find online. The internet should be a
                terrible mess of custom made pages & projects, and this site
                aims to add to that trash pile. Keep the web weird!
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold italic  pb-2">
                Recruiter or need a resume?
              </h4>
              <p>
                Thanks for giving it a look!{" "}
                <Link href="/resume" className="text-primary">
                  This page
                </Link>{" "}
                might be more relevant for you. It lists my academic and
                professional accomplishments. Also, sorry about the
                nightmare fuel just above... I promise I have a
                more professional headshot somewhere.
              </p>
            </div>
          </div>
        </Section>

        {/* Things section */}
        <Section id="things" heading="*things" className="pb-2">
          {/* My things */}
          <h4 className="text-2xl font-bold italic px-9 pt-4 pb-3">
            My projects, work, art, hobbies, and more
          </h4>
          <div className="px-9">
            <List items={myThingItems}/>
          </div>
          {/* Not my things */}
          <h4 className="text-2xl font-bold italic px-9 pt-4 pb-3">
            Other cool stuff I found online
          </h4>
          <div className="px-9">
            <ListItem
              title="Random"
              subtitle="Roll the dice"
              href={"/random"}
              random
            />
          </div>
        </Section>

        {/* Thoughts section */}
        <Section id="thoughts" heading="*thoughts" className="pb-2">
          {/* Subtitle */}
          <h4 className="text-2xl font-bold italic px-9 pt-4 pb-3">
            Rambles from my soapbox
          </h4>
          <div className="px-9">
            <List
              items={myThoughtItems}
              maxItems={5}
              seeMoreHref={"/thoughts"}
            />
          </div>
          <h4 className="text-2xl font-bold italic px-9 pt-4 pb-3">
            Articles, essays, and stories that I enjoyed reading
          </h4>
          <div className="px-9">
            <List
              items={otherThoughtItems}
              maxItems={5}
              seeMoreHref={"/thoughts"}
            />
          </div>
        </Section>
      </Layout>
    </>
  );
}
