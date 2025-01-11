import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { addToCart } from '../slices/cartSlice';
import GoogleMapEmbed from '../components/GoogleMapEmbed';
import { setProductId } from '../slices/checkoutSlice';


const ProductScreen = () => {
    const {id: productId } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const qty = useState(1);

    const {
        data: product,
        isLoading,
        error
    } = useGetProductDetailsQuery(productId);

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, qty }));
        navigate('/cart');
    }

    const checkoutHandler = () => {
        dispatch(setProductId(productId));
        navigate('/checkout');
    }

    return (
        <>
        <Link className="btn btn-light my-3" to="/">Go Back</Link>

        { isLoading ? (
            <Loader/>
        ) : error ? (
            <Message variant={'danger'}>{ error?.data?.message || error.error }</Message>
        ) : (
            <Row>
                <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>{product.price} BGN</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Area:</Col>
                                    <Col>
                                        <strong><Rating value={product.area} text={`${product.area}m²`} /></strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                <Col>Category:</Col>
                                <Col>
                                <strong>{product.category}</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                <Col>Type:</Col>
                                <Col>
                                <strong>{product.type}</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                <Col>City:</Col>
                                <Col>
                                <strong>{product.city}</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                        <Col>
                                        <Button
                                            className='btn-block'
                                            type='button'
                                            onClick={addToCartHandler}
                                            >
                                                Add to favourites
                                        </Button>
                                    </Col>
                                    
                                    <Col>
                                        <Button
                                            className='btn-block'
                                            type='button'
                                            onClick={checkoutHandler}
                                            >
                                                Ask for contacts
                                        </Button>
                                    </Col>
                                </Row>
                                
                            </ListGroup.Item>
                            
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <Row>
                <GoogleMapEmbed city= {product.city} />
            </Row>
        </Row>
        ) }
        </>
        );
};
export default ProductScreen;