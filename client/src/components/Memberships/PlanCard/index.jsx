import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function PlanCard ({ price }) {
  return (
    <>
        <Card style={{ width: '22rem' }}>
            <Card.Body>
                <Card.Title className='mt-3 mb-3'>Stencil</Card.Title>
                <div className='d-flex h-auto gap-1 mb-3'>
                    <Card.Text className='d-flex fs-1 m-0 align-items-end'>{price}</Card.Text>
                    <Card.Text className='d-flex m-0 pt-3 align-items-center' >/month</Card.Text>
                </div>
                <Card.Text className='d-flex fs-6 m-0 mb-4 text-center'>2 Premium Bottles of mixed wines</Card.Text>
                <hr></hr>
                <div className='d-flex col gap-3 mb-2 align-items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                    <Card.Text className='d-flex fs-6 m-0'>Shipments 50% OFF</Card.Text>
                </div>
                <div className='d-flex col mb-2 gap-3 align-items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                    <Card.Text className='d-flex fs-6 m-0'>Up to 800 options </Card.Text>
                </div>
                <div className='d-flex col gap-3 mb-2 align-items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                    <Card.Text className='d-flex fs-6 m-0'>White, rosé, sparkling and red</Card.Text>
                </div>
                <div className='d-flex col gap-3 mb-2 align-items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'26px'} height={'26px'} alt='checked-i' />
                    <Card.Text className='d-flex fs-6 m-0'>10% OFF in our shop</Card.Text>
                </div>
                <div className='d-flex col gap-3 mb-5 align-items-center'>
                    <img src='https://cdn-icons-png.flaticon.com/512/8335/8335942.png' width={'28px'} height={'28px'} alt='checked-i' />
                    <Card.Text className='d-flex fs-6 m-0'>Technical sheets</Card.Text>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <Button variant="warning" size='md'>Get Started</Button>
                </div>        
            </Card.Body>
        </Card>
    </>
  )
}