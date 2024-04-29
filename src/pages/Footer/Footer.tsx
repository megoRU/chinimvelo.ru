import './Footer.css'

function Footer() {
    const currentDate = new Date().getFullYear();

    return (
        <div className="footer">
            {currentDate} | Информация на сайте не является публичной офертой
        </div>
    );
}

export default Footer;