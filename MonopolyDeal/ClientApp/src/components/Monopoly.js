import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import MonopolyController from '../logic/MonopolyController';
import Hand from './Hand'

const controller = new MonopolyController();

const Monopoly = (props) => {
    const [gameState, setGameState] = useState({});
    const [handlerState, setHandlerState] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [disable, setDisable] = useState(true);
    const [turnCount, setTurnCount] = useState(0);

    const onShowAlert = () => {
        setShowAlert(true, () => {
            window.setTimeout(() => {
                setShowAlert(false);
            }, 2000)
        });
    }

    useEffect(() => {
        if(showAlert)
        {
            window.setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
    }, [showAlert]);

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

    const receiveUserTurn = (userName) => {
        onShowAlert();
        if (userName == props.user) {
            setDisable(false);
        }
    }

    if (!handlerState) {
        setHandlerState(true);
        console.log("Setting handlers.")
        props.connection.on("ReceiveState", handleUpdateState)
        props.connection.on("ReceiveUserTurn", receiveUserTurn)

    }

    if (props.isHost && !gameStarted) {
        // Get initial state and set it
        let initialState = controller.start(props.users);
        setGameState(initialState);

        // Communicate it to all
        sendState(initialState);
        setGameStarted(true);

        // Send the First the notification that it is his turn!
        sendUserTurn(initialState.userTurn.name);
    }

    var userTurnName = (gameState.userTurn) ? gameState.userTurn.name : null;

    return (
        <div>
            <Alert color="info" isOpen={showAlert}>
                It is {userTurnName}'s turn!
                </Alert>
            <p>I am {props.user}!</p>
            <Hand hand={controller.getHand(props.user)} isDisabled={ disable }></Hand>
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