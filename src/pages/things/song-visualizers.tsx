import Image from "next/image";
import { useEffect, useState } from "react";
import { motion as m } from "motion/react";
import { Play } from "lucide-react";

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

const VideoGrid: React.FC = () => {
  const [activeVideos, setActiveVideos] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (videoId: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActiveVideos((prev: any) => ({ ...prev, [videoId]: true }));
  };

  return (
    <div className="max-w-7xl m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className="w-full h-full bg-black cursor-pointer flex items-center justify-center"
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
                  <Play className="w-8 h-8 text-orange-50" />
                </div>
              </div>
            )}
          </m.div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;