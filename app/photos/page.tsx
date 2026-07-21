import Image from "next/image";
import { galleries } from "@/data/galleries";

export default function PhotosPage() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold text-gray-900">Photos</h1>
      {galleries.map((gallery) => (
        <section key={gallery.slug}>
          <h2 className="text-xl font-semibold mb-3">{gallery.title}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {gallery.images.map((src) => (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded-md bg-gray-100 block"
              >
                <Image
                  src={src}
                  alt={gallery.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform"
                />
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
