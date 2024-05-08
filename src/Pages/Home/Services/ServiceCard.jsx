import PropTypes from 'prop-types';
import { BiDollar } from "react-icons/bi";

const ServiceCard = ({ service }) => {
    const { title, price, img } = service
    return (
            <div className="card w-[340px] bg-base-100 border-2 shadow-xl p-6 mx-auto">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl h-52 w-full object-cover" />
                </figure>
                <div className="mt-5 spy">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <div className='flex justify-between i text-[#FF3811]'>
                        <p className='text-xl font-semibold flex gap-1 items-center'>Price :<span className='flex items-center'><BiDollar />{price}</span></p>
                        <button className="btn btn-circle hover:bg-transparent bg-transparent hover:border-[#FF3811] border-2 border-transparent  text-[#FF3811]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}