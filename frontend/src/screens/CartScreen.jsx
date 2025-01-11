import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'; // ListGropItem?
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';
import { addToCart, removeFromCart } from '../slices/cartSlice';

const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const removeFromCartHandler = async (id) => {
        dispatch(removeFromCart(id));
    };

    return (
    <Row>
            <h1 style={{marginBottom: '20px'}}>Favourites</h1>
            {cartItems.length === 0 ? (
                <Message>
                    Your list is empty. <Link to='/'>Go Back</Link>
                </Message>
            ) : (
                <ListGroup variant='flush'>
                    { cartItems.map((item) => (
                        <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={2}>
                                <Image src={ item.image } alt={item.name} fluid rounded/>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>
                                    {item.price} BGN
                                </Col>
                                <Col md={2}>
                                    {item.area} m²
                                </Col>
                                <Col md={2}>
                                 <Button type='button' variant='light' onClick={
                                    () => removeFromCartHandler(item._id)
                                 }><FaTrash/></Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) }
    </Row>
    );
};

export default CartScreen;