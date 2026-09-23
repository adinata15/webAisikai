import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Catalogue from "./pages/Catalogue";
import Certificate from "./pages/Certificates";
import Gallery from "./pages/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Products />} />
        <Route path="/company-profile" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/download" element={<Navigate to="/catalogue" replace />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificates" element={<Navigate to="/certificate" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/photo-gallery" element={<Navigate to="/gallery" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
