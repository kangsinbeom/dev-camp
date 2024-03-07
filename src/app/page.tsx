import { ModeToggle } from "./components/shared/ModeToggle";
import SignupPage from "./components/signup";

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
