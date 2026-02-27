import Navbar from "./Navbar";
import Footer from "./Footer";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-screen min-w-[300px] min-h-screen">
      <div className="w-full">
        <Navbar />
      </div>

      <main className="w-[95%] xl:w-[90%] mx-auto max-w-[1440px] overflow-auto">
        <Outlet />
      </main>

      <div className="w-[90%] mx-auto max-w-[1440px] overflow-auto">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
