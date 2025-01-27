"use client";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const userName = "Mike";

// define context type
type AuthContextType = {
  user: boolean;
  loginUser: (arg0: string) => void;
  logoutUser: () => void;
  userName: string;
};

// create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// create provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user && pathname === "/login") router.push("/");
  }, [pathname, router, user]);

  const loginUser = async (pin: string) => {
    try {
      const response = await fetch("/api/verify_pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message);
        toast.success(data.message);
        setUser(true);
        router.push(`/`);
      } else {
        toast.error(`${data.message}. Try again.`);
        console.log(data.message || "An error occurred");
      }
    } catch (error) {
      console.log(`An error occured: ${error}`);
    }
  };

  const logoutUser = () => {
    setUser(false);
    toast.success(`Logged out ${userName}`);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, userName }}>
      {children}
    </AuthContext.Provider>
  );
}

// create/export useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
