import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { sendEmail } from '../utils/mailUtils';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';

const ProductScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const productId = useSelector((state) => state.checkout.productId);

    const {
        data: product,
        isLoading
    } = useGetProductDetailsQuery(productId);

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const message = "Contact for " + product.name + " is " + product.phone;
        

        try {
            sendEmail(name, message, email);
            navigate('/cart');
        } catch (err) {
        }
    }

    return (
        <FormContainer>
            <h1>Ask for contacts</h1>
            <Form onSubmit={submitHandler}>
            <Form.Group className='my-2' controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group className='my-2' controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button disabled={isLoading} type='submit' variant='primary'>
                Continue
            </Button>

            {isLoading && <Loader />}
            </Form>
        </FormContainer>
        );
};

export default ProductScreen;