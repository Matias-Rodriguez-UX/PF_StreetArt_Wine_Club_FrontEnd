import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AlertPage = () => {
    const [message, setMessage] = useState('');

    // Obtener el mensaje de algún lugar, como un contexto o un almacenamiento global
    setMessage('You must be logged in like Admin to view this page');

    return (
        <div>
            <div className="conatiner-fluid d-flex alig-items-center justify-content-center" style={{ height: '100vh', width: '100vw' }}>
                <div className="d-flex flex-column align-items-center justify-content-center" >
                    <h1 className="mb-5">{message}</h1>
                    <Link to='/home'>
                        <Button type="button" className="btn btn-warning btn-lg">Back to home</Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AlertPage;