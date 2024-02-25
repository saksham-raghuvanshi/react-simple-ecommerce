import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {
  const { drawer } = useSelector((state) => state.drawer);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
        {drawer && <Cart />}

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
