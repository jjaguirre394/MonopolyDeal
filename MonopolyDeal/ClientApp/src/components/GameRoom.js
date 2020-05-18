import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Monopoly from './Monopoly';

const GameRoom = (props) => {
    const handleUserJoined = (user) => {
        props.addUser(user);
    }
    props.connection.on("UserJoined", handleUserJoined);
    
    return (
        <div>
            Hello {props.user}, this is a GameRoom. Please share the following room name with your friends!<br />
            <b>{props.room}</b>
            <div>
                Once they have all Joined. Please click the Start button.
                <b>Current Users:</b>
                <ul>
                    {props.users.map(user => (
                        <li key={user}>
                            {user} Joined!
                        </li>
                    ))}
                </ul>
            <Button>Start</Button>
            </div>
            <Monopoly></Monopoly>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        room: state.room,
        connection: state.connection,
        users: state.users
    };
};

const dispatchToProps = dispatch => {
    return {
        addUser: (userName) => dispatch({
            type: "add_user",
            payload: {
                user: userName
            }
        })
    }
}

export default connect(mapStateToProps, dispatchToProps)(GameRoom);