import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCount from './ItemCount';

function ItemListContainer({list}) {
    return (
        <div>
            <Container>
            <Row>
                <Col sm>{list}
                    <ItemCount stock="5" initial="1"/>
                </Col>
                <Col sm>Item 2</Col>
                <Col sm>Item 3</Col>
            </Row>
            </Container>
        </div>
    );
  }

export default ItemListContainer