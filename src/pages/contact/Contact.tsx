import './Contact.css';

function Contact() {
    return (
        <>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Контактная информация</h3>
                    <p><strong>График работы:</strong></p>
                    <p>Пн-Сб 11:00-19:00</p>
                    <p>Вс 11:00-18:00</p>
                    <hr/>
                    <p><strong>Адрес:</strong></p>
                    <p>г. Москва<br/> ул. Гришина 23к1<br/>ул. Сергея Макеева 4</p>
                    <hr/>
                    <p><strong>Телефон (ул. Гришина):</strong>&nbsp;
                        <a href="tel:+79253555597">+7 (925) 355-55-97</a><br/>
                        <strong>Телефон (ул. Сергея Макеева):</strong>&nbsp;
                        <a href="tel:+79771314915">+7 (977) 131-49-15</a></p>
                    <p><strong>Instagram*:</strong> <a href="https://www.instagram.com/chinim_velo"
                                                       target="_blank">chinim_velo</a></p>
                    <p id="inst">* Соцсеть Instagram принадлежит компании Meta,<br/>
                        деятельность которой признана экстремистской и <br/>
                        запрещена на территории России.</p>
                </div>

                <div className="map">
                    <div className='Karta'>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/-/CCUBBSUutD"
                            width={window.innerWidth > 600 ? 600 : 395}
                            height={window.innerWidth > 600 ? 600 : 300}
                            style={{position: "relative"}}>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;