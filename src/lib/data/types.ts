import type { StdioNull } from "child_process";
import type { SrvRecord } from "dns";
import { text } from "stream/consumers";
import { ssrImportKey } from "vite/module-runner";

export type NavItem = {
  icon: string;
  name: string;
  link: string;
};

export type NavBar = NavItem[];

export type TextLink = {
  github: string;
  repositories: string;
  teams: string;
  techStack: string;
  discord: string;
  email: string;
};

export type Link = {
  name: string;
  description: string;
  link: string;
  icon: string;
  target: string;
};

export type LinkTree = Link[];

export type Project = {
  name: string;
  icon: string;
  url: ProjectLink[];
  description: string;
  languages: string[] | null;
  team: string | null;
  teamIcon: string | null;
  archived: boolean;
};

export type ProjectLink = {
  name: string;
  icon: string;
  link: string;
};

export type Projects = Project[];

export type Skill = {
  name: string;
  icon: string;
  link: string;
};

export type Skills = Skill[];
