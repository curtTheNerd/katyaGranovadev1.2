import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/HomePage/RootLayout";
import Homepage from "./Components/HomePage/Home";

import Work from "./Components/Work/WorksByYear/Work";
import WorkComponent from "./Components/Work/WorksByYear/WorkComponent";
import Exhibition from "./Components/Work/Exhibitions/Exhibition";
import ExhibitionComponent from "./Components/Work/Exhibitions/ExhibitionComponent";
import { exhibitionsConfig, worksByYearConfig } from "./Components/Work/Data";

import News from "./Components/Press/News/News";
import AllOurYesterdays from "./Components/Press/News/AllOurYesterdays";
import SpinnereiSerie from "./Components/Press/News/SpinnereiSeriePaulaPiranha";

import BIO from "./Components/About/BIO";
import Statement from "./Components/About/Statement";
import Media from "./Components/Press/Media";
import Videos from "./Components/Press/Videos";
import Contact from "./Components/Contact/Contact";
import NotFound from "./Components/NotFound";

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
        <Route path="2026-Spinnerei-Serie" element={<SpinnereiSerie />} />
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
