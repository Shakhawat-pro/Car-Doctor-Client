import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleSingUp = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('SignUp', name, email, password);

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name
                })
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="w-11/12 mx-auto">
            <div className="hero min-h-screen ">
                <div className="hero-content w-full flex-col lg:flex-row ">
                    <div className="lg:w-1/2  ">
                        <img className="border-[4px] border-black border-dashed" src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full lg:w-1/2 border-2 md:p-16">
                        <form onSubmit={handleSingUp} className="card-body">
                            <h2 className="text-center text-4xl font-bold mb-12">Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-lg font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="text-lg font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <h1 className="text-center font-medium">Or Sign In with</h1>
                        <div>

                        </div>
                        <h1 className="text-center mb-5">Have an account? <Link to='/login' className="text-[#FF3811] font-semibold hover:underline">Login</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;