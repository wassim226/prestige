import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, Home, Landscape, Pool, Spa, Contact, Water } from "./pages";

function App() {
  const [authUser, setAuthUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout authUser={authUser} setAuthUser={setAuthUser} />}
        >
          <Route index element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="landscape/:name" element={<Landscape />}></Route>
          <Route path="piscine" element={<Pool />}></Route>
          <Route path="spa" element={<Spa />} initialIndex={0}></Route>
          <Route path="l'eau" element={<Water />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
