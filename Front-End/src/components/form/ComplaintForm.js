import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';

function ComplaintForm() {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [code, setCode] = useState(0)
    const [subject, setSubject] = useState('')
    const [complaint, setComplaint] = useState('')

    const form = { name, address, complaint, city, code, subject }

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <div>
            <Link to='/'><Button color='warning'>Back</Button></Link>
            <Form onSubmit={handlerSubmit}>
                <h1>Complaint Form:</h1>
                <FormGroup>
                    <Label>Name:</Label><br/>
                    <Input type='text' value={name} onChange={e => {setName(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Address:</Label><br/>
                    <Input type='text' value={address} onChange={e => {setAddress(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>City:</Label><br/>
                    <Input type='select' value={city} onChange={e => {setCity(e.target.value)}} >
                        <option>--Select City--</option>
                        <option>Los Angeles</option>
                        <option>Little Rock</option>
                        <option>Phoenix</option>
                        <option>Washington</option>
                        <option>New York</option>
                        <option>Miami</option>
                        <option>Orlando</option>
                        <option>Atlanta</option>
                        <option>Anchorage</option>
                        <option>Huntsville</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>PIN Code:</Label><br/>
                    <Input type='pin' value={code} maxLength={7} onChange={e => {setCode(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Subject:</Label><br/>
                    <Input type='text' value={subject} onChange={e => {setSubject(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Complaint:</Label><br/>
                    <Input type='textarea' value={complaint} onChange={e => {setComplaint(e.target.value)}} />
                </FormGroup>
                <Button color='primary'>Submit Complaint</Button>
            </Form>
        </div>
    )
}

export default ComplaintForm
