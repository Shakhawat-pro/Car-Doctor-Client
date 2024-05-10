import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const axiosSecure = useAxiosSecure()

    const url = `/bookings?email=${user?.email}`;
    useEffect(() => {
        // fetch(url, {credentials: "include"})
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
        axiosSecure.get(url)
        .then(res => setBookings(res.data))
    }, [url, axiosSecure]);
    

    const handleDelete = _id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        console.log(data);
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        })
                        const remaining = bookings.filter(booking => booking._id !== _id)
                        setBookings(remaining)
                    }

                });
            }
          });
    }

        
    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status ='confirm'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }


    return (
        <div className="container mx-auto">
            <h2>Total Bookings: {bookings.length}</h2>

            <div className="overflow-x-auto mt-10 ">
                <table className="table">
                    {/* head */}
                    <thead >
                        <tr >
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            bookings.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;