import logotipas from '../assets/logo-with-shadow.png';
import './Logo.css';

const Logo = () =>{
    return(
        <>
            <div className="logo-area">
                <img src={logotipas} className='smallLogo' />
                <h2 className='logo-name'>Vite</h2>
            </div>
        </>
    )
}

export default Logo;