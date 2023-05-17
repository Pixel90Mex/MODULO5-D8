import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <Container className="mt-5">
            <Row>
                <Col sm={12}>
                    <Form className="d-flex" onSubmit={(e) => {
                        e.preventDefault()
                        setQuery(searchTerm)//quando premo il pulsante la mia query viene settata come searchterm nella searchbar
                    }}>
                        <Form.Control
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type='submit'>
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;
