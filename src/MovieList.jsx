import React,{useState} from "react"
import data from './data.json'
import './App.css';

function MovieList() {
  
  const [search,setSearch]=useState("");
  
  return (
    <div classNameApp="App">
      <center>
       <h1><span className="title">IMDB</span></h1>

       {/* <label style={{color:"white",backgroundColor:"black"}}>Search</label>  */}
       
       <input type="text" placeholder="search.."  onChange={event=>{setSearch(event.target.value)}}/>
       
       
       </center>
       <table>
       <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Actors</th>
                                {/* <th>Ratings</th> */}
       </tr>

       
       
       {
           
           data.filter((val)=>{
             if(search=="")
             {
               return val;
             }
             else if(val.Title.toLowerCase().includes(search.toLowerCase()))
             {
                  return val;
             }
           }).
           map((movieDeatails,index)=>{
               return(
                   <>
                      
                        <tr>
                              
                            <td><img src={movieDeatails.Poster} className="poster" height="200px" width="200px"/></td>
                               <td  className="heading">{movieDeatails.Title}</td>
                               
                               
                               <td className="actors">{movieDeatails.Actors}</td>
                               
                               
                               
                               
                               {/* <td>{movieDeatails.Ratings[1]}</td> */}
                            </tr>

  
                     
                   </>
               )
           })
       }
       </table>
     </div>
  );
}

export default MovieList;
