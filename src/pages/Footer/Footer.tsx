import './Footer.css'

function Footer() {
    const currentDate = new Date().getFullYear();

    return (
        <div className="footer">
            {currentDate}
        </div>
    );
}

export default Footer;