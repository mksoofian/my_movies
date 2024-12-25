"use client";
import { LogIn, Clapperboard, Heart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  //   const handleClickAuth = () => {
  //     if (isUser === false) {
  //     }
  //   };
  const router = useRouter();

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
            {/* if loggedin, display logout icon, else display login icon */}
            {/* LogOut */}
            <button onClick={() => router.push("/login")}>
              <LogIn />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
