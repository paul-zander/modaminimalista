import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import Modal from "./components/Modal.jsx";
import ModalProvider from "./contexts/ModalContext.jsx";

function App() {
  return (
    <ModalProvider>
      <SidebarProvider>
        <CartProvider>
          <ProductProvider>
            <Router>
              <Modal />
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
    </ModalProvider>
  );
}

export default App;
