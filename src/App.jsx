import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Layout,
  Home,
  Landscape,
  Pool,
  Spa,
  Blog,
  Contact,
  Water,
} from "./pages";
import { BlogArticale } from "./components";

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
          <Route path="pool" element={<Pool />}></Route>
          <Route path="spa" element={<Spa />} initialIndex={0}></Route>
          <Route path="water" element={<Water />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="articale/:id" element={<BlogArticale />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
