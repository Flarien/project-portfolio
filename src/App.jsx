import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { BannerContainer } from "./components/banner/BannerContainer";
import { SkillsContainer } from "./components/skills/SkillsContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarContainer />
              <BannerContainer />
              <SkillsContainer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
