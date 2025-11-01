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
import Exhibition2025 from "./Components/Work/Exhibitions/Exhibition2025";
import Exhibition2024 from "./Components/Work/Exhibitions/Exhibition2024";
import Exhibition2022 from "./Components/Work/Exhibitions/Exhibition2022";
import Exhibition2021 from "./Components/Work/Exhibitions/Exhibition2021";

import BIO from "./Components/About/BIO";
import Statement from "./Components/About/Statement";
import Media from "./Components/Press/Media";
import ArtistTalks from "./Components/Press/ArtistTalks";
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
          <Route path="worksonpaper" element={<WorksOnPaper />} />
        </Route>

        <Route path="exhibitions">
          <Route index element={<Exhibition />} />
          <Route path="exhibition2025" element={<Exhibition2025 />} />
          <Route path="exhibition2024" element={<Exhibition2024 />} />
          <Route path="exhibition2022" element={<Exhibition2022 />} />
          <Route path="exhibition2021" element={<Exhibition2021 />} />
        </Route>

        <Route path="bio" element={<BIO />} />
        <Route path="statement" element={<Statement />} />
        <Route path="media" element={<Media />} />
        <Route path="artisttalks" element={<ArtistTalks />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
