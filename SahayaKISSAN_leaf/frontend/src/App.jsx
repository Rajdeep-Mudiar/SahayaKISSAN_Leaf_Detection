import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

import PageNotFound from "./pages/PageNotFound";
import Page2 from "./pages/page2";
import Page3 from "./pages/Page3";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />

        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
    
  );
}

export default App;