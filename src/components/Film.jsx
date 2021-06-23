import React from 'react'
import { useSelector } from 'react-redux'
import {Card,Button} from 'react-bootstrap'
function Film() {
    const films = useSelector(state => state.movies)
    console.log('film',films)
    return (
        <div className="d-flex w-50" >
            {
                films.map((el,index) => (
                    <div className="d-flex" key={index}>
                         <Card style={{ width: '10rem' }} >
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
    {el.year}
    </Card.Text>
    <Button variant="primary">watch</Button>
  </Card.Body>
</Card>
                   </div>
                ))
            }
        </div>
    )
}

export default Film
