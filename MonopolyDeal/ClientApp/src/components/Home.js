import React from 'react';
import { Button } from 'reactstrap';
import * as signalR from '@microsoft/signalr';

export const Home = () => {
    const connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();
    connection.start().catch(function (err) {
        return console.error(err.toString());
    });

    const joinRoom = async (e) => {
        connection.invoke("JoinRoom", "test").catch(function (err) {
            return console.error(err.toString());
        });
    };

    return (
        <Button onClick={(e) => joinRoom(e)}>
            Join Room
        </Button>
    );
}

