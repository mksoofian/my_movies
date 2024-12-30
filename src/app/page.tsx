"use client";
import { useAuth } from "./auth-provider";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <main>
        <p>{user ? "Mike's" : "home"} page</p>
      </main>
    </div>
  );
}
