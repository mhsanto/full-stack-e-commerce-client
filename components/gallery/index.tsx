"use client";
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

type GalleryProps = {
  images: ImageType[];
};
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex  flex-col-reverse">
      <div className="mx-auto mt-5 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full  max-w-full sm:mx-auto md:w-[20rem] lg:w-[28rem]">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                fill
                alt="Product image"
                className="object-cover object-center max-w-full max-h-auto"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
