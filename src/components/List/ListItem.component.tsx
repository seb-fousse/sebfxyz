import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  href: string;
  random?: boolean;
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

export default function ListItem({ title, subtitle, href, random }: Props) {
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
        <div className="hidden md:flex items-center justify-between w-full">
          <span className="text-base text-nowrap mr-[10px]">{title}</span>
          <span className="flex-grow text-center text-base whitespace-nowrap overflow-hidden">
            {waveText || generateLineString(128)}
          </span>
          <span className="text-base text-nowrap ml-[10px]">{subtitle}</span>
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
