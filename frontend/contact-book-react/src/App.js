import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactForm from './pages/contactForm';
import Navbar from './components/navbar';
import Detail from './pages/detail';
import ContactList from './pages/contactList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ContactForm />} />
        <Route path='/details/:id' element={<Detail />} />
        <Route path='/contacts' element={<ContactList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
