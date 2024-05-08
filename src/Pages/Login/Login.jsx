import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const handleLogin =e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log('Login', email, password);
        
        signInUser(email, password)
        .then(result =>{
            console.log("Login",result.user);
        })
        .catch(error => {
            console.log(error);
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
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className="text-center text-4xl font-bold mb-12">Login</h2>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <h1 className="text-center font-medium">Or Sign In with</h1>
                        <div>
                            
                        </div>
                        <h1 className="text-center mb-5">New to Car Doctor? <Link to='/signUp' className="text-[#FF3811] font-semibold hover:underline">Sign Up</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;