import Navbar from "./Navbar";
// import Footer from "./Footer";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-screen flex flex-col xl:flex-row">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
