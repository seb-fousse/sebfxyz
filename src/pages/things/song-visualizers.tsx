import Image from "next/image";
import { useEffect, useState } from "react";
import { motion as m } from "motion/react";
import { Play } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.component";
import BackButton from "@/components/Buttons/BackButton";
import Link from "next/link";

const videosAndThumb = [
  ["dW0Fn2O8lLY", "turnmills"],
  ["fQV1OyrRab4", "the-protest"],
  ["vPtHWSCzrEs", "test-n-recognize"],
  ["fUJlwQBbZ8k", "birdsong"],
  ["ylUmG4nYU4U", "blue-dot"],
  ["HGi7xXm4zkI", "idris"],
  ["HaL9PucMaFQ", "foimal"],
  ["j4oC8ZG-Q3c", "bias"],
  ["0fCdkjIAM3A", "vegyn"],
];

export default function SongVisualizers() {
  const [activeVideos, setActiveVideos] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (videoId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActiveVideos((prev: any) => ({ ...prev, [videoId]: true }));
  };

  return (
    <div className="max-w-7xl m-auto items-center">
      <BackButton className="fixed top-4 left-4 z-10" href={'/#things'} />
      <ThemeToggle className="fixed top-4 right-4 z-10"/>

      <h1 className="text-center font-bold text-4xl md:text-6xl pt-2 md:py-2 lowercase">
        Song Visualizers
      </h1>
      
      <div className="px-4">
        <div className="pt-4 pb-3 italic">
          An assortment of <Link className="text-primary" href="https://github.com/NVlabs/stylegan2" target="_blank">StyleGAN2</Link> models synced to different songs I like. I trained the lava lamp model on ~800 images of lava lamps, while the remaining models were sourced from other people. <Link className="text-primary" href="https://github.com/mikael-alafriz-deel/lucid-sonic-dreams" target="_blank">Lucid Sonic Dreams</Link> was used to sync the models to audio.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          {videosAndThumb.map((videosAndThumb, index) => (
            <m.div 
              key={index} 
              className="relative w-full aspect-square overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {activeVideos[videosAndThumb[0]] ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videosAndThumb[0]}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div
                  className="w-full h-full bg-black cursor-pointer flex items-center justify-center transition hover:invert"
                  onClick={() => handleClick(videosAndThumb[0])}
                >
                  <Image
                    className="w-full h-full object-cover"
                    src={`/images/song-visualizers/thumbs/${videosAndThumb[1]}.png`}
                    alt="Video Thumbnail"
                    width="512"
                    height="512"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-orange-50 dark:text-neutral-900" />
                  </div>
                </div>
              )}
            </m.div>
          ))}
        </div>
      </div>
     
    </div>
  );
};
