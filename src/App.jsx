import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
