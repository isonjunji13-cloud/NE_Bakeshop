import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Scroll } from "./components/Scroll/ScrollToTop.jsx";

import { Home } from "./pages/Home/Home.jsx";
import { Menu } from "./pages/Menu/Menu.jsx";
import { Promos } from "./pages/promos/Promos.jsx";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails.jsx";
import { Locations } from "./pages/Locations/Locations.jsx";
import { Cart } from "./pages/Cart/Cart.jsx";
import { LogIn } from "./pages/Login/Login.jsx";


function AppContent() {
  const location = useLocation();

  // Hide Navbar and Footer on Employee Login
  const isLoginPage = location.pathname === "/employee-login";

  return (
    <>
      <Scroll />

      {/* Navbar */}
      {!isLoginPage && <Navbar />}

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Menu */}
        <Route
          path="/menu"
          element={<Menu />}
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        {/* Promos */}
        <Route
          path="/promos"
          element={<Promos />}
        />

        {/* Locations */}
        <Route
          path="/locations"
          element={<Locations />}
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* Employee Login */}
        <Route
          path="/employee-login"
          element={<LogIn />}
        />

      </Routes>

      {/* Footer */}
      {!isLoginPage && <Footer />}
    </>
  );
}


export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
