import { useState } from "react";
import { CircleHelp, CircleX } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.component";
import BackButton from "@/components/Buttons/BackButton";

type IconType = "help" | "x";

interface IconData {
  id: number;
  type: IconType;
  x: number;
  y: number;
}

export default function Custom404() {
  const [icons, setIcons] = useState<IconData[]>([
    {
      id: 0,
      type: "help",
      x: 50,
      y: 40,
    },
  ]);

  const handleClick = (id: number) => {
    setIcons((prevIcons) => {
      const updatedIcons = prevIcons.map((icon) =>
        icon.id === id ? { ...icon, type: "x" as IconType } : icon
      );

      const newId = Math.max(...prevIcons.map((i) => i.id)) + 1;
      const newIcon: IconData = {
        id: newId,
        type: "help",
        x: Math.random() * 90, // percentage left
        y: Math.random() * 80, // percentage top
      };

      return [...updatedIcons, newIcon];
    });
  };

  return (
    <div className="w-screen h-screenover flow-hidden">
      <BackButton className="fixed top-4 left-4 z-1000" href={'/'} />
      <ThemeToggle className="fixed bottom-4 right-4 z-1000"/>

      <div className="absolute top-[50%] left-[50%] translate-[50%] -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold text-center mt-10">404 - Page Not Found</h1>
        <p className="text-center mb-10">
          What were you looking for?
        </p>
      </div>

      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute"
          style={{ left: `${icon.x}vw`, top: `${icon.y}vh`, transform: 'translate(-50%, -50%)' }}
          onClick={() => icon.type === "help" && handleClick(icon.id)}
        >
          {icon.type === "help" ? (
            <CircleHelp className="w-8 h-8 text-primary cursor-pointer animate-pulse hover:animate-spin hover:drop-shadow-md hover:w-10 hover:h-10" />
          ) : (
            <CircleX className="w-8 h-8" />
          )}
        </div>
      ))}
    </div>
  );
}
