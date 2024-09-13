import './Button.css';
const Button = (props) =>{
    const text = props.text
    return(
        <button className='intro-button'>{text}</button>
    )
}

export default Button;