import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex bg-blue-900 justify-between items-center px-6 py-3">
      <h3>My App</h3>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/product">Product</Link>
      </div>
    </div>
  );
}