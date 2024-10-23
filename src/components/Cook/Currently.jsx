
import PropTypes from 'prop-types'
const Currently = ({currentlyCooking,index}) => {
    const { preparing_time, recipe_name, calories } = currentlyCooking
    // console.log(currentlyCooking);
    
    return (
        <div className='mb-4'>
            <p className='grid grid-cols-3 items-center justify-start gap-4'>
                <span>{index}. {recipe_name}</span>
                <span>{preparing_time} minutes</span>
                <span>{calories} calories</span>
                
            </p>
        </div>
    );
};


Currently.propTypes = {
    currentlyCooking: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,

}

export default Currently;