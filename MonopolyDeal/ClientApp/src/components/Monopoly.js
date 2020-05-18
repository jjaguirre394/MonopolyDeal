import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import MonopolyController from '../logic/MonopolyController'

const Monopoly = (props) =>
{
    const controller = new MonopolyController();
    controller.start(props.users)
    return(<div>Monopoly</div>);
    
};

const mapStateToProps = state => {
    return {
        user: state.user,
        room: state.room,
        connection: state.connection,
        users: state.users
    };
};

export default connect(mapStateToProps)(Monopoly);