import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const UserInfo = (props) => {
    return(
        <div>
            <p>Username: {props.gameUser.name}</p>
            <p>Bank: ${props.gameUser.bank}M</p>
        </div>
    );
}

export default UserInfo;