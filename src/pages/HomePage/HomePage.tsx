import About from '../About/About';
import Contact from '../contact/Contact';
import Price from "../price/Price";
import MainPage from "../main/MainPage";

function HomePage() {
    return (
        <>
            <MainPage/>
            <About/>
            <Price/>
            <Contact/>
        </>
    );
}

export default HomePage;
