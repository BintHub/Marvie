import React, {Suspense, lazy} from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
const Home = lazy(() => import("./components/home/Home"));
const Menu = lazy(() => import("./components/menu/Menu"));
const Works = lazy(() => import("./components/works/Works"));
const Question = lazy(() => import("./components/question/Question"));
const AboutUs = lazy(() => import("./components/aboutUs/AboutUs"));
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Nav />
      <Suspense
        fallback={
          <div className="font-poppins text-center text-4xl font-semibold text-red-600">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <AboutUs/>} />
          <Route path="/menu" element={ <Menu/>} />
          <Route path="how" element={ <Works/>} />
          <Route path="/faqs" element={<Question/>} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
