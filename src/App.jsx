import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Products from "./pages/Products";
import CompanyProfile from "./pages/CompanyProfile";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Download from "./pages/Download";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/download" element={<Download />} /> 
        <Route path="/product-details" element={<ProductDetails />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;