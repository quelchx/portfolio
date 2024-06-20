import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(props: {
  collection: string;
  id: string;
  image: string;
}) {
  const { collection, id, image } = props;
  return `${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${collection}/${id}/${image}`;
}
