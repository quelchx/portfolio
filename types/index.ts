export type Article = {
  id: string;
  title: string;
  created: string;
  body: string;
  image: string;
  topic: string;
};

export type Repo = {
  name: string;
  description: string;
  stars: number;
  forks: number;
  watchers: number;
  created: string;
  updated: string;
  url: string;
};

export type Job = {
  company: string;
  role: string;
  duties: string[];
};

export type WorkExperience = {
  years: string;
  jobs: Job[];
};

export type Platform = {
  platform: string;
  username: string;
  icon: string;
  url?: string;
};

export type Socials = {
  section: string;
  overview: string;
  platforms: Platform[];
};
