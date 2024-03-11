import Link from "next/link";
import { ModeToggle } from "./components/shared/ModeToggle";
import SignupPage from "./components/signup";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Link href="/signup">
        <Button>signup</Button>
      </Link>
      <Link href="/login">
        <Button>login</Button>
      </Link>
      <Link href="/account">
        <Button>account</Button>
      </Link>
    </main>
  );
}
