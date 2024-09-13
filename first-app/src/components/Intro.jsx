import './Intro.css';
import logotipas from '../assets/logo-with-shadow.png';
import Button from './Button';

const Intro = () =>{
    return(
        <>
        <div className="intro-area">
            <div className='text-area'>
                <h2>Vite</h2>
                <br />
                <h2>Next Generation</h2>
                <br />
                <h2>Frontend Tooling</h2>
                <br />
                <p>Get readyt for a development environment that</p>
                <p>can finally catch up with you.</p>
                <div className="buttons">
                    <Button text="Get Started"/>
                    <Button text="Why Vite?"/>
                    <Button text="View on GitHub"/>
                    <Button text="ViteConf 23!"/>
                </div>
            </div>
            <div>
                <img className='big-logo' src={logotipas} alt="" />
            </div>
        </div>
        </>
    )
}

export default Intro;