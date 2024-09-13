import logotipas from '../assets/react.svg';
import './Header.css'

const Header = () =>{
    return(
        <header>
            <img src={logotipas} className='logo'/>
        </header>
    )
}

export default Header;