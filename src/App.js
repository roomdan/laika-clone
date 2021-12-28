import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppBtn from "./components/fixed-btn/whatsapp";
import Home from "./views/home/index";
import Header from "./components/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppBtn />
    </>
  );
}

export default App;
