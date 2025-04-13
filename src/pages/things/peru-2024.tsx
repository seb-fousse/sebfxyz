import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.component";
import BackButton from "@/components/Buttons/BackButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import imageData from "@/constants/things/peru2024.json"
import Image from "next/image";
import { useEffect, useState, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

export default function MusingManWinkle() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const [viewportHeight, setViewportHeight] = useState(0)
  const isMobile = useMobile()

  // Find the image with the largest aspect ratio (widest relative to height)
  const maxAspectRatio = Math.max(...imageData.map((image) => image.width / image.height))

  // Base height - will be adjusted based on container width
  const baseHeight = 400

  // Update container width and viewport height on mount and window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth)
      }
      setViewportHeight(window.innerHeight)
    }

    // Initial measurement
    updateDimensions()

    // Set up resize observer for container width
    const resizeObserver = new ResizeObserver(updateDimensions)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    // Listen for window resize for viewport height
    window.addEventListener("resize", updateDimensions)

    // Clean up
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Calculate the height based on the container width and max aspect ratio
  // This ensures the widest image fits perfectly in the container
  const calculatedHeight = containerWidth > 0 ? containerWidth / maxAspectRatio : baseHeight

  // Calculate 80% of viewport height
  const maxHeight = viewportHeight * 0.8

  // Use the smaller of calculated height or 80% of viewport height
  // Also consider mobile adjustment
  const finalHeight = isMobile ? Math.min(calculatedHeight, 300, maxHeight) : Math.min(calculatedHeight, maxHeight)

  return (
    <div className="max-w-full w-full mx-auto px-4 flex flex-col" ref={containerRef}>
      <BackButton className="fixed top-4 sm:top-3 left-5 z-10" href={'/#things'} />
      <ThemeToggle className="fixed top-5 right-5 z-10"/>

      <Carousel
        opts={{
          align: "center",
          skipSnaps: false,
          containScroll: "trimSnaps",
        }}
        className="w-full justify-center"
      >
        <CarouselContent className="-ml-4 pt-16">
          {imageData.map((image, index) => {
            // Calculate width based on aspect ratio while maintaining consistent height
            const aspectRatio = image.width / image.height
            const calculatedWidth = finalHeight * aspectRatio

            return (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-auto flex items-center justify-center"
                style={{ flex: "0 0 auto" }}
              >
                <div
                  className={'overflow-hidden'}
                  style={{ height: `${finalHeight}px`, width: `${calculatedWidth}px` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    placeholder="blur"
                    blurDataURL={image.blurPlaceholder}
                    priority={index < 5}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className="flex justify-center gap-4 mt-4">
          <CarouselPrevious className="relative inset-0 translate-y-0" />
          <CarouselNext className="relative inset-0 translate-y-0" />
        </div>
      </Carousel>
      
      
      <div className="px-9 pt-3">
        <span className="italic font-bold">Peru 2024&nbsp;</span>
        - Photos taken on a 2 week backpacking trip. Noteable highlights include the five-day Salkantay trek, Machu Picchu, the Red Valley, Maras, Moray, paragliding in the Andes, Aji de gallina, and a cold Cusquena.
      </div>
      
    </div>
  );
};
