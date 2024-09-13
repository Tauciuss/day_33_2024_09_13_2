import './Card.css';

const Card = (props) =>{
  const card_title = props.title
  const text = props.text;
    return(
    <>
        <div className="card-area">
            <h4 className='card_title'>{card_title}</h4>
            <p className='card_text'>{text}</p>
        </div>
    </>
  )
}

export default Card