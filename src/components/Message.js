import React, { Component } from 'react';
class Message extends Component {
    render() {
        var messages = this.props.messages;
        return (
            <h3>
                <span className="badge amber darken-2">{messages}</span>
            </h3>
        );
    }
}
export default Message;