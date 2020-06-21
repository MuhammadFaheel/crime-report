import React, { useState } from 'react';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Link to='/'><Button color='warning'>Back</Button></Link>
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <Button color='secondary' >Login</Button>
                <p>Don't have an account go to the <Link to="/sign-up">Register...</Link></p>
            </Form>
        </div>
    )
}

export default Login