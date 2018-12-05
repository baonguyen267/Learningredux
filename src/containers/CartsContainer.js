import React, { Component } from 'react';
import Product from '../components/Product';
import { connect } from 'react-redux';
import Products from '../components/Products';
import PropTypes from 'prop-types';
import Cart from './../components/Cart'
import * as message from './../constant/Message'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import { actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index'
class CartsContainer extends Component {
   render() {
      var { carts } = this.props;
      return (
         <Cart>
            {this.showCartItem(carts)}
            {this.showTotalAmount(carts)}
         </Cart>
      );
   }

   showCartItem(carts){
      var result = <tr><td>{message.MSG_CART_EMPTY}</td></tr>;
      var {onDeleteProductInCart} = this.props;
      var {onChangeMessage} = this.props;
      var {onUpdateProductInCart} = this.props;
      if(carts.length>0){
         result = carts.map((item,index)=>{
            return(
               <CartItem key={index} item = {item} index={index} onDeleteProductInCart = {onDeleteProductInCart} onChangeMessage = {onChangeMessage} onUpdateProductInCart={onUpdateProductInCart}/>
            );
         });
      }
      return result;
   }
   showTotalAmount(carts){
      var result = null;
      if(carts.length > 0){
         result = <CartResult carts = { carts } />
      }
      return result;
   }
}

CartsContainer.propTypes = {
   carts: PropTypes.arrayOf(
      PropTypes.shape({
         product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
         }).isRequired,
         quantity: PropTypes.number.isRequired
      })
   ).isRequired
}

const mapStateToProps = state => {
   return{
      carts: state.carts
   }
}
const mapDispatchToProps = (dispatch, props) => {
   return{
      onDeleteProductInCart: (product)=>{
         dispatch(actRemoveProductInCart(product))
      },
      onChangeMessage: (message)=>{
         dispatch(actChangeMessage(message))
      },
      onUpdateProductInCart: (product,quantity)=>{
         dispatch(actUpdateProductInCart(product,quantity))
      }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartsContainer);