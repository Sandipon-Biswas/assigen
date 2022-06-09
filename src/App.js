
import { useState , useEffect } from "react";
import './App.css';
import Shearch from './Components/Shearch';
import  Card  from './Components/Card';
const Api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = Api + query
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }
  return (
    <div className="App">
      <h1>Our App</h1>
      <Shearch 
      isLoading={isLoading}
      query={query}
      setQuery={setQuery}
      handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <Card
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div>
      
    </div>
  );
}

export default App;
