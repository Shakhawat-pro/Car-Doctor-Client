import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div>
            <div className="hero my-10">
                <div className="hero-content flex-col md:flex-row">
                    <div className="md:w-1/2 relative ">
                        <img className="w-3/4 rounded-lg shadow-2xl" src={person}  alt="" />
                        <img className="w-1/2 rounded-lg shadow-2xl absolute right-6 top-1/2 border-8 border-white" src={parts}  alt="" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-xl font-bold text-[#FF3811]">About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which dont look even slightly believable. </p>
                        <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomized words which dont look even slightly believable. </p>
                        <button className="btn bg-[#FF3811] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;