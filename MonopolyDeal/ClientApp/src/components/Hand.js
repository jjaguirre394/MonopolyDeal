import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Hand = (props) => {
    var hand =
        <Container>
            <Row>
                {props.hand.map((card, index) => (
                    <Col key={index}>
                        {card.getCardElements(props.isDisabled)}
                    </Col>
                ))}
            </Row>
        </Container>

    return hand;
}

export default Hand;