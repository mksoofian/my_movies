"use client";
import { useAuth } from "@/app/auth-provider";
import { LogIn, Clapperboard, Heart, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const { user, logoutUser } = useAuth();
  const router = useRouter();

  const handleLogOut = () => {
    logoutUser();
    if (user === false) {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center w-48 p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md">
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href={`/`}>
              <Clapperboard />
            </Link>
          </li>
          <li>
            <Link href={`/watchlist`}>
              <Heart />
            </Link>
          </li>
          <li>
            {user ? (
              <button onClick={handleLogOut}>
                <LogOut />
              </button>
            ) : (
              <button onClick={() => router.push("/login")}>
                <LogIn />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
