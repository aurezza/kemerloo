import React, { Component } from 'react';
import defaultImage from '../img/cat_in_bread.jpg';

class Sidebar extends Component {
    render() {
        return(
            <div className="sidebar">
                <div className="user-list-title">
                    Users List
                </div>
                <div className="user-list">
                    {this.props.users.map(user => {
                        return(
                            <div key={user.id}className="user-item" onClick={(e) => this.props.onClickUser(e,user)}>
                                <img alt={user.id} src={defaultImage} />
                                <p>{user.name}</p>
                                <span>{user.lastMessage}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Sidebar;