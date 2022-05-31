import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./general_components/footer";
import { Navbar } from "./general_components/Navbar";
import ScrollToTop from "./general_components/scrollToTop";
import { Atendancy } from "./pages/Atendancy";
import { Courses } from "./pages/Courses";
import { Home } from "./pages/Home";
import { AllClasses } from "./pages/AllClasses/AllClasses";
import { OneClass } from "./pages/OnClass/OneClass";


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
            <Route path="/courses" element={<Courses />} />
            <Route
			path="*"
              element={
                <>
                  <h1 className="text-center mt-5">Not found!</h1>
                </>
              }
            />
            <Route path="/allclasses" element={<AllClasses/>}/>
            <Route path="/class/:id" element={<OneClass />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
