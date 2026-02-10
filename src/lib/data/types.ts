export type Client = {
  name: string;
  description: string;
  icon: string;
  link: string;
};

export type Team = {
  name: string;
  description: string;
  icon: string;
  link: string;
};

export type NavItem = {
  icon: string;
  name: string;
  link: string;
};

export type NavBar = NavItem[];

export type Link = {
  name: string;
  link: string;
  icon: string;
  target: string;
};


export type LinkMenu = Link[]
