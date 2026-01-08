import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/HomePage/RootLayout";
import Homepage from "./Components/HomePage/Home";

import Work from "./Components/Work/Work";
import Work2025 from "./Components/Work/Albums/Work2025";
import Work2024 from "./Components/Work/Albums/Work2024";
import Work2023 from "./Components/Work/Albums/Work2023";
import Work2022 from "./Components/Work/Albums/Work2022";
import Work2021 from "./Components/Work/Albums/Work2021";
import Work2020 from "./Components/Work/Albums/Work2020";
import Work2019 from "./Components/Work/Albums/Work2019";
import WorksOnPaper from "./Components/Work/Albums/WorksOnPaper";

import Exhibition from "./Components/Work/Exhibition";
import Exhibition2025_IntrudedPicnics from "./Components/Work/Exhibitions/Exhibition2025_IntrudedPicnics";
import Exhibition2025_Spinnerei from "./Components/Work/Exhibitions/Exhibition2025_Spinnerei";
import Exhibition2024 from "./Components/Work/Exhibitions/Exhibition2024";
import Exhibition2023_Shtager from "./Components/Work/Exhibitions/Exhibition2023_Shtager";
import Exhibition2022_BarbicanArt from "./Components/Work/Exhibitions/Exhibition2022_BarbicanArt";
import Exhibition2021 from "./Components/Work/Exhibitions/Exhibition2021";

import BIO from "./Components/About/BIO";
import Statement from "./Components/About/Statement";
import Media from "./Components/Press/Media";
import Videos from "./Components/Press/Videos";

import Contact from "./Components/Contact/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />

        <Route path="work">
          <Route index element={<Work />} />
          <Route path="2025" element={<Work2025 />} />
          <Route path="2024" element={<Work2024 />} />
          <Route path="2023" element={<Work2023 />} />
          <Route path="2022" element={<Work2022 />} />
          <Route path="2021" element={<Work2021 />} />
          <Route path="2020" element={<Work2020 />} />
          <Route path="2019" element={<Work2019 />} />
          <Route path="works-on-paper" element={<WorksOnPaper />} />
        </Route>

        <Route path="exhibition">
          <Route index element={<Exhibition />} />
          <Route
            path="2025-IntrudedPicnics"
            element={<Exhibition2025_IntrudedPicnics />}
          />
          <Route path="2025-Spinnerei" element={<Exhibition2025_Spinnerei />} />
          <Route path="2024" element={<Exhibition2024 />} />
          <Route path="2023-Shtager" element={<Exhibition2023_Shtager />} />
          <Route
            path="2022-BarbicanArtGroupTrust"
            element={<Exhibition2022_BarbicanArt />}
          />
          <Route path="2021" element={<Exhibition2021 />} />
        </Route>

        <Route path="biography" element={<BIO />} />
        <Route path="artist-statement" element={<Statement />} />
        <Route path="press-coverage" element={<Media />} />
        <Route path="videos" element={<Videos />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
