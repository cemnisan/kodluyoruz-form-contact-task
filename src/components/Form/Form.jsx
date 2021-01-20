import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import {Form as Forms,Button} from 'react-bootstrap'
import {FormContainer} from './'

const uniqid= require('uniqid');

const Data = [{
    id:uniqid(),
    name:"",
    lastName:"",
    mail:"",
    text:""
}]

function Form(props){
    const nameInput = React.useRef()
    const lastNameInput = React.useRef()
    const emailInput = React.useRef()
    const textInput = React.useRef()

    const [form,setForm] = React.useState(Data)

    const formsAdded = form.filter((item)=> item.name !== "").map((item,index) =>{
        return(
            <FormContainer 
            deleteFunc={deleteForm} 
            values={item} 
            key={index} 
            item={item}>
            </FormContainer>
        )
    })
    
    function handleClick(e){
        e.preventDefault()
        const name = nameInput.current.value;
        const lastName = lastNameInput.current.value;
        const mail = emailInput.current.value;
        const text = textInput.current.value;
        
        if(name && lastName && mail && text){
            const newUser = {
                id:uniqid(),
                name:name,
                lastName:lastName,
                mail:mail,
                text:text
            }
            const arr = form.concat(newUser)
            setForm(arr)
            nameInput.current.value = ""
            lastNameInput.current.value= ""
            emailInput.current.value = ""
            textInput.current.value = ""
        } 
        
    }
    
    function deleteForm(id){
        setForm(form.filter(forms => id !== forms.id))
    }

    return(
        <>  
            
            <Forms onSubmit={handleClick}>
                <Forms.Group controlId="formBasicName">
                    <Forms.Label>Name</Forms.Label>
                    <Forms.Control ref={nameInput} placeholder="Name"/>
                </Forms.Group>

                <Forms.Group controlId="formBasicLastName">
                    <Forms.Label>Last Name</Forms.Label>
                    <Forms.Control ref={lastNameInput} placeholder="Last Name"/>
                </Forms.Group>

                <Forms.Group controlId="formBasicEmail">
                    <Forms.Label>Email address</Forms.Label>
                    <Forms.Control ref={emailInput} type="email" placeholder="Enter email" />
                    <Forms.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Forms.Text>
                </Forms.Group>

                <Forms.Group controlId="formBasitText">
                    <Forms.Label>Textarea</Forms.Label>
                    <Forms.Control ref={textInput} as="textarea" rows={3}></Forms.Control>
                </Forms.Group>

                
                <Button onClick={handleClick} className="mx-2" variant="primary" type="submit">Ekle</Button>
            </Forms>
            {formsAdded}
        </>
    )
}

export default Form