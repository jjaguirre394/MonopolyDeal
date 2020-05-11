import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { GameRoom } from './components/GameRoom';
import * as signalR from '@microsoft/signalr';

import './custom.css'

const App = () => {
    const connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();
    connection.start().catch(function(err) {
        return console.error(err.toString());
    });

    return (
      <Layout>
        <Route exact path='/' render={(props) => <Home {...props} connection={connection} connId = "testVal"/>} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/game-room' component={GameRoom} />
      </Layout>
    );
}

export default App;