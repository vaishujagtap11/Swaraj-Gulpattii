import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email, password) => {
    const registered = JSON.parse(localStorage.getItem("registeredUser"));

    if (registered && registered.email === email && registered.password === password) {
      setUser(registered);
      localStorage.setItem("user", JSON.stringify(registered));
      return true;
    }

    return false;
  };

  const signup = (data) => {
    localStorage.setItem("registeredUser", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
