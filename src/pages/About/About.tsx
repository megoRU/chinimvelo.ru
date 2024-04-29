import './About.css'
import screen from '../../assets/1.jpg';

function About() {
    return (
        <>
            <div className="about">
                <p>
                    Наша компания «Chinimvelo» работает для Вас с 2015 года. За это время мы создали по-настоящему
                    ценный сервис для клиентов. У нас индивидуальный подход к каждому велосипеду, ответственность и
                    гарантия. В нашей компании работают только высококвалифицированные специалисты с огромным опытом и
                    профессионализмом в данной сфере. Используется только профессиональное оборудование и «правильный
                    инструмент» проверенный временем. Наши мастера помогут Вам быстро и точно определить проблему и в
                    короткие сроки устранить ее. Именно «Chinimvelo» пользуется большим успехом и популярностью среди
                    велосипедистов.
                    В ближайшее время планируется расширении нашей компании. Всегда рады видеть Вас в «Chinimvelo»!
                </p>
                <img src={screen} alt="Логотип компании" className="company-logo"/>
            </div>
        </>
    )
}

export default About