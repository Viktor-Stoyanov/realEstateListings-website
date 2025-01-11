import { Row, Col, Form } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useState } from 'react';


const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCities = () => {
    if (!products) return [];
    const cities = [...new Set(products.map(product => product.city))];
    return cities.sort();
  };

  const getCategories = () => {
    if (!products) return [];
    const categories = [...new Set(products.map(product => product.category))];
    return categories.sort();
  };

  const getFilteredProducts = () => {
    if (!products) return [];
    return products.filter(product => {
      const matchesCity = selectedCity === 'all' || product.city === selectedCity;
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesCity && matchesCategory;
    });
  };

  return (
    <>
      { isLoading ? (
        <Loader/>
      ) : error ? (<Message variant={'danger'}>{ error?.data?.message || error.error }</Message>) : (<>
        <Row>
          <Col md={8}>
            <h1>Latest Listings</h1>
          </Col>

          <Col md={2}>
            <Form.Control
                as='select'
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}>
                    <option value="all">All Cities</option>
                {getCities().map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </Form.Control>
          </Col>

          <Col md={2}>
            <Form.Control
                as='select'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="all">All Categories</option>
              {getCategories().map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Form.Control>
          </Col>
          </Row>

        <Row>
            {getFilteredProducts().map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
      </>) }
      
    </>
  );
};
export default HomeScreen;