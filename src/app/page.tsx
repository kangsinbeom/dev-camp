import { ModeToggle } from "./shared/ModeToggle";
import SignupPage from "./signup";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SignupPage />
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>
    </main>
  );
}
