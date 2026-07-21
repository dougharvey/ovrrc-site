import raw from "./galleries.json";

export type Gallery = {
  title: string;
  slug: string;
  images: string[];
};

export const galleries = raw as Gallery[];
