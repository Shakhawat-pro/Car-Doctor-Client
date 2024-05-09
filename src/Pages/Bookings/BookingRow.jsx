import PropTypes from 'prop-types';



const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { customerName, image, price, date, serviceName, _id,  status} = booking


    return (
        <tr>
            <th>

                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle text-[#FF3811] hover:bg-[#FF3811] hover:text-white bg-transparent border-[#FF3811]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {image  && <img src={image} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{customerName}</div>
                    </div>
                </div>
            </td>
            <td><h1>{date}</h1></td>
            <td>{price}</td>
            <th>
                {status === 'confirm' ? <button className='btn btn-outline btn-info w-[100px] '>Confirmed</button> :  
                <button onClick={() => handleConfirm (_id)} className="btn w-[100px] bg-[#FF3811] text-white">Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;

BookingRow.propTypes ={
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleConfirm: PropTypes.func
}