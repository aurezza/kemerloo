import React, { Component } from 'react';

class ChatInput extends Component {
    render() {
        return(
            <div className="chat-input">
                <input type="text" placeholder="Message" value={this.props.message} onChange={this.props.messageChange}/>
                <button onClick={this.props.sendMessage}>Send</button>
            </div>
        );
    }
}

export default ChatInput;