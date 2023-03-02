import React, { useState } from 'react';
import { Form, FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAge } from '../../actions/userActions';


export default function AgeForm() {
    const dispatch = useDispatch()
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [activeButton, setActiveButton] = useState(true)



    const handleSubmit = (event) => {
        event.preventDefault();
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        if (hoy.getMonth() < fechaNacimientoDate.getMonth() || (hoy.getMonth() === fechaNacimientoDate.getMonth() && hoy.getDate() < fechaNacimientoDate.getDate())) {
            edad--;
        }
        if (edad >= 18) {
            localStorage.setItem('age', fechaNacimiento)
            window.location.href = '/home'
        } else {
            window.location.href = 'https://www.who.int/es/news-room/fact-sheets/detail/alcohol'
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center" >
            <FormGroup className='d-flex bg-light p-4 rounded'>
                <FormLabel><strong>Select your birthdate</strong></FormLabel>
                <FormControl style={{ width: '60%' }} type="date" value={fechaNacimiento} onChange={(event) => setFechaNacimiento(event.target.value)} />
            </FormGroup>
            <Button type="submit" className='btn btn-warning btn-lg mt-3'>Verify age</Button>
        </Form>
    );
}


