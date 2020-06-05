import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MonopolyController from '../logic/MonopolyController';
import Hand from './Hand'

const controller = new MonopolyController();

const Monopoly = (props) => {
    const [gameState, setGameState] = useState({});
    const [handlerState, setHandlerState] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const handleUpdateState = (user, newState) => {
        console.log(`${user} sent new state. Updating state to match this.`);
        let gameStateObject = JSON.parse(newState);
        controller.updateState(gameStateObject);
        setGameState(gameStateObject);
    }
    const sendState = (state) => {
        let stateString = JSON.stringify(state);
        props.connection.invoke("SendState", props.user, stateString).catch(function (err) {
            return console.error(err.toString());
        });
    }

    const sendUserTurn = (userName) => {
        props.connection.invoke("SendUserTurn", userName).catch((err) => {
            return console.error(err.toString());
        });
    }

    if (!handlerState) {
        setHandlerState(true);
        console.log("Setting handlers.")
        props.connection.on("ReceiveState", handleUpdateState)

    }

    if (props.isHost && !gameStarted) {
        // Get initial state
        let gameState = controller.start(props.users);

        // Communicate it to all
        sendState(gameState);
        setGameStarted(true);

        // Send the First the notification that it is his turn!
        sendUserTurn(gameState.userTurn.name);
    }

    return (
        <div>
            I am {props.user}!
            <Hand hand={controller.getHand(props.user)}></Hand>
        </div>);

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

export default connect(mapStateToProps)(Monopoly);