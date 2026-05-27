import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/pages/HomePage/RootLayout";
import Homepage from "./Components/pages/HomePage/Home";

import Work from "./Components/pages/Work/WorksByYear/Work";
import WorkComponent from "./Components/pages/Work/WorksByYear/WorkComponent";
import Exhibition from "./Components/pages/Work/Exhibitions/Exhibition";
import ExhibitionComponent from "./Components/pages/Work/Exhibitions/ExhibitionComponent";
import {
  exhibitionsConfig,
  worksByYearConfig,
} from "./Components/pages/Work/Data";

import News from "./Components/pages/Press/News/News";
import AllOurYesterdays from "./Components/pages/Press/News/AllOurYesterdays";
// import SpinnereiSerie from "./Components/Press/News/SpinnereiSeriePaulaPiranha";

import BIO from "./Components/pages/About/BIO";
import Statement from "./Components/pages/About/Statement";
import Media from "./Components/pages/Press/Media";
import Videos from "./Components/pages/Press/Videos";
import Contact from "./Components/pages/Contact/Contact";
import NotFound from "./Components/pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />

      <Route path="work">
        <Route index element={<Work />} />

        {worksByYearConfig.map(({ path, data }) => (
          <Route
            key={path}
            path={path}
            element={<WorkComponent images={data} />}
          />
        ))}
      </Route>

      <Route path="exhibition">
        <Route index element={<Exhibition />} />
        {exhibitionsConfig.map(({ path, data }) => (
          <Route
            key={path}
            path={path}
            element={<ExhibitionComponent images={data} />}
          />
        ))}
      </Route>

      <Route path="news">
        <Route index element={<News />} />
        <Route path="2026-All-Our-Yesterdays" element={<AllOurYesterdays />} />
      </Route>

      <Route path="biography" element={<BIO />} />
      <Route path="artist-statement" element={<Statement />} />

      <Route path="press-coverage" element={<Media />} />
      <Route path="videos" element={<Videos />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
