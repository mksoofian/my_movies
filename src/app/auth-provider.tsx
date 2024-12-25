// import { createContext, useContext, useState } from "react";

// // define context type
// type AuthContextType = {
//   isUser: boolean;
//   setIsUser: React.Dispatch<React.SetStateAction<boolean>>;
// };

// // create context
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // create provider
// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [isUser, setIsUser] = useState(false);
//   const password = process.env.TEST_PASS;

//   const setUser = (pass: string) => {
//     password === pass ? setIsUser(true) : setIsUser(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isUser, setIsUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// // create/export useAuth
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
