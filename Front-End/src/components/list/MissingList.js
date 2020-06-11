import React from 'react'

function MissingList() {

    const users = [
        {
            id: 1,
            name: 'Jhonson',
            age: '23',
            city: 'Washington',
            gender: 'Male',
            lastseen: 'Preston University',
            detail: 'Blue pant with white T-Shirt, face ligth brown color, black hair, height 5.8 feet eye color gray.',
            image: '',
            status: 'Submitted'
        },
        {
            id: 2,
            name: 'Julia',
            age: '18',
            city: 'Orlando',
            gender: 'Female',
            lastseen: 'Might Club',
            detail: 'Fancy dress color blue, height 4.9feet, long golden hair, brown eyes, face color white.',
            image: '',
            status: 'Seen'
        },
        {
            id: 3,
            name: 'Brad',
            age: '14',
            city: 'Little Rock',
            gender: 'Male',
            lastseen: 'Sun Way Garden',
            detail: 'Cambridge School unifrom blue pant and white shirt, height 4.7 feet, white hair, eye color green.',
            image: '',
            status: 'Completed'
        }
    ]

    const tagFrom = {
        color: 'red',
        margin: '0%',
        padding: '0%',
        marginLeft: '7%',
        marginRight: '5%',
        textDecoration: 'underline'
    }

    const fromList = {
        backgroundColor: 'gray',
        color: 'white',
        margin: '5px',
        border: 'solid',
        borderColor: 'black',
        borderRadius: '15px',
        padding: '10px'
    }

    const fromBottom = {
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%'
    }

    return (
        <div>
            <h2 style={tagFrom}>Missing Person List:</h2>
            <div style={fromBottom}>
                {users.map(user => (
                    <div style={fromList} key={user.id}>
                        Name: {user.name}<br/>
                        Age: {user.age}<br/>
                        City: {user.city}<br/>
                        Gender: {user.gender}<br/>
                        Last Seen: {user.lastseen}<br/>
                        Detail: {user.detail}<br/>
                        Upload of Image: {user.image}<br/>
                        Status: {user.status}<br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MissingList
