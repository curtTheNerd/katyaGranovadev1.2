import Navbar from "./Navbar";
// import Footer from "./Footer";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-1">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
