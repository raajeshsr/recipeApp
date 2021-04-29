import React,{useEffect,useState} from 'react';
import Recipe from './Recipe'
import './App.css'

const App = ()=>{




const [recipes,setRecipes] = useState([]);
const [search,setSearch]= useState("");
const [query,setQuery] = useState("chicken");

const APP_ID ="1370c76d";
const APP_KEY = "f514df55d695e196b6e38d19074709a3";
const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


useEffect(async()=>{
  getRecipes();
},[query])

  const getRecipes = async () =>{

    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits);
  }

  const updateQuery = event =>{
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className="App"> 
      <form className="search-form" onSubmit={updateQuery}>
        <input type="text" className="search-bar" value={search} onChange={event=> setSearch(event.target.value)} />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
            <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} imageurl={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
        ))}
      </div>
    
    </div>
  );


}
export default App;
