import React from 'react';
import './app.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Offer from './Components/Offers/Offers';
import Main from './Components/Main/Main';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="main">
        <Main />
      </div>
      <div id="offers">
        <Offer />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;



