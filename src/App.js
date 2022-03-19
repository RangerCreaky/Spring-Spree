import Navbar from "./components/Navbar";
import AOS from "aos";
import AuthContext from "./context/auth";
import { useState } from "react";
import AppRoutes from "./Routes";

import "aos/dist/aos.css";

AOS.init();
const App = () => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Navbar />
      <AppRoutes />
    </AuthContext.Provider>
  );
};

export default App;
