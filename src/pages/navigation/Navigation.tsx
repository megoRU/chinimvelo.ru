import { Link } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
    return (
        <div className="centeredLinks">
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <Link to="/price">Прайс лист услуг</Link>
            <Link to="/contact">Контакты</Link>
        </div>
    );
};

export default Navigation;