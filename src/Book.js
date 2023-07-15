import './Book.css';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Book(props)
{
    return (
        <Card className='book'>
            <img src={props.cover} alt={props.description} className='cover-img'/>
            <h2 className='book-listing'>{props.title} <br /> by: {props.author} [{props.rating} / 5⭐]</h2>
            <h2 className='book-price'>${props.price}</h2>

            <Link to={`/View/${props.isbn}`} state={{book: props}}>
                <button className='view-details-btn user'>View Details</button>
            </Link>
        </Card>
    );
}
