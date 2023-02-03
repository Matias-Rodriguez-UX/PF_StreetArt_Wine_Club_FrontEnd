import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Memberships(){
  return (
    <>
        <div className="container">
            <div className="col align-items-center justify-content-center">
                <h5>MEMBERSHIPS</h5>
                <h1>Affordable pricing plans</h1>
                <p>Explore the world of wine with the StreetArt Wine Club! We've curated a delicious selection that will get shipped to your door monthly.</p>
                <p>Packages are available in 2, 4 and 6 pack 750ml mixed bottles.</p>
            </div>
            <div className='row align-items-center justify-content-center'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Stencil</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>    
        </div>
    </>
  )
}