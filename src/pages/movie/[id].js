import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY, BASE_PATH } from "@/lib";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRouter } from "next/router";
import Placeholder from 'react-bootstrap/Placeholder';


export default function Movie() {
  const router = useRouter();
  const [id, setId] = useState(router.query.id);
  const [movie, setMovie] = useState({});
  const[loading,setLoading]=useState(false);
  useEffect(() => {
    setLoading(true)
    fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) =>{
        setMovie(data)
        setLoading(false);
      }).catch((err)=>{console.log(err)
      setLoading(false);
    });
  }, []);
  if(loading){
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>
  }
  console.log(movie)
  return (
    <div>
      <Card style={{ width: "80%",height:"50px" }}>
        <Card.Img variant="top" src={movie?.poster_path ? BASE_PATH + movie?.poster_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"} />
        <Card.Body>
          <Card.Title>{movie.title?movie.title:"Unknown"}</Card.Title>
          <Card.Text>
            {movie.overview?movie.overview:"Unknown"}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
