import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import Cart from './components/Cart';
import Home from './pages/Home';
import OfferProductList from './components/OfferProductList';

function App() {
  return (
    <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />} >
            </Route>
            <Route path="/signup" element={<SignUp />} >
            </Route>
            <Route path="/cart" element={<Cart />} >
            </Route>
            <Route path="/offers/best-electronic" element={<OfferProductList title="electronics" />}>
            </Route>
            <Route path="/offers/best-mobiles" element={<OfferProductList title="mobiles" />}>
            </Route>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
    </>
  );
}

export default App;
