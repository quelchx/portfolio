import { type BaseModel } from "pocketbase";

type CollectionBase = Pick<BaseModel, "id" | "created" | "updated">;

export type Article = {
  title: string;
  body: string;
  image: string;
  topic: string;
} & CollectionBase;

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

export type Service = {
  skill: string;
  label: string;
  pricing: string;
  description: string;
  services: string[];
  details: string;
} & CollectionBase;

export type Post = {
  name: string;
  message: string;
} & CollectionBase;
