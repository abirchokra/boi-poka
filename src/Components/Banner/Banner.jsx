import { NavLink } from 'react-router-dom';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 h-[500px] rounded-lg ">
            <div className="hero-content flex-col lg:flex-row-reverse px-6">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className='space-y-6'>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                   <NavLink to={'listedbooks'}> <button className="btn bg-green-700 text-white font-bold">View The List</button></NavLink>
                </div>
            </div>
        </div>
    );
};
export default Banner;