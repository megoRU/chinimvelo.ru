import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import About from './pages/about/About.tsx';
import Contact from './pages/contact/Contact.tsx';
import Navigation from "./pages/navigation/Navigation";
import Price from "./pages/price/Price.tsx";
import Footer from "./pages/Footer/Footer.tsx";
import MainPage from "./pages/main/MainPage.tsx";

import './App.css'

function App() {
    return (
        <>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/main" element={<MainPage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/price" element={<Price/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
            <Footer/>
        </>
    );
}

export default App