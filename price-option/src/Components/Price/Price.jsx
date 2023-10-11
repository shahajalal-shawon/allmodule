import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const Price = ({option}) => {
    const {price, name, features} = option;
    return (
        <div  className='bg-blue-500 rounded-md text-white  p-5  flex flex-col'>
              <h2 className='text-center'>
                <span className='text-7xl font-extrabold '>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl my-8 text-center'>{name}</h4>
          <div className='flex-grow pl-6'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
          </div>
          <button className='w-full bg-green-500 mt-12 p-4 rounded-xl  hover:bg-green-900 font-bold duration-1000'>Buy Now</button>
        </div>
    );
};

Price.propTypes ={
    option: PropTypes.object
}
        

export default Price;


