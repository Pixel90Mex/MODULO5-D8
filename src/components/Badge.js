import { Badge } from 'react-bootstrap';

const NewBadge = ({str, color}) => {
  return (
    <Badge bg={color}>{str}</Badge>
  )
}

export default NewBadge;