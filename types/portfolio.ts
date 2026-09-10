export type NavItem = {
  label: string;
  href: string;
};

export type BuildModule = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  span?: string;
};

export type PortfolioProject = {
  title: string;
  category: string;
  type: string;
  description: string;
  stack: string[];
  mark: string;
  url?: string;
};
