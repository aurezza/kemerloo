import React, { Component } from 'react';

class ChatHeader extends Component {
    render() {
        return (
            <div className="chat-header">
                <div className="selected-user">
                    {this.props.selectedUserName}
                </div>
            </div>
        );
    }

}

export default ChatHeader;