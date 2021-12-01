import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemListContainer({list}) {
    return (
        <div>
            <Container>
            <Row>
                <Col sm>{list}</Col>
                <Col sm>Item 2</Col>
                <Col sm>Item 3</Col>
            </Row>
            </Container>
        </div>
    );
  }

export default ItemListContainer