import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";

function App() {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
            <Sidebar />
            <Footer />
          </Router>
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  );
}

export default App;
