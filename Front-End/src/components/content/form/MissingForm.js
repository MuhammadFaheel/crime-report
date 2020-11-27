import React, { useState } from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';

function MissingForm() {

    const [mname, setMname] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
    const [gender, setGender] = useState('')
    const [lastseen, setLastseen] = useState('')
    const [detail, setDetail] = useState('')
    const [image, setImage] = useState('')

    const form = {mname, city, gender, detail, lastseen, image}

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }

    return (
        <div>
            <Link to= '/'><Button color= 'warning'>Back</Button></Link>
            <Form onSubmit={handlerSubmit}>
                <h1>Missing Person Form:</h1>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type='text' value={mname} onChange={e => {setMname(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Age:</Label>
                    <Input type='pin' value={age} maxLength={3} onChange={e => {setAge(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>City:</Label>
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
                    <Label>Gender:</Label>
                    <Input type='select' value={gender} onChange={e => {setGender(e.target.value)}} >
                        <option>--Select Gender--</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Last Seen:</Label>
                    <Input type='text' value={lastseen} onChange={e => {setLastseen(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Detail:</Label>
                    <Input type='textarea' value={detail} onChange={e => {setDetail(e.target.value)}} />
                </FormGroup>
                <FormGroup>
                    <Label>Upload the Image:</Label>
                    <Input type='file' accept='image/' value={image} onChange={e => {setImage(e.target.value)}} />
                </FormGroup>
                <Button color='primary'>Submit Missing Report</Button>
            </Form>
        </div>
    )
}

export default MissingForm
