import './HomePage.css'
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <div className="homePage">
                <h1>
                    <span style={{display: 'block'}}>КАЧЕСТВЕННЫЙ И</span>
                    <span style={{display: 'block'}}>ЧЕСТНЫЙ</span>
                    <span style={{display: 'block'}}>РЕМОНТ</span>
                    <span style={{display: 'block'}}>ВЕЛОСИПЕДОВ</span>
                    <span style={{display: 'block'}}>ПО ДОСТУПНОЙ</span>
                    <span style={{display: 'block'}}>ЦЕНЕ</span>
                    {/*<hr></hr>*/}

                    <Link to="/price" className="button">ПРАЙС ЛИСТ</Link>
                </h1>


            </div>
        </>
    );
}

export default HomePage;
