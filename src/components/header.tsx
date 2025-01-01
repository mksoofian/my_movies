"use client";
import { useAuth } from "@/app/auth-provider";
import { Box } from "@mui/material";
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
    <Box
      //   className="flex justify-center w-48 p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md"
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "12rem",
        p: "1rem",
        mx: "auto",
        borderRadius: ".75rem",
        backgroundColor: "#efeeee",
      }}
    >
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
                <LogOut className="hover:text-red-700" />
              </button>
            ) : (
              <button onClick={() => router.push("/login")}>
                <LogIn />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </Box>
  );
}

export default Header;
