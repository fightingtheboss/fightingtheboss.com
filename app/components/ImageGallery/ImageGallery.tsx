export interface Image {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="!col-start-1 col-end-[-1] w-full">
      <div className="flex flex-wrap py-8">
        {images.map((image, index) => (
          <figure
            key={index}
            className="my-1 w-1/2 content-start px-1 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          >
            <img src={image.src} alt={image.alt} className="rounded" />
          </figure>
        ))}
      </div>
    </div>
  );
}
