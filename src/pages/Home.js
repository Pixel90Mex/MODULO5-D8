import React from 'react'
import NavBar from '../components/NavBar'
import HomeCarousel from '../components/HomeCarousel'
import Footer from '../components/Footer'
import BookList from '../components/BookList'
import SearchBar from '../components/SearchBar'
import { useState, useEffect } from 'react'

const Home = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [books, setBooks] = useState([]);
  //const [renderBooks, setRenderBooks] = useState([]);

  const [query, setQuery] = useState('');//testo che vado a mettere nella SearchBar

  const getBooks = async () => {
    setLoading(true);
    try {
      const data = await fetch("https://epibooks.onrender.com/");
      const response = await data.json();
      setBooks(response);
      //setRenderBooks(response);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError("Errore durante la ricezione dei dati");
      }
    }
  }

  useEffect(() => {
    getBooks();
  }, [])

  const filterBooks = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <NavBar/>
      <HomeCarousel />
      <SearchBar setQuery={setQuery}/>
      <BookList loading={loading} error={error} filterBooks={filterBooks}/>
      <Footer />
    </>
  )
}

export default Home;