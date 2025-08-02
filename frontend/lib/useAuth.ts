import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
type DecodedToken = {
  email: string;
  name?: string;
  exp: number;
};

export function useAuth() {
  const [user, setUser] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);

        // Check if token expired
        if (decoded.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          setUser(null);
        } else {
          setUser(decoded);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setUser(null);
      }
    }
  }, []);

  return { user, isLoggedIn: !!user };
}
