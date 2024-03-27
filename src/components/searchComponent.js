import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Form, Button, Container, Row, Col } from 'react-bootstrap';
import './style.css';

const options = [
    ['Option 4', 'Option 5', 'Option 6'],
    ['Option 7', 'Option 8', 'Option 9'],
    ['Option 10', 'Option 11', 'Option 12'],
    ['Option 13', 'Option 14', 'Option 15']
];

const cuisineTypeOptions = [
 'Option 1', 'Option 2', 'Option 3'
]



const SearchComponent = ({searchParams,setSearchParams,handleSearchSubmit}) => {

return (
    <Container>
        <div className = 'searchBar'>
            <Form onSubmit={handleSearchSubmit}>
                <Row>


                    <Col>
                    <Form.Label>Cuisine Type  </Form.Label>
                        <Form.Select controlId="cuisineType">
                            
                            <Form.Control
                                placeholder="Search by Cuisine Type  "
                                value={searchParams.cuisineType}
                                onChange={(e) =>
                                    setSearchParams({
                                        ...searchParams,
                                        cuisineType: e.target.value
                                    })
                                }
 
                            />
                            {cuisineTypeOptions.map((item, idx) => (
                                    <option key={idx} value={item}>{item}</option>
                                ))}
                        </Form.Select>
                    </Col>

                    <Col>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Col>
                    
                </Row>
            </Form>
            </div>
    </Container>
);
};

export default SearchComponent;