import './Card.css';
// import image from './card-image.png'

function Card(props) {

    return (
        <div className="card">
            <img src={props.imgSrc} />
            <p className="title">
                {props.title}
            </p>
            <p className="content">
                {props.content}
            </p>
        </div>
    );
}

export default Card;