import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header'
import Products from './component/Products/Products';
import Footer from './Footer/Footer';
import { CounterContext } from './component/CounterContext'
import React from 'react';



function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
            <CounterContext.Provider value={{counter, setCounter}}>

    <Navbar/>
    <Header/>
    <Products/>
    </CounterContext.Provider>

    <Footer/>

    </div>
  );
}

export default App;
