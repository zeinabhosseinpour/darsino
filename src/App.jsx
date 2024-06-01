import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/users/auth/Login";
import Home from "./pages/Home";
import SignIn from "./pages/users/auth/Signin/Signin";
import Shop from "./pages/Shop/index";
import Card from "./pages/Card";
import ProductDetails from "./pages/ProductDetails/index";
import ProfileSubmit from "./pages/users/auth/Signin/ProfileSubmit";
import Quiz from "./pages/Quiz/index";
import Tests from "./pages/Tests/index";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/About Us";
import ContactUs from "./pages/Contact Us";

import Authent from "./pages/users/auth/Signin/Authent";
import TestResults from "./pages/testResults";
import TestDetails from "./pages/TestDetails";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/testdetails" element={<TestDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/testresults" element={<TestResults />} />
        <Route path="/shoppingcard" element={<Card />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/users/auth/login" element={<Login />} />
        <Route path="/users/auth/signin" element={<SignIn />} />
        <Route path="/users/auth/profilesubmit" element={<ProfileSubmit />} />
        <Route path="/users/auth" element={<Authent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
