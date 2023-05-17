import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import "../style/MySingleBook.css";
import { Link } from 'react-router-dom';
import Layout from './Layout';

const BookDetails = () => {
    const { asin } = useParams()

    const [dataBook, setDataBook] = useState(null)
    console.log(dataBook)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const BookDetails = async () => {
        setLoading(true)
        try {
            const data = await fetch(`https://epibooks.onrender.com/${asin}`)
            const response = await data.json()
            setDataBook(response)
            setLoading(false)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        BookDetails()
    }, [])

    return (
        <>
            <Layout>
                {loading && !error && <div>caricamento</div>}
                {!loading && error && <div>Si è verificato un errore!</div>}
                {!loading && !error && dataBook &&
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Card id='Book' style={{ width: '20rem', minHeight: 'fit-content' }}>
                            <Card.Img className='object-fit-cover' variant="top" src={dataBook[0].img} style={{ height: '26rem' }} />
                            <Card.Body key={dataBook.asin}>
                                <Card.Title className='text-truncate'>{dataBook[0].title}</Card.Title>
                                <Card.Subtitle className="mb-2">{dataBook[0].asin}</Card.Subtitle>
                                <Card.Text>{dataBook[0].category}</Card.Text>
                                <Card.Text>{dataBook[0].price}</Card.Text>
                                <Link to='/'><Button variant="primary">Home</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                }
            </Layout>
        </>
    )
}

export default BookDetails