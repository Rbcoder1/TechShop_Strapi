import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import NavBar from './components/NavBar';
import SignUp from './pages/SignUp';
import Login from './pages/Login'
import SingleProduct from './components/SingleProduct';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/single_product" element={<SingleProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
