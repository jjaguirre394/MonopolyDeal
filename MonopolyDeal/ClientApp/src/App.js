import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import GameRoom from './components/GameRoom';
import './custom.css'
import * as signalR from '@microsoft/signalr';
import { connect } from 'react-redux';

const connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();
let isAddUserHandlerSet = false;

async function start() {
    try {
        await connection.start();
        console.log("connected");
    } catch (err) {
        console.log(err);
        setTimeout(() => start(), 5000);
    }
};



connection.onclose(async () => {
    await start();
});

// Start the connection.
start();


const App = (props) => {
    if(connection)
    {
        props.setConn(connection);
    }

    const handleUserJoined = (user) => {
        console.log(`${user} joined. Adding to users collection.`)
        props.addUser(user)
    }
    
    if(!isAddUserHandlerSet)
    {
        isAddUserHandlerSet = true;
        connection.on("UserJoined", handleUserJoined);
    }
    return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/game-room' component={GameRoom} />
            </Layout>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setConn: (connection) => dispatch({
            type: "set_conn",
            payload: {
                connection: connection
            }
        }),
        addUser: (userName) => dispatch({
            type: "add_user",
            payload: {
                user: userName
            }
        })
    };
};

export default connect(null, mapDispatchToProps)(App);