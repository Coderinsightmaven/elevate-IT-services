import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const google = "https://www.google.com";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Button><Link href={google}>Click me</Link></Button>
    </main>
  );
}
