import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

function ItemCount({stock,initial}) {

    const [isItem, setisItem] = useState(initial);

    function downItem(){
        isItem <= 0 ? setisItem(0) : setisItem(isItem - 1);
    }

    function upItem(){
        isItem >= stock ? setisItem(stock) : setisItem(isItem + 1);
    }    

    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1" onClick={downItem} >
                -
                </Button>
                <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                value={isItem}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={upItem}>
                +
                </Button>
            </InputGroup>
        </div>
    );
  }

export default ItemCount