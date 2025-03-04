import Marks from "../Marks/Marks";


const Bookmarks = ({count, reading}) => {

    
    
    return (
        <div className="mb-5">
        <div className="btn">
        <button className="w-full bg-blue-800 pt-5 pb-5 rounded-full text-white font-serif">Reading Time: {reading}</button>
        </div>
           <div className="contex w-full mt-5 bg-slate-100 pt-5 pb-5 rounded-2xl">
           <h1 className=" text-lg font-serif">Marked Books :{count.length}</h1>
    {
        count.map((book ,idx) => <Marks key={idx} book={book} ></Marks> )
    }
           </div> 
        </div>
    );
};

export default Bookmarks;