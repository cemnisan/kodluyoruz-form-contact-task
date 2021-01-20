import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import {ListGroup,Button,Accordion,Card} from 'react-bootstrap';
import {FormBody} from './'



function FormContainer(props) {

    function onDeleteUser(){
        const id = props.item.id
        const deleteUser = props.deleteFunc
        deleteUser(id)
    }

    return(
        <Accordion>
            <Card className="mt-5 mb-5">
                <Card.Header>
                    <Accordion.Toggle as ={Button} variant ="link" eventKey="0">
                        Click Me
                    </Accordion.Toggle>
                </Card.Header>
            
                <Accordion.Collapse eventKey="0">
                    <ListGroup>
                        <FormBody value={props.values}></FormBody>
                        <Button className="btn btn-primary mb-2" onClick={onDeleteUser}>Sil</Button>
                        <Button><i class="fas fa-edit"></i></Button>
                    </ListGroup>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
} 

export default FormContainer