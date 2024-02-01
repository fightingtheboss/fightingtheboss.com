import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

export interface Image {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState<number | undefined>(undefined);

  const handleDialogOpen = (index: number) => {
    setImageIndex(index);
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="!col-start-1 col-end-[-1] w-full">
        <div className="flex flex-wrap py-8">
          {images.map((image, index) => (
            <figure
              key={index}
              className="my-1 w-1/2 content-start px-1 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
            >
              <DialogTrigger onClick={() => handleDialogOpen(index)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="not-prose rounded"
                />
              </DialogTrigger>
            </figure>
          ))}
        </div>
      </div>

      <DialogContent>
        <Carousel opts={{ startIndex: imageIndex, loop: true }}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image.src} alt={image.alt} className="rounded" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
