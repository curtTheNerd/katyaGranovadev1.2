import Navbar from "./Navbar";
// import Footer from "./Footer";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
