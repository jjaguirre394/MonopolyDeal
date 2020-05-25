import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Monopoly from './Monopoly';

const GameRoom = (props) => {
    const [startState, setStartState] = useState(false);
    const [startHandlerState, setStartHandlerState] = useState(false);

    const handleStartChanged = () => {
        setStartState(true);
        // Let others know the game is starting, if host
        if(props.isHost)
        {
            props.connection.invoke("StartGame");
        }
    }

    if(!startHandlerState)
    {
        setStartHandlerState(true);
        props.connection.on("ReceiveStart", handleStartChanged)
    }

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
            <Button onClick={handleStartChanged}>Start</Button>
        </div>
    </div>

    var playerMessage = <div>
        Waiting for Host to start game...
    </div>

    var message = (props.isHost ? hostMessage : playerMessage);
    var displayElement = (startState ? <Monopoly/> : message)

    return (
        <div>
           {displayElement}
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

export default connect(mapStateToProps)(GameRoom);