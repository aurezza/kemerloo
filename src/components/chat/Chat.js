import React from 'react';

import ChatHeader from './ChatHeader';
import ChatTimeline from './ChatTimeline';
import ChatInput from './ChatInput';

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            messages: [], // TODO: dyanamic
            messageLogs: [
                {
                    id: 1,
                    message: 'Ugmas bella warla oblation at ang at bakit bakit jongoloids mashumers bella wiz ng juts thunder Gino at ang na shongaers ganda lang ano.',
                    sender: {
                        name: 'Chewbacca',
                        id: '1',
                        image: 'dfasdf'
                    }
                },
                {
                    id: 2,
                    message: 'At nang ano Cholo nakakalurky wiz emena gushung daki kasi lulu shontis biway at ang krung-krung chaka keme shonget wrangler jowabella ano lulu.',
                    sender: {
                        name: 'Anakin Skywalker',
                        id: '2',
                        image: 'dfasdf2'
                    }
                },
                {
                    id: 3,
                    message: 'Thunder at Mike chuckie ng bokot balaj kasi at ang at bakit pamin buya na ang bakit emena gushung bokot Gino kasi sangkatuts pamenthol.',
                    sender: {
                        name: 'Luke Skywalker',
                        id: '3',
                        image: 'dfasdf3'
                    }
                },
                {
                    id: 4,
                    message: 'Ng cheapangga pamenthol ugmas shala matod otoko tanders pamentos bongga lorem ipsum keme keme chipipay at ang sa bakit ano ano otoko at bakit at ang.',
                    sender: {
                        name: 'R2-D2',
                        id: '3',
                        image: 'dfasdf3'
                    }
                }
            ]
            
        };

        this.messageChange = this.messageChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    messageChange(e) {
        this.setState({
            message: e.target.value
        });
        console.log('messages:', this.state.messages);
        
    }

    sendMessage(e) {
        e.preventDefault();
        const addedMessage = this.state.messages;
        var messageIndex = 1; 
        addedMessage.push({
            'id': messageIndex,
           'messageContent': this.state.message
        });
        this.setState({
            message: '',
            messages: addedMessage
        });
        console.log('messages', this.state.messages);
    }

    render() {
        return (
            <div className="chat">
                <ChatHeader selectedUserName={this.props.selectedUser.name}/> 
                <ChatTimeline messages={this.state.messages} selectedOnlineUser={this.props.selectedOnlineUser} messageLogs={this.state.messageLogs}/>
                <ChatInput message={this.state.message} messageChange={this.messageChange} sendMessage={this.sendMessage}/>
            </div>
        );
    }
}

export default Chat;