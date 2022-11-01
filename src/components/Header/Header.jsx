import logo from '../../assets/logo1.png'
import './Header.css';
import Navbar from '../Navbar/Navbar'
import Temporarydrawer from '../Navbar/Navbardrawer'
function Header() {

    return (
        <div className="header-container">
            <header className="header">
                <div className="header__logo-container">
                    
                    <a href="/">
                        <img src={logo} className="header__logo" alt="logo2" />
                    </a>
                    <div className='header__burger'>
                        <Temporarydrawer/>
                    </div>
                    <div>

                    </div>
                </div>
                
                <Navbar />
            </header>
        </div>
    );
}

export default Header;