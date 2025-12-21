import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  href: string;
  expanded?: boolean;
  random?: boolean;
  tags?: string[];
}

const generateWaveString = (length: number, random?: boolean) => {
  const specialChars = "!@#$%^&*()_+-=[]{}|;:'\",.<>?/`~";
  if (random) {
    return Array.from({ length }, () =>
      specialChars.charAt(Math.floor(Math.random() * specialChars.length))
    ).join("");
  }
  return Array.from({ length }, () => "⋅.˳˳.⋅ॱ˙˙ॱ").join("");
};

const generateLineString = (length: number) =>
  Array.from({ length }, () => "-").join("");

export default function ListItem({ title, subtitle, href, expanded, random, tags }: Props) {
  const [waveText, setWaveText] = useState<string>(generateLineString(128));
  const [isHovering, setIsHovering] = useState(false);

  const isExternal = href.includes("https://") || href.includes("http://");

  useEffect(() => {
    let scrambleInterval: number | undefined;

    if (isHovering) {
      scrambleInterval = window.setInterval(() => {
        random
          ? setWaveText(generateWaveString(128, random))
          : setWaveText(
              (prevText) => prevText.slice(-1) + prevText.slice(0, -1)
            );
      }, 33); // approx 30fps
    } else if (scrambleInterval !== undefined) {
      window.clearInterval(scrambleInterval);
    }

    return () => {
      if (scrambleInterval !== undefined) {
        clearInterval(scrambleInterval);
        setWaveText(generateLineString(128)); // Reset text when hover stops
      }
    };
  }, [isHovering, random]);

  return (
    <Link
      className="hover:no-underline hover:font-bold hover:text-primary transition-all duration-200"
      href={href}
      target={isExternal ? "_blank" : "_self"}
    >
      <motion.div
        className="flex flex-grow items-center pt-1 pb-1 font-mono cursor-pointer"
        onMouseEnter={() => {
          setWaveText(generateWaveString(random ? 128 : 15, random));
          setIsHovering(true);
        }}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ x: 20 }} // Moves right on hover
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
      >
        {/* Full-width view */}
        <div className="hidden md:flex items-start justify-between w-full">
          <span className="text-base text-nowrap mr-[10px] pt-0.5">{title}</span>
          <span className="flex-grow text-center text-base whitespace-nowrap overflow-hidden pt-0.5">
            {waveText || generateLineString(128)}
          </span>
          <div className="flex flex-col items-end ml-[10px]">
            <span className="text-base text-nowrap">{subtitle}</span>
            {expanded && tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-1.5 justify-end">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 rounded-full text-xs font-medium border border-primary text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden items-center justify-between w-full">
          <span className="text-base truncate">{title}</span>
          <span>&rarr;</span>
        </div>
      </motion.div>
    </Link>
  );
}
