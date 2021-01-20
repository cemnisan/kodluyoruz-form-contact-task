import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import {ListGroup} from 'react-bootstrap';

function FormBody(props){
    let data = props.value
    return(
        <>
            <ListGroup.Item>Adı: {data.name}</ListGroup.Item>
            <ListGroup.Item>Soyad: {data.lastName}</ListGroup.Item>
            <ListGroup.Item>Email: {data.mail}</ListGroup.Item>
            <ListGroup.Item>Mesaj: {data.text}</ListGroup.Item>
        </>
    )
}

export default FormBody;