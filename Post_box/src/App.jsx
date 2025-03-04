import { useState } from "react";
import "./App.css";
import Nav_bar from "./Components/NavBar/Nav_bar";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  const [count, setCount] = useState([]);

  const handleBook = (blog,) =>{
    const newBookmark =[...count,blog]; 
    setCount(newBookmark); 
    
  }
  const [reading , setReading] = useState(0) ; 

  const handleClick =(id_no,time) =>{
    const timeCt = reading + time
    setReading(timeCt); 

    //remove the blog from bookmarks

    const remainingSaved = count.filter(bookmark => bookmark.id_no!==id_no);
    setCount(remainingSaved);
    
    
    
  }

  return (
    <>
      <div className="device">
        {/* Header Sections */}
        <div className="nav_bar">
          <Nav_bar></Nav_bar>
        </div>
        {/* body */}
        <div className="body lg:flex justify-between mt-10">
          <div className="part-01 w-full h-max">
            <Blogs handleBook={handleBook} handleClick={handleClick}  ></Blogs>
          </div>
          <div className="part-02 lg:w-5/12 h-auto sm:w-full ">
            <Bookmarks key={count.id} count={count} reading={reading} ></Bookmarks>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
