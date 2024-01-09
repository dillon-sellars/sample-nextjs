import { getGreeting } from "@/app/lib/data";

export default async function Greeting() {
  const greeting = getGreeting();
  return <span>{greeting}</span>;
}
