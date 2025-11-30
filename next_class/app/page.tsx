import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col">
        Todo Application
        <Link href="/signin">Sign-in to the Application</Link>
        <Link href="/signin">Sign-up to the Application</Link>
      </div>
    </div>
  );
}
