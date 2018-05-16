import React, { Component } from 'react';

import Navigation from './components/Navigation'
import Sidebar from './components/Sidebar';
import Chat from './components/chat/Chat';

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedUser: {},
            users: [
                {
                    id: 1,
                    name: 'Chewbacca',
                    lastMessage: 'Ra Ra Raaaa',
                    messageLog: [
                        {
                            id: 1,
                            content: 'Ugmas bella warla oblation at ang at bakit bakit jongoloids mashumers bella wiz ng juts thunder Gino at ang na shongaers ganda lang ano.'
                        },
                        {
                            id: 2,
                            content: 'Mollit laboris pork belly in consequat non sed drumstick prosciutto leberkas anim pork loin.'
                        }
                    ] 
                },
                {
                    id: 2,
                    name: 'Anakin Skywalker',
                    lastMessage: 'I am your daddeh',
                    messageLog: [
                        {
                            id: 1,
                            content: 'At nang ano Cholo nakakalurky wiz emena gushung daki kasi lulu shontis biway at ang krung-krung chaka keme shonget wrangler jowabella ano lulu.'
                        },
                        {
                            id: 2,
                            content: 'Mollit laboris pork belly in consequat non sed drumstick prosciutto leberkas anim pork loin.'
                        }
                    ] 
                },
                {
                    id: 3,
                    name: 'Luke Skywalker',
                    lastMessage: 'Nooooo!',
                    messageLog: [
                        {
                            id: 1,
                            content: 'Thunder at Mike chuckie ng bokot balaj kasi at ang at bakit pamin buya na ang bakit emena gushung bokot Gino kasi sangkatuts pamenthol.'
                        },
                        {
                            id: 2,
                            content: 'Mollit laboris pork belly in consequat non sed drumstick prosciutto leberkas anim pork loin.'
                        }
                    ] 
                },
                {
                    id: 4,
                    name: 'R2-D2',
                    lastMessage: 'Beep Beep Beep',
                    messageLog: [
                        {
                            id: 1,
                            content: 'Ng cheapangga pamenthol ugmas shala matod otoko tanders pamentos bongga lorem ipsum keme keme chipipay at ang sa bakit ano ano otoko at bakit at ang.'
                        },
                        {
                            id: 2,
                            content: 'Mollit laboris pork belly in consequat non sed drumstick prosciutto leberkas anim pork loin.'
                        }
                    ] 
                }
            ],
            selectedOnlineUser: undefined
        };
        this.onClickUser = this.onClickUser.bind(this);
        this.dropDownSelect = this.dropDownSelect.bind(this);
    }

    onClickUser(e, data) {
        e.preventDefault();
        console.log(data.name, 'user has been clicked');
        this.setState({
            selectedUser: data
        });
    }

    dropDownSelect(e, data) {
        e.preventDefault();
        this.setState({ 
            value: e.target.value,
            selectedOnlineUser: e.target.value
        }, () => console.log( this.state.selectedOnlineUser, " has been selected"));
    }

    render() {
        return (
            <div className="main-body">
                <Navigation dropDownSelect={this.dropDownSelect} users={this.state.users}/>
                <Sidebar users={this.state.users} onClickUser={this.onClickUser}/>
                <Chat selectedUser={this.state.selectedUser} users={this.state.users} selectedOnlineUser={this.state.selectedOnlineUser}/>
            </div>
        );
    }
}

export default App;