import React, { useState } from 'react';
import { Form, Button, Input, Label, FormGroup } from 'reactstrap';

function Login() {

    const [] = useState('');
    const [] = useState('');

    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input type='text' value={} onChange={} />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input type='password' value={} onChange={} />
                </FormGroup>
                <Button color='secondary' >Login</Button>
            </Form>
        </div>
    )
}

export default Login