import React, { Component } from 'react';

class ChatTimeline extends Component {
    render() {
        return(
            <div className="chat-response">
                <div className="operator-response">
                    {this.props.messages.map((message, key) => {
                        return (
                            <div key={key}>
                                <p className="chat-bubble">
                                    {message.messageContent}
                                </p>
                            </div>
                        )     
                    })}
                </div>

                 <div className="other-user-response">
                    {this.props.messageLogs
                    .filter( obj => {
                        return obj.id == this.props.selectedOnlineUser;
                    }).map((obj, idx) => { 
                        return (
                            <div key={idx}>
                                <p className="chat-bubble">
                                    {obj.sender.name}: <br/>
                                    {obj.message}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default ChatTimeline;