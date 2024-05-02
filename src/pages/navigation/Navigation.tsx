import {useState} from 'react';
import {Link} from 'react-router-dom';
import logoImage from '../../assets/logo2.png';

import './Navigation.css';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>

            <div className="navigationContainer">
                <div className="logoContainer">
                    <a href="/">
                        <img src={logoImage} alt="Logo"/>
                    </a>
                </div>
                <div className="centeredLinks">
                    <div className={`mobileMenuIcon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div className={`linksContainer ${isMobileMenuOpen ? 'open' : ''}`}>
                        <Link to="/main" onClick={toggleMobileMenu}>Главная</Link>
                        <Link to="/about" onClick={toggleMobileMenu}>О нас</Link>
                        <Link to="/price" onClick={toggleMobileMenu}>Прайс лист</Link>
                        <Link to="/contact" onClick={toggleMobileMenu}>Контакты</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
