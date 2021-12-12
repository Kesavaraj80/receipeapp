import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [recipes,setRecipes] =useState([]);
  // http://localhost:9000/recipes
  

  useEffect(()=>{
    fetch("https://movies-database-kesavan.herokuapp.com/recipes")
  .then(data=>data.json())
  .then(recipe=>setRecipes(recipe)); 
  },[])

  return (
    <div className="container">
      {
        recipes.map((item,index)=>{
          return <RecipeItem image={item.imageurl} name={item.name} key={index}/>
        })
      }
    </div>
  );
}


function RecipeItem({image,name}){
  return(
    <div className="recipe_container">
      <img src={image} alt={name} className="recipe_image"></img>
      <p className="recipe_name">{name}</p>
    </div>
  )
}
export default App;
