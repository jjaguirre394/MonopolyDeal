import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Monopoly from './Monopoly';

const GameRoom = (props) => {
    var hostMessage = <div>
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

    var playerMessage = <div>
        Waiting for Host to start game...
    </div>

    var message;
    if(props.isHost)
    {
        message = hostMessage;
    }
    else
    {
        message = playerMessage;
    }
    return (
        <div>
            {message}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        room: state.room,
        connection: state.connection,
        users: state.users,
        isHost: state.isHost
    };
};

// const dispatchToProps = dispatch => {
//     return {
//         addUser: (userName) => dispatch({
//             type: "add_user",
//             payload: {
//                 user: userName
//             }
//         })
//     }
// }

export default connect(mapStateToProps)(GameRoom);