import './Nav_bar.css'
const Nav_bar = () => {
    return (
        <div className="Nav lg:flex justify-between sm:grid md:flex ">
            <h1 className='font-bold text-3xl '>POSTBOX</h1>
            <div className='button text-pink-50 lg:flex gap-5 mt-3   '>
            <button className=' bg-lime-500 pl-4 pr-4 pt-2 pb-2 hover:bg-slate-800 '>Sign up</button>
            <button className=' bg-indigo-500 pl-4 pr-4 pt-2 pb-2 hover:bg-orange-600 '>Log in</button>
            </div>
           
        </div>
    );
};

export default Nav_bar;