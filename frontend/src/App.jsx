import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/public/Home";
import Shop from "./components/public/Shop";
import About from "./components/public/About";
import Contact from "./components/public/Contact";
import Login from "./components/public/Login";
import Signup from "./components/public/Signup";
import PlaceOrder from "./components/private/user/PlaceOrder";
import UserLayout from "./components/private/user/UserLayout";
import UserDashboard from "./components/private/user/UserDashboard";
import Shopping from "./components/private/user/Shopping";
import MyOrders from "./components/private/user/MyOrders";
import AppLayout from "./components/public/AppLayout";
import ShoppingLayout from "./components/private/user/ShoppingLayout";
import AdminLogin from "./components/public/AdminLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<AdminLogin/>} />
        </Route>

        {/* User routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserDashboard />} /> 
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="shopping" element={<ShoppingLayout />}>
            <Route index element={<Shopping />} /> {/* This is the main shopping page */}
            <Route path="placeorder" element={<PlaceOrder />} /> {/* This is the place order page */}
          </Route>
          <Route path="myorders" element={<MyOrders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
