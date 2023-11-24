import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register'
import Otp from './Otp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/otp' element={<Otp />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
