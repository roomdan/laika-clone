import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppBtn from "./components/fixed-btn/whatsapp";
import Home from "./views/home/index";
import Header from "./components/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ position: "sticky", top: "0px", zIndex: "1000" }}>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
      <WhatsAppBtn />
    </>
  );
}

export default App;
