import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBarComponent from '@/component/NavBarComponent'
import CardComponent from '@/component/CardComponent'
import { API_KEY } from "@/lib";
import movie from './movie';


export default function Home({movies}) {
  const data=movies?.results||[];
  return (
   
     <>
     <div className="container">
      <div className="d-flex justify-content-evenly flex-wrap">
        {data.length>0 && data.map((movie)=><CardComponent key=
        {movie.id} 
        imagePath={movie.backdrop_path} 
        title={movie.title} 
        id={movie.id}/>)}
      </div>
      
      </div>
    
     </>
    
     
  );
}
export async function getServerSideProps(context){
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;
  const res=await fetch(url);
  if(!res){
    console.log("error")
  }
  const movies=await res.json();
  if(!movies){
    props:{
      movies: []
    }
  }
  return {
    props:{
      movies
    }
  }

}
