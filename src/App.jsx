import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Title from './components/Recipe-Title/Title'
import Cards from './components/Card/Cards'
import Cook from './components/Cook/Cook'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  // console.log(recipes);
  const [handleCookRecipes, setHandleCookRecipes] = useState([])

  const handleCook = (recipes) => {
    const clickedRecipes = [...handleCookRecipes, recipes]
    setHandleCookRecipes(clickedRecipes);

  }


  const handlePreparing = (handlePreparing) => {
    const newArr = handleCookRecipes.filter((item)=> item.recipe_id !== handlePreparing.recipe_id)
    setHandleCookRecipes(newArr);
    handleCurrentlyCooking(handlePreparing)

  }
 
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleCurrentlyCooking = (handlePreparing) =>{
    const newArr = handleCookRecipes.find((item)=> item.recipe_id === handlePreparing.recipe_id);
    const newRecipe = [...currentlyCooking,newArr];
    setCurrentlyCooking(newRecipe);
    
    
  }
const totalCalories = currentlyCooking.reduce((accumulator,item)=> accumulator + item.calories,0);
const totalTime = currentlyCooking.reduce((accumulator,item)=> accumulator + item.preparing_time,0);
  // console.log(totalCalories);
  // console.log(totalTime);


  return (
    <>
      <div className='w-[90%] mx-auto'>
        {/* navbar  section*/}
        <section>
          <Navbar></Navbar>
        </section>
        {/* Banner section */}
        <section>
          <Banner></Banner>
        </section>
        {/* Recipe title*/}
        <section>
          <Title></Title>
        </section>
        {/* Card section */}
        <section className='grid grid-cols-1 lg:grid-cols-5 pb-16 lg:pb-28 gap-6'>
          <div className='col-span-1 lg:col-span-3'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {
                recipes.map((item) => <Cards key={item.recipe_id} recipes={item} handleCook={handleCook} ></Cards>)
              }
            </div>
          </div>
          <div className='col-span-1 lg:col-span-2'>
            <Cook 
            handleCookRecipes={handleCookRecipes} 
            handlePreparing={handlePreparing} 
            currentlyCooking={currentlyCooking}
            totalCalories={totalCalories}
            totalTime={totalTime}
            ></Cook>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
