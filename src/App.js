import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SpinnerContextProvider from "./components/SpinnerContext";
import ScrollToTop from "./components/ScrollToTop";
import { lazy, Suspense } from "react";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";

// Corrected import paths for Login and Signup components
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const Home = lazy(() => import("./pages/Home/Home"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ProductDetails = lazy(() => import("./pages/ProductDetails/ProductDetails"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Cart = lazy(() => import("./pages/Cart/Cart"));

AOS.init({
  once: true,
  duration: 500,
  offset: -50,
});

function App() {
  return (
    <SpinnerContextProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <Router>
          <ScrollToTop />
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: "#edce8b",
              },
            }}
          />
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />

            {/* Products listing */}
            <Route path="/shop/*" element={<Navigate to="/shop/necklace" />} />
            <Route
              path="/shop/:category"
              element={
                <>
                  <Shop />
                </>
              }
            />

            {/* About us */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* Product details */}
            <Route
              path="/product-details/:productId"
              element={<ProductDetails />}
            />

            {/* Checkout */}
            <Route path="/checkout" element={<Checkout />} />

            {/* Auth */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />

            {/* Cart */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Suspense>
    </SpinnerContextProvider>
  );
}

export default App;
