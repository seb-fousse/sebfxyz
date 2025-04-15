import { useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.component";
import BackButton from "@/components/Buttons/BackButton";
import Link from "next/link";

export default function MusingManWinkle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl m-auto">
      <BackButton className="fixed top-5 left-5 z-10" href={'/#things'} />
      <ThemeToggle className="fixed top-5 right-5 z-10"/>

      <h1 className="font-bold text-6xl p-2 lowercase">
        *Musing Man Winkle
      </h1>

      <div className="w-full aspect-video py-4 px-2">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/l2EZbWd4yJE?modestbranding=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="px-9">
        An audio-visual portrait I created with machine learning tools video editing software. I trained a <Link className="text-primary" href="https://github.com/NVlabs/stylegan2" target="_blank">StyleGAN2</Link> model on 1000+ photos of my face as an infant, toddler, child, teenager, and adult. The audio is made up of clips from assorted childhood home videos, spliced together with <Link className="text-primary" href="https://www.apple.com/logic-pro/" target="_blank">Logic Pro</Link>. Minor video edits were done in <Link className="text-primary" href="https://www.apple.com/final-cut-pro/" target="_blank">Final Cut Pro</Link>. The name for this piece is a reference to <Link className="text-primary" href="https://en.wikipedia.org/wiki/Rip_Van_Winkle" target="_blank">Rip Van Winkle</Link>, a Dutch-American who falls asleep and wakes up 20 years later in a different world. Just over 20 years worth of photos used to train this model.
      </div>
      
    </div>
  );
};
