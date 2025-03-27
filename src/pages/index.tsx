import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
//import localFont from "next/font/local";

import { MouseEvent, useEffect, useState } from "react";

// Components
import TypewriterComponent from "typewriter-effect";
import ExplodingTextLink from "@/components/ExplodingTextLink/ExplodingTextLink.component";
import HomeSection from "@/components/HomeSection/HomeSection.component";
import List from "@/components/List/List.component";
import HoverPopup from "@/components/HoverPopup/HoverPopup.component";
import LocalWeather from "@/components/Weather/LocalWeather.component";

// Constants
import thingItems from "@/constants/things.json";
import thoughtItems from "@/constants/thoughts.json";

// Motion
import { motion as m } from "motion/react";
import { AnimatePresence } from "motion/react";

// Styles
import styles from "./Home.module.css";
import RecentlyListened from "@/components/RecentlyListened/RecentlyListened";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});*/

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

  // https://reacthustle.com/blog/nextjs-scroll-to-element
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };

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
    <div>
      <Head>
        {/* TODO: Update header info */}
        {/* Primary Meta Tags */}
        <title>Seb Fousse</title>
        <meta name="title" content="Seb Fousse" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Sebastien Fousse is a software engineer. His interests include coding, art, photography, and more."
        />
        <meta name="author" content="Seb Fousse" />
        <meta
          name="keywords"
          content="seb, fousse, sebastien, sebastian, programming, portfolio, creative, art, design, software"
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Seb Fousse" />
        <meta
          property="og:site_name"
          data-page-subject="true"
          content="Seb Fousse"
        />
        <meta property="og:url" content="https://sebf.xyz" />
        <meta
          property="og:description"
          name="description"
          content="Sebastien Fousse is a software engineer. His interests include coding, art, photography, and more."
        />
        <meta property="og:image" content="" />{" "}
        {/* TODO: Add image content here */}
        {/* Favicon & Device Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl m-auto">
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
              className="absolute bottom-0 left-0 sm:relative text-neutral-800 px-4 lg:px-8 lg:mx-28 xl:mx-0"
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
                <h1 className={styles.firstName}>
                  Seb<span className={styles.extra}>astien</span>
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
                    onClick={handleScroll}
                  ></ExplodingTextLink>
                  <ExplodingTextLink
                    text="*things"
                    href="#things"
                    onClick={handleScroll}
                  ></ExplodingTextLink>
                  <ExplodingTextLink
                    text="*thoughts"
                    href="#thoughts"
                    onClick={handleScroll}
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
              className="fixed bottom-5 right-5 sm:right-1/2 sm:-translate-x-1/2 m-1 md:m-3 text-5xl animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              &darr;
            </m.div>
          )}
        </AnimatePresence>

        {/* About section */}
        <HomeSection id="about" heading="*about" className="pb-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-9 py-6">
            <div>
              <h4 className="text-2xl font-bold italic text-neutral-800 pb-2">
                Who is Seb?
              </h4>
              <HoverPopup text="Globetrotting multi-citizen">
                <div className="p-2 bg-neutral-800 text-orange-50 rounded-sm drop-shadow-lg">
                  London born-n-bred! American, British, and French passport holder
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
                />
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="Brooklyn based">
                <div className="p-2 bg-neutral-800 text-orange-50 rounded-sm drop-shadow-lg">
                  <LocalWeather />
                </div>
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="hobby hopper">
                <div className="p-2 bg-neutral-800 text-orange-50 rounded-sm drop-shadow-lg">
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
                />
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="terminally online" />
              ,&nbsp;
              <HoverPopup text="music appreciator">
                <div className="p-2 bg-neutral-800 text-orange-50 rounded-sm drop-shadow-lg">
                  <RecentlyListened />
                </div>
              </HoverPopup>
              ,&nbsp;
              <HoverPopup text="psych-study participant" />
              , and other things that make me, <span className="italic">me</span>.
            </div>
            <div>
              <h4 className="text-2xl font-bold italic text-neutral-800 pb-2">
                What is this website?
              </h4>
              <p>
                It&apos;s my digital scrapbook. A junk yard for me to dump
                things I make, write, or find online. The internet should be a 
                terrible mess of custom made pages & projects, and this site aims 
                to add to that trash pile. Keep the web weird!
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold italic text-neutral-800 pb-2">
                Are you a recruiter?
              </h4>
              <p>
                Thanks for considering me!{" "}
                <Link href="/" className="underline">
                  This page
                </Link>{" "}
                might be more relevant for you. It lists my academic and
                professional accomplishments. Also, sorry about the
                splash-screen nightmare fuel just above... I promise I have a
                more professional headshot somewhere.
              </p>
            </div>
          </div>
        </HomeSection>

        {/* Things section */}
        <HomeSection id="things" heading="*things" className="pb-2">
          {/* My things */}
          <h4 className="text-2xl font-bold italic text-neutral-800 px-9 pt-6 pb-3">
            My projects, work, art, hobbies, and more
          </h4>
          <div className="px-9">
            <List items={thingItems} seeMoreHref={"/things"} />
          </div>
          {/* Not my things */}
          <h4 className="text-2xl font-bold italic text-neutral-800 px-9 pt-6 pb-3">
            Other cool things I found online
          </h4>
        </HomeSection>

        {/* Thoughts section */}
        <HomeSection id="thoughts" heading="*thoughts" className="pb-2">
          {/* Subtitle */}
          <h4 className="text-2xl font-bold italic text-neutral-800 px-9 pt-6 pb-3">
            Rambles from my soapbox
          </h4>
          <div className="px-9">
            <List items={thoughtItems} maxItems={5} seeMoreHref={"/thoughts"} />
          </div>
        </HomeSection>

        {/* Footer */}
        <footer className="w-full py-8 flex justify-center">
          <div className="flex space-x-6 text-neutral-800">
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
