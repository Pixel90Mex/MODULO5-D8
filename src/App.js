import ErrorPage from './components/ErrorPage';
import Home from './pages/Home'
import BookDetails from './components/BookDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      <Route path='/:asin' element={<BookDetails/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
