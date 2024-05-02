import {Link} from 'react-router-dom';

import './MainPage.css'

function MainPage() {
    return (
        <>
            <div className="parentContainer">
                <div className="homePage">
                    <h1>
                        <span style={{display: 'block'}}>КАЧЕСТВЕННЫЙ И</span>
                        <span style={{display: 'block'}}>ЧЕСТНЫЙ РЕМОНТ</span>
                        <span style={{display: 'block'}}>ВЕЛОСИПЕДОВ</span>
                        <span style={{display: 'block'}}>ПО ДОСТУПНОЙ ЦЕНЕ</span>
                        {/*<hr></hr>*/}
                        <br/>
                        <Link to="/price" className="button">ПРАЙС ЛИСТ</Link>
                    </h1>
                </div>
            </div>
        </>
    );
}

export default MainPage;
