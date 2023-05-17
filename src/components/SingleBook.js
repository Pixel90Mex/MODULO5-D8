import Card from 'react-bootstrap/Card';
import { Badge, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../style/MySingleBook.css";

function SingleBook({title, price, asin, img, category, author, selected, setSelected }) {

    const toggleSelected = () => {
        setSelected(asin);
    }

  return (
    <Card className={`${selected ? 'border border border-danger shadow' : ''}`} id='Book' style={{ width: '20rem', minHeight: 'fit-content' }} onClick={toggleSelected}>
      <Card.Img className='object-fit-cover' variant="top" src={img} style={{ height: '26rem'}} />
      <Card.Body key={asin} className='position-relative'>
        <Card.Title className='text-truncate'>{title}</Card.Title>
        <Card.Subtitle className="mb-2">{author}</Card.Subtitle>
        <Card.Text className='mb-1'>
        {category.charAt(0).toUpperCase() + category.slice(1)}
        </Card.Text>
        <Badge bg="danger" className="mb-2">€{price}</Badge>
        <Link to={`/${asin}`}><Button >Dettagli</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;