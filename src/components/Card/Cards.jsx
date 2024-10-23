import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types'



const Cards = ({ recipes, handleCook }) => {

    const { calories, ingredients, preparing_time, recipe_id, recipe_image, recipe_name, short_description } = recipes


    // console.log(calories, ingredients, preparing_time, recipe_id, recipe_image,recipe_name,short_description);

    return (
        <div>
            <div className="p-4 md:p-6 bg-base-100 shadow-xl rounded-2xl border border-solid border-[#28282833]/[0.2] h-full">
                <figure className='mb-4 md:mb-6'>
                    <img
                        src={recipe_image}
                        alt="Shoes"
                        className='rounded-2xl w-full h-[200px] object-cover' />
                </figure>
                <div>
                    <h2 className="font-semibold text-lg md:text-xl mb-2 md:mb-4">{recipe_name}</h2>
                    <p className="font-normal text-xs md:text-base mb-5 md:mb-[40px]">{short_description}</p>
                    <p className="font-medium text-sm md:text-lg mb-2 md:mb-4">Ingredients: {ingredients.length} </p>
                    <ul className="font-normal text-xs md:text-base mb-5 md:mb-[40px] list-disc list-inside">
                        {ingredients.map((item,index)=> <li key={index}>{item}</li> )}
                    </ul>
                    <div className="flex items-center gap-6 mb-4 md:mb-6">
                        <p className="flex items-center gap-2">
                            <span><MdOutlineWatchLater /></span>
                            <span>{preparing_time} minutes</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <span><AiOutlineFire /></span>
                            <span>{calories} calories</span>
                        </p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-[#0BE58A] rounded-full text-black border-none hover:bg-transparent " onClick={()=> handleCook(recipes)}>Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


Cards.propTypes = {
    recipes: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired,
}


export default Cards;