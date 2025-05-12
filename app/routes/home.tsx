import type { Route } from "./+types/home";
import Resume from "~/resume/resume";

export const sleep = (ms: number = 0): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ed Le" },
    { name: "description", content: "Ed Le Portfolio" },
  ];
}

export async function clientLoader() {
  await sleep(2000);

  return 0;
}

export default function Home() {
  return <Resume />;
}
