import Home from "./Pages/Home";
import React from "react";
import Navbar from "./Pages/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
