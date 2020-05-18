import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as signalR from '@microsoft/signalr';


const Home = (props) => {
    const connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();
    connection.start().catch(function (err) {
        return console.error(err.toString());
    });
    const handleUsernameChange = (e) => {
        props.setUser(e.target.value);
    };

    const handleRoomNameChange = (e) => {
        props.setRoom(e.target.value);
    };

    const history = useHistory();

    const routeToGame = () => {
        //save connection
        props.setConn(connection);
        let path = '/game-room';
        history.push(path);
    }

    const onCreateRoom = async (e) => {
        const newRoomName = uuidv4()
        props.setRoom(newRoomName);
        connection.invoke("CreateRoom", newRoomName, props.user).catch(function (err) {
            return console.error(err.toString());
        });

        routeToGame();
    };

    const onJoinRoom = (e) => {
        connection.invoke("JoinRoom", props.room, props.user).catch(function (err) {
            return console.error(err.toString());
        });

        routeToGame();
    };

    const uuidv4 = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    return (
        <div>
            <Form>
                <FormGroup controlId="name">
                    <Label>Name</Label>
                    <Input type="text" placeholder="User Name" onChange={handleUsernameChange} />
                </FormGroup>
                <hr />
                <FormGroup>
                    <Button onClick={(e) => onCreateRoom(e)}>
                        Create Private Room
                    </Button>
                </FormGroup>
                <hr />
                <FormGroup controlId="roomName">
                    <Label>Room Name</Label>
                    <Input type="text" placeholder="Room Name" onChange={handleRoomNameChange} />
                    <Button onClick={(e) => onJoinRoom(e)}>
                        Join Private Room
                    </Button>
                </FormGroup>
            </Form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        connection: state.connection,
        user: state.user,
        room: state.room
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setUser: (userName) => dispatch({
            type: "set_user",
            payload: {
                user: userName
            }
        }),
        setRoom: (roomName) => dispatch({
            type: "set_room",
            payload: {
                room: roomName
            }
        }),
        setConn: (connection) => dispatch({
            type: "set_conn",
            payload: {
                connection: connection
            }
        })


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);