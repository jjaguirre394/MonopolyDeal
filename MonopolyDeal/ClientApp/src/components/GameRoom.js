import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const GameRoom = (props) => {
    return (
        <div>
            Hello {props.user}, this is a GameRoom. Please share the following room name with your friends!<br/>
    <b>{props.room}</b>
        <div>
            Once they have all Joined. Please click the Start button.
            <Button>Start</Button>
        </div>
        </div>
           );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        room: state.room,
        connection: state.connection
    };
};

export default connect(mapStateToProps)(GameRoom);