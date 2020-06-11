import React from 'react'

function Footer() {

    const foot = {
        color: 'white',
        backgroundColor: '#212529',
        textAlign: 'center',
        paddingTop: '5px',
        paddingBottom: '5px',
        position: 'fixed',
        overflow: 'hidden',
        width: '100%',
        bottom: '0',
        left: '0',
        display: 'flex',
        flexDirection: 'column'
    }

    return (
        <footer style={foot}>
            Copyright &copy;. All Reversed 2020 by Muhammad Faheel
        </footer>
    )
}

export default Footer
