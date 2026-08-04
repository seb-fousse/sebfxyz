import things from '@/constants/otherThings.json'
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

interface IThing {
  title: string;
  subtitle: string;
  href: string;
}

export default function RandomRedirect() {
  const router = useRouter();
  const [currentThing, setCurrentThing] = useState<IThing>({title: "", subtitle: "", href:""});
  const isActive = useRef(true);

  useEffect(() => {
    isActive.current = true; // component is mounted
    let interval = 20;
    let count = 0;
    const maxCount = 40;
    let timer: ReturnType<typeof setTimeout>;
    // Seeded here rather than in useState so the random pick happens on the
    // client only, and never differs between server and client render
    let index = Math.floor(Math.random() * things.length);

    const spin = () => {
      timer = setTimeout(() => {
        index = (index + 1) % things.length;
        setCurrentThing(things[index]);

        count++;

        if (count < maxCount) {
          interval *= (count < maxCount - 5) ? 1.05 : 1.2;
          spin();
        } else {
          timer = setTimeout(() => {
            if (isActive.current && router.pathname === '/random') {
              router.push(things[index]["href"]);
            }
          }, 3000);
        }
      }, interval);
    };

    spin();

    return () => {
      isActive.current = false; // component is unmounted or route changed
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center text-center h-dvh">
      <div className="font-bold text-2xl">
        {currentThing.title}
      </div>
      <div className="font-bold italic text-lg">
        {currentThing.subtitle}
      </div>
    </div>
  );
};