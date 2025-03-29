import things from '@/constants/otherThings.json'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IThing {
  title: string;
  subtitle: string;
  href: string;
}

export default function RandomRedirect() {
  const router = useRouter();
  const [currentThing, setCurrentThing] = useState<IThing>({title: "", subtitle: "", href:""});
  const [index, setIndex] = useState(Math.floor(Math.random()*things.length));

  useEffect(() => {
    let interval = 20;
    let count = 0;
    const maxCount = 60;
    let finalIndex = index;
    
    const spin = () => {
      setTimeout(() => {
        setIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % things.length;
          setCurrentThing(things[newIndex]);
          finalIndex = newIndex;
          return newIndex;
        });

        count++;
        
        if (count < maxCount) {
          interval *= (count < maxCount - 5) ? 1.05 : 1.2;
          spin();
        } else {
          setTimeout(() => {
            router.push(things[finalIndex]["href"]);
          }, 2000); // Pause for 2 seconds before redirecting
        }
      }, interval);
    };
    
    spin();
    
    return () => {};
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-dvh text-neutral-800 dark:text-orange-100">
      <div className="font-bold text-2xl">
        {currentThing.title}
      </div>
      <div className="font-bold italic text-lg">
        {currentThing.subtitle}
      </div>
    </div>
  );
};