import { Container, Row, Spinner, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import React, { useState } from 'react';
import "../style/MyBookList.css"
import CommentArea from './Comments/CommentArea';

const BookList = ({ filterBooks, loading, error }) => {

    const [selected, setSelected] = useState('');

    return (
        <>
            <Container id='container'>
                {error && <h1 className='text-danger'>{error}</h1>}
                {loading && !error && <Spinner color="#36d7b7" />}
                {!loading && !error &&
                    <div>
                        <h4 className='text-center mb-5'>Ultimi arrivi!</h4>
                        <Container>
                            <Row>
                                <Col className='d-flex flex-wrap gap-3' lg={8}>
                                {filterBooks && filterBooks.map((book) => (
                                    <SingleBook
                                        selected={selected===book.asin}
                                        setSelected={setSelected}
                                        key={book.asin}
                                        title={book.title}
                                        img={book.img}
                                        author={book.author}
                                        price={book.price}
                                        asin={book.asin}
                                        category={book.category}
                                    />
                                ))}
                                </Col>
                                <Col lg={4}>
                                <CommentArea
                                asin={selected}
                                
                                />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                }
            </Container>
        </>
    )
}

export default BookList;