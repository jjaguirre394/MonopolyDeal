import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export const Home = (props) => {
    const [usernameState, setUsernameState] = useState("");
    const [roomNameState, setRoomNameState] = useState("");

    const handleUsernameChange = (e) => {
        setUsernameState(e.target.value);
    };

    const handleRoomNameChange = (e) => {
        setRoomNameState(e.target.value);
    };

    const createRoom = async (e) => {
        props.connection.invoke("CreateRoom", "testRoom").catch(function (err) {
            return console.error(err.toString());
        });

        window.location.href = "/game-room";
    };

    const joinRoom = async (e) => {
        props.connection.invoke("JoinRoom", roomNameState).catch(function (err) {
            return console.error(err.toString());
        });

        window.location.href = "/game-room";
    };

    return (
        <div>
            <Form>
                <FormGroup controlId="name">
                    <Label>Name</Label>
                    <Input type="text" placeholder="User Name" onChange={handleUsernameChange}/>
                </FormGroup>
                <hr />
                <FormGroup>
                    <Button onClick={(e) => joinRoom(e)}>
                            Create Private Room
                    </Button>
                </FormGroup>
                <hr />
                <FormGroup controlId="roomName">
                    <Label>Room Name</Label>
                    <Input type="text" placeholder="Room Name" onChange={handleRoomNameChange}/>
                    <Button onClick={(e) => joinRoom(e)}>
                        Join Private Room
                    </Button>
                </FormGroup>
            </Form>
        </div>
    );
}

