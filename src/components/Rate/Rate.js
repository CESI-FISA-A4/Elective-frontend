import star from '../../assets/star.svg';

function Rate ({rate}) {
    return (
        <div className='grid grid-cols-3 mr-10'>
            <img src={star} alt="Star" className='w-5 place-self-center'></img>
            <p className=" text-left"> {rate} </p> 
        </div>
    );
}

export default Rate;