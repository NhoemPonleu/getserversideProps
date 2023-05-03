import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BASE_PATH } from '@/lib';
import { useRouter } from 'next/router';

export default function CardComponent({title,description,imagePath,id}) {
  const router=useRouter();
  const handleClick=()=>{
    router.push(`/movie/${id}`);

  };
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagePath?BASE_PATH+ imagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1022px-Placeholder_view_vector.svg.png"} />
    <Card.Body>
      <Card.Title>{title? title: "unknown"}</Card.Title>
      
      <Button onClick={handleClick} variant="primary">Go View Detial</Button>
    </Card.Body>
  </Card>
  )
}

