
import PropTypes from 'prop-types';

const Cook2 = ({ handleCookRecipes, index, handlePreparing }) => {
    const { preparing_time, recipe_name, calories } = handleCookRecipes

    // console.log(handleCookRecipes);

    return (
        <div className='mb-4'>
            <p className='grid grid-cols-4 items-center justify-start gap-4'>
                <span>{index}. {recipe_name}</span>
                <span>{preparing_time} minutes</span>
                <span>{calories} calories</span>
                <span>
                    <button className='px-4 py-2 text-black  bg-[#0BE58A] rounded-full' onClick={() => handlePreparing(handleCookRecipes)}>Preparing</button>
                </span>
            </p>
        </div>
    );
};

Cook2.propTypes = {
    handleCookRecipes: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handlePreparing: PropTypes.func.isRequired,
    // CurrentlyCooking: PropTypes.array.isRequired,
};

export default Cook2;



