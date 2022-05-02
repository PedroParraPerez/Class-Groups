import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./component/footer";
import { Navbar } from "./component/Navbar";
import ScrollToTop from "./component/scrollToTop";
import { Atendancy } from "./pages/Atendancy";
import { Home } from "./pages/Home";

import { RandomGroups } from "./pages/RandomGroups";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/randomgroups" element={<RandomGroups />} />
            <Route path="/attendancy" element={<Atendancy />} />
            <Route
			path="*"
              element={
                <>
                  <h1 className="text-center mt-5">Not found!</h1>
                </>
              }
            />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
