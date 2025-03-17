import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import CompanyProfile from "./pages/CompanyProfile";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Index />} />
        <Route path="/company-profile" element={<CompanyProfile />} />  
      </Routes>
    </BrowserRouter>
  )
}

export default App;