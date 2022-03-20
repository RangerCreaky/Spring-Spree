import { useContext } from "react";
import AuthContext from "../context/auth";
import storage from "../storage";

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const login = async ({ token, user }) => {
    storage.set("token", token);
    storage.set("user", user);
    setUser(user);
  };

  const logout = async () => {
    if (!window.confirm("Are you sure you want to logout?")) return;
    storage.clear();
    setUser(null);
  };

  const restore = async () => {
    const user = await storage.get("user");
    setUser(user);
  };

  return { user, login, logout, restore };
}
