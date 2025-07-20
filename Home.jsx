import {useEffect,useState} from "react";
import Navbar from "./components/NavBar";
import Card from "./components/Card";
import axios from "axios";
import NavBar from "./components/NavBar";


function Home(){
  const[Blogss,setBlogs]=useState([]);
  async function fetchBlogs(){
    const response =await axios.get("https://687af378abb83744b7ee487b.mockapi.io/Blogss")
    console.log(response)
    if(response.status==200){
      setBlogs(response.data)

    }
    else{
      alert("Error aayoo!!!")
    }
  }
  useEffect(()=>{
    fetchBlogs();
  },[])

  console.log(Blogss,"This is blogs")
  

  return (
    <>
    <NavBar/>
    <div className="flex  justify-between flex-wrap p-5 gap-4">
        {Blogss.map(function(Blog){
          return(
            <Card key={Blog.id} Blog={Blog} />
          )
        })}
    </div>
</>

  );
}

export default Home;