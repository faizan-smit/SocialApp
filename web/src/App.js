import logo from './logo.svg';
import './App.css';
// import { Routes, Route, Link, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/home';
import Profile from './components/pages/Profile/profile';
import Navbar from './components/navbar/navbar';
import Signup from './components/pages/Signup/signup';
import Login from './components/pages/Login/login';



function App() {
  return (


    <>

    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />

    </Routes>
    </Router>
    </>

  );
}

export default App;
