import { Code, Link, LinkReference, PhrasingContent } from "mdast";

export interface ProjectData {
  title: string;
  description: string;
  imageSrc?: string;
  technologies: string[];
  links: {
    href: string;
    label: string;
  }[];
  features?: string[];
  gallery?: string[];
  detailedDescription?: string;
}

export interface ReadmeContent {
  title: string;
  url: string;
  sections: {
    [key: string]: {
      [key: string]: (string | CodeData | LinkData)[];
    } | (string | CodeData | LinkData)[];
  };
}

export interface Readme {
  id: number;
  repoId: string;
  projectData: ProjectData;
  readmeContent: ReadmeContent;
}

export interface CodeData extends Code {
  type: 'code';
  lang: string | null;
  meta: string | null;
  value: string;
}

export interface LinkData extends Link {
  type: 'link';
  url: string;
  title: string | null;
  children: PhrasingContent[];
}