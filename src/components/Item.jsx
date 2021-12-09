import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Item({item}) {
    return (
        <Card style={{ width: '18rem' }} className="text-center">
        <Card.Header>{item.header}</Card.Header>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Img variant="top" src={item.img} />
            <Card.Text>
            {item.text}
            </Card.Text>
            <Button variant="primary">Ver Detalle</Button>
        </Card.Body>
        </Card>
    );
  }

export default Item