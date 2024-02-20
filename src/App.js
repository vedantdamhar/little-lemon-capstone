import './App.css';
import Nav from './components/Nav';
import HeaderMain from './components/HeaderMain';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingConfirmation from './components/BookingConfirmation';

export default function App() {
  return (
    <Router>
      <Nav />
      <div id='spacer'></div>
      <Routes>
        <Route path='/' element={<HeaderMain />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/booking/confirmation' element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}


