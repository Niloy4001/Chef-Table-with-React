import PropTypes from 'prop-types'
import Cook2 from './Cook2';
import Currently from './Currently';


const Cook = ({ handleCookRecipes, handlePreparing, currentlyCooking, totalTime, totalCalories }) => {
    // console.log(currentlyCooking);

    return (
        <div>
            <div>
                <h1 className='text-center font-semibold text-lg md:text-2xl text-[#282828] mb-5 md:mb-9'>Want to cook: {handleCookRecipes.length}</h1>
                <div className='mb-4'>
                    <p className='grid grid-cols-4 items-center justify-center'>
                        <span>Name</span>
                        <span>Time</span>
                        <span>Calories</span>
                        <span></span>
                    </p>
                </div>
                {
                    handleCookRecipes.map((item, index) => <Cook2 key={item.recipe_id} handleCookRecipes={item} index={index + 1} handlePreparing={handlePreparing}></Cook2>)
                }
            </div>
            <div>
                <h1 className='text-center font-semibold text-lg md:text-2xl text-[#282828] mb-5 md:mb-9'>Currently cooking: {currentlyCooking.length}</h1>
                <div className='mb-4'>
                    <p className='grid grid-cols-3 items-center justify-center'>
                        <span>Name</span>
                        <span>Time</span>
                        <span>Calories</span>
                    </p>
                </div>
                {
                    currentlyCooking.map((item, index) => <Currently currentlyCooking={item} key={currentlyCooking.recipe_id} index={index + 1}></Currently>)
                }
                <p className='grid grid-cols-3 items-center justify-center'>
                    <span></span>
                    <span>Total Time =
                        {totalTime} minutes</span>
                    <span>Total Calories =
                        {totalCalories} calories</span>
                </p>
            </div>

        </div>
    );
};


Cook.propTypes = {
    handleCookRecipes: PropTypes.array.isRequired,
    currentlyCooking: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    totalCalories: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
}

export default Cook;