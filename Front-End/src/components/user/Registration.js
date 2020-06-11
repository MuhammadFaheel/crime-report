import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

function Registration() {

    const [] = useState('');
    const [] = useState('');
    const [] = useState('');

    return (
        <div>
            <Form>
                <FormGroup>
                    <Label>Full Name:</Label>
                    <Input type='text' value={} onChange={} />
                </FormGroup>
                <FormGroup>
                    <Label>Email:</Label>
                    <Input type='text' value={} onChange={} />
                </FormGroup>
                <FormGroup>
                    <Label>Password:</Label>
                    <Input type='password' value={} onChange={} />
                </FormGroup>
                <Button color='secondary' >Sign Up</Button>
            </Form>
        </div>
    )
}

export default Registration
