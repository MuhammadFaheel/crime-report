import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';

function CrimeForm() {

    const [area, setArea] = useState('')
    const [city, setCity] = useState('')
    const [detail, setDetail] = useState('')
    const [identity, setIdentity] = useState('')
    const [image, setImage] = useState('')
    const [subject, setSubject] = useState('')

    const form = {area, city, detail, identity, image, subject}

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <div>
            <Link to= '/'><Button color= 'warning'>Back</Button></Link>
            <Form onSubmit={handlerSubmit}>
                <h1>Crime Form:</h1>
                <FormGroup>
                    <Label>Area:</Label><br/>
                    <Input type='text' value={area} onChange={e => {setArea(e.target.value)}} />
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
                    <Label>Subject:</Label><br/>
                    <Input type='text' value={subject} onChange={e => {setSubject(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Crime Detail:</Label><br/>
                    <Input type='textarea' value={detail} onChange={e => {setDetail(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Identity:</Label><br/>
                    <Input type='text' value={identity} onChange={e => {setIdentity(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Upload the Image:</Label><br/>
                    <Input type='file' accept= 'image/' value={image} onChange={e => {setImage(e.target.value)}} />
                </FormGroup>
                <Button color='primary'>Submit Crime Form</Button>
            </Form>
        </div>
    )
}

export default CrimeForm

