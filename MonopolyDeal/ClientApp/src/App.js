import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import GameRoom from './components/GameRoom';
import './custom.css'



const App = () => {
    return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/game-room' component={GameRoom} />
            </Layout>
    );
}

export default App;