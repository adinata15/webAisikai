import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Download from "./pages/Download";
import Certificate from "./pages/Certificates";
import PhotoGallery from "./pages/PhotoGallery";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Products />} />
        {/* <Route path="/products/:category" element={<Products />} /> */}
        <Route path="/company-profile" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/download" element={<Download />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;