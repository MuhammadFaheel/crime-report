import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Registration() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Link to='/'><Button color='warning'>Back</Button></Link>
            <h1>Register</h1>
            <Form>
                <FormGroup>
                    <Label>Full Name:</Label>
                    <Input type='text' value={name} onChange={e => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <Button color='secondary' >Sign Up</Button>
                <p>Already register so goto the <Link to="/login">Login...</Link></p>
            </Form>
        </div>
    )
}

export default Registration
