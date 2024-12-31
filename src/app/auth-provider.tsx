"use client";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// define context type
type AuthContextType = {
  user: boolean;
  loginUser: (arg0: string) => void;
  logoutUser: () => void;
};

// create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// create provider
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(false);
  //   const [pin, setPin] = useState<string | undefined>(undefined);
  //   const password = process.env.PIN; // This doesnt work without being assigned NEXT_PUBLIC. Either way it is not secure. Should happen n

  useEffect(() => {
    // localStorage.getItem("my_movie_pin");
  }, []);

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
      } else {
        console.log(data.message || "An error occurred");
      }
    } catch (error) {
      console.log(`An error occured: ${error}`);
    }
    // try {
    //   const response = await fetch("/api/verify_pin", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ pin }),
    //   });

    //   const data = response.json();
    //   console.log(data);
    //   //   setUser(true);
    // } catch (error) {
    //   console.log(error);
    //   toast.error("could not validate pin");
    // }
  };

  const logoutUser = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
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
