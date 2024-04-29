import { Link } from 'react-router-dom';
import logoImage  from '../../assets/logo2.png'; // Предположим, что у вас есть компонент Logo
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="navigationContainer">
            <div className="logoContainer">
                <Link to="/">
                    <div className="logoContainer">
                        <img src={logoImage} alt="Logo"/>
                    </div>
                </Link>
            </div>
            <div className="centeredLinks">
                <Link to="/">Главная</Link>
                <Link to="/about">О нас</Link>
                <Link to="/price">Прайс лист</Link>
                <Link to="/contact">Контакты</Link>
            </div>
        </div>
    );
};

export default Navigation;
