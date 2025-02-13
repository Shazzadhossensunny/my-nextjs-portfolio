export type TProject = {
  links: TLinks;
  _id: string;
  title: string;
  description: string;
  overview: string;
  image: string;
  gallery: string[];
  coreFeatures: string[];
  technologies: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TLinks = {
  github: TGithub;
  live: string;
};

export type TGithub = {
  frontend: string;
  backend: string;
};
