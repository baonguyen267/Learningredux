import React, { Component } from 'react';
import Message from './../components/Message'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class MessagesContainer extends Component {
   render() {
      var { messages } = this.props;
      return (
         <Message messages = {messages}/>
      );
   }
}

const mapStateToProps = state => {
   return{
      messages: state.messages
   }
}


export default connect(mapStateToProps, null)(MessagesContainer);