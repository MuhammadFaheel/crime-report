import React from 'react'
import '../../../App.css'

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

    return (
        <div>
            <h2 className='details'>Missing Person List:</h2>
            <div className='bottoms'>
                {users.map(user => (
                    <div className='lists' key={user.id}>
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
