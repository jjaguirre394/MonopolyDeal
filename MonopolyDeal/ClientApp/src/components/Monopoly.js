import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import MonopolyController from '../logic/MonopolyController';
import Hand from './Hand';
import UserInfo from './UserInfo';

const controller = new MonopolyController();

const Monopoly = (props) => {
    const [gameState, setGameState] = useState(null);
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

    const handleUserMove = (action, card) => {
        if(turnCount > 0)
        {
            switch (action) {
                case "sell":
                    gameState.userTurn.sellToBank(card);
                    break;
                default:
                    throw "Cannot find that user action!";
            }
            setTurnCount(turnCount-1);
        }
    };

    const handleUpdateState = (user, newState) => {
        console.log(`${user} sent new state. Updating state to match this.`);
        var gameStatePlainObject = JSON.parse(newState);
        var newGameState = controller.updateState(gameStatePlainObject);
        setGameState(newGameState);
    }

    const sendState = (state) => {
        var stateString = JSON.stringify(state);
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
            setTurnCount(3);
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

        // Send the First the notification that it is their turn!
        sendUserTurn(initialState.userTurn.name);
    }
    
    var alertComponent = null;
    var turnMessageComponent = null;
    var userInfoComponent = null;
    var userHandComponent = null;
    if(gameState)
    {
        var userTurnName = (gameState.isMyTurn(props.user)) ? "your" : gameState.userTurn.name + "'s";
        alertComponent = <Alert color="info" isOpen={showAlert}>It is {userTurnName} turn!</Alert>

        var turnCountMessage = (gameState.isMyTurn(props.user)) ? `I have ${turnCount} moves left this round!` : null;
        turnMessageComponent = <p>{turnCountMessage}</p>;

        userInfoComponent = <UserInfo gameUser={gameState.getUser(props.user)}/>;
        userHandComponent = <Hand hand={controller.getHand(props.user)} isDisabled={disable} onclickHandler={handleUserMove}></Hand>;
    }

    return (
        <div>
            {alertComponent}
            {userInfoComponent}
            {turnMessageComponent}
            {userHandComponent}
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