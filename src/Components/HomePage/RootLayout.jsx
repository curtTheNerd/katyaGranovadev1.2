import Navbar from "./Navbar";
// import Footer from "./Footer";

import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="w-screen grid xl:grid-cols-5">
      <div className="w-full xl:w-1/5 xl:fixed xl:block xl:inset-y-0 xl:left-0">
        <Navbar />
      </div>

      <main className="w-[95%] xl:w-full xl:col-span-4 xl:col-start-2 m-auto xl:pr-12 xl:pt-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
