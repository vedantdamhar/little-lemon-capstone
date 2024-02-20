import './App.css';
import Nav from './Nav';
import HeaderMain from './HeaderMain';
import Footer from './Footer';
import BookingPage from './BookingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingConfirmation from './BookingConfirmation';

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


