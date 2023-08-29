import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavbarContainer } from "./components/layout/navbar/NavbarContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return ( 

    <BrowserRouter className="App">

      <Routes>

        <Route path="/" element={<NavbarContainer />} />

      </Routes>
      
    </BrowserRouter>
  )
}

export default App;