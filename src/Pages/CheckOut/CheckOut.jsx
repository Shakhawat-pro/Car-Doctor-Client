import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const service = useLoaderData()
    const { title, img, price, _id, } = service

    const handleBookService = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const price = form.price.value
        const date = form.date.value
        const bookings = {
            customerName: name,
            image: img,
            email: email,
            service_id: _id,
            serviceName: title,
            date: date,
            price: price,
            phone: phone,
        }
        console.log(bookings);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div className='container mx-auto mt-10'>
            <h1 className='text-center text-3xl font-bold'>Book Service: <span className='text-[#FF3811]'>{title}</span></h1>
            <form onSubmit={handleBookService} className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text"  defaultValue={'$' + price} readOnly name='price' placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control ">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="number" name='phone' placeholder="Number" className="input input-bordered" required />
                </div>
                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" defaultValue={user?.email}  className="input input-bordered" required />
                </div>

                <div className="form-control mt-6 col-span-2">
                    <input className="btn bg-[#FF3811] text-white" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;