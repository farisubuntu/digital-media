import Header from "@/ui/Header";
import Link from "next/link";

export default function Home() {
  return (
    <h1 className="text-3xl font-bold py-4 italic">
      Go to {" "}
      <Link className="text-blue-500" href="/chinook">Chinook Digital Media Page</Link>
    </h1>
  );
}
