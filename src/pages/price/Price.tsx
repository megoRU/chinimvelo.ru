import {useState} from "react";
import drive from '../../assets/drive.png';
import wheels from '../../assets/wheels.png';
import steering from '../../assets/steering.png';
import fork from '../../assets/fork.png';
import table from '../../assets/table.png';
import braking from '../../assets/braking.png';

import './Price.css'

function Price() {
    const [image, setImage] = useState<string>(drive);

    const handleButtonClick = (newImage: string) => {
        setImage(newImage);
    };

    return (
        <>
            <div className="buttonContainer">
                <button className="button-price" onClick={() => handleButtonClick(drive)}>Привод</button>
                <button className="button-price" onClick={() => handleButtonClick(wheels)}>Колёса</button>
                <button className="button-price" onClick={() => handleButtonClick(braking)}>Тормозная система</button>
                <button className="button-price" onClick={() => handleButtonClick(steering)}>Рулевое управление</button>
                <button className="button-price" onClick={() => handleButtonClick(fork)}>Вилка</button>
            </div>

            <div className="price">
                <img src={table} alt="шапка таблицы"/>
                <img src={image} id="last" alt="таблица цен"/>
            </div>
        </>
    );
}

export default Price;