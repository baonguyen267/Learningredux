import React, { Component } from 'react';
import Header from './../components/Header'
import Products from './../components/Products'
import MessagesContainer from './../containers/MessagesContainer'
import Cart from './../components/Cart'
import CartsContainer from './../containers/CartsContainer'
import Footer from './../components/Footer'
import ProductsContainer from './../containers/ProductsContainer'
class App extends Component{
   render(){
      return(
        <div>
        <Header/>
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer />
                    <MessagesContainer />
                    <CartsContainer />
                </div>
            </main>
        <Footer/>
    </div>
      );
   }
}
export default App;