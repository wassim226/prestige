import { useEffect, useRef, useState } from "react";
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
  ControlePanel,
  Dashboard,
  ControleArticale,
  ControleSpa,
  ControleMessage,
  Users,
  ArticaleDetail,
  SpaDetail,
  MessageDetail,
  UserDetail,
  ControlePages,
  PageDetail,
} from "./pages";
import { BlogArticale } from "./components";
import { UserController } from "./controllers";

function App() {
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);

  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);

  useEffect(() => {
    const checkConnectionAuthentification = async () => {
      setLoading(() => true);
      let rest = await new UserController(
        abortController,
        setServerError
      ).checkAuthenticated();
      if (rest) {
        setAuthUser(() => rest);
      }
      setLoading(() => false);
    };
    checkConnectionAuthentification();
  }, []);

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
        <Route
          path="/controle"
          element={
            <ControlePanel authUser={authUser} setAuthUser={setAuthUser} />
          }
        >
          <Route index element={<Dashboard />}></Route>
          <Route path="articales">
            <Route index element={<ControleArticale />}></Route>
            <Route path="detail/:id" element={<ArticaleDetail />}></Route>
          </Route>
          <Route path="pages">
            <Route index element={<ControlePages />}></Route>
            <Route path="detail/:id" element={<PageDetail />}></Route>
          </Route>
          <Route path="spas">
            <Route index element={<ControleSpa />}></Route>
            <Route path="detail/:id" element={<SpaDetail />}></Route>
          </Route>
          <Route path="message">
            <Route index element={<ControleMessage />}></Route>
            <Route path="detail/:id" element={<MessageDetail />}></Route>
          </Route>
          <Route path="user">
            <Route index element={<Users />}></Route>
            <Route path="detail/:id" element={<UserDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
