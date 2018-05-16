import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return(
            <div className="navigation">
                <div className="online-users">
                    Online Users: <select onChange= {this.props.dropDownSelect}>
                        <option key='-1' value='Select'>Select</option>
                        {this.props.users.map(
                            (item, key) => {
                                return(
                                    <option key={key} value={item.idT} id={item.id}>{item.name}</option>
                                )
                        })}
                    </select>
                </div>
            </div>
        )
    }
}

export default Navigation;