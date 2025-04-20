import React, {useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <Contacts />
          <Footer />
        </>
      )}
      ;
    </>
  );
}

export default App;
