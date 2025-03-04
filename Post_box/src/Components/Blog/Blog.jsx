import PropTypes from "prop-types";
import "./Blog.css";
import Bookmarks from "../Bookmarks/Bookmarks";
const Blog = ({ blog,handleBook ,handleClick}) => {
  const {
    id_no,
    Blog_Title,
    Author_Name,
    Publish_Date,
    Blog_Cover,
    Author_Image,
    Blog_Content,
    Reading_Time,
    Hash_tags,
  } = blog;
  const time = Reading_Time ;
  return (
    <div>
      <div className="Title">
        <h1 className=" font-serif text-black mt-4 mb-4 lg:text-4xl text-left flex text-wrap md:text-3xl ">
          {Blog_Title}
        </h1>
      </div>
      <div className="cover lg:flex flex-wrap">
        <img src={Blog_Cover}></img>
      </div>
      <hr className=" lg:w-11/12 sm:w-auto flex flex-wrap  bg-black mt-4"></hr>
      <div className="info mt-4 flex items-center justify-between flex-wrap mb-3">
        <div className="left flex flex-wrap gap-3 items-center ">
          <div className="auth">
            <img
              className="w-12 h-12 rounded-full flex flex-wrap"
              src={Author_Image}
            ></img>
          </div>
          <div className="auth2 text-left">
            <div className="auth_name">
              <h1 className=" font-serif font-semibold">{Author_Name}</h1>
            </div>
            <div className="date">
              <h1 className=" text-blue-700">{Publish_Date}</h1>
            </div>
          </div>
        </div>
        <div className="right flex gap-2 lg:mr-20">
          <div className="reading_time">
            <h1 className=" font-serif text-md">{Reading_Time} min</h1>
          </div>
          <div className="book_mark">
            <button onClick={()=>handleBook(blog,id_no)}><i
              className="fa fa-bookmark text-xl text-red-600"
              aria-hidden="true"
            ></i></button>
          </div>
        </div>
      </div>
      <hr className=" lg:w-11/12 sm:w-auto flex flex-wrap  bg-black mb-4"></hr>
      <div className="content  lg:w-11/12  lg:h-auto text-nowrap  lg:text-wrap ">
        <p className=" flex flex-warp text-justify line-clamp-2 sm:line-clamp-2  ">
          {Blog_Content}
        </p>
      </div>
      <div>
        <p className="flex text-justify lg:gap-3
         font-semibold text-blue-500  ">
          {
            Hash_tags.map( (hash,idx)=> <span key={idx}><a href="#">{hash}</a></span>)
          }
        </p>
        <button className=" text-black-700 font-bold flex text-sm mb-5 hover:text-red-900 ">
          See more
        </button>
        
      </div>
      <button onClick={()=>handleClick(id_no,time)} className=" bg-orange-500 p-3 rounded-full text-sm font-serif font-medium text-white flex mb-5" 
     >Mark read</button>
    </div>
  );
};
Blog.prototype = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
