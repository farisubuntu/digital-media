import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Header() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/chinook">Chinook Digital Media Page</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}
