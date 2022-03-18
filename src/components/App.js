import React from "react";
import Navbar from "./Navbar";
import Events from "./../components/Events";
import SolarBg from "./SolarBg";
// import Comets from "./Comets";

// import Sponsors from './Sponsors';
const App = () => {
  return (
    <SolarBg>
      {/* <Comets /> */}
      <Navbar />
      <Events />
    </SolarBg>
  );
};

export default App;
