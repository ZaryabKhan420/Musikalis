import React, { useEffect } from "react";
import "./App.css";
import { Header, Footer } from "./components/Index";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 100,
      duration: 500,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div className="bg-primaryColorDark">
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
