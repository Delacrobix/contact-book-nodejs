import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ContactForm from './pages/contactForm';
import Detail from './pages/detail';
import ContactList from './pages/contactList';

function App() {
  return (
    <BrowserRouter>
      <div className='main-container'>
        <Navbar />
        <Routes>
          <Route path='/home' element={<ContactForm />} />
          <Route path='/detail/:name' element={<Detail />} />
          <Route path='/contacts' element={<ContactList />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
