

const Marks = ({book}) => {
    const {
        Blog_Title,
        Author_Name,
        Publish_Date,
        Blog_Cover,
        Author_Image,
        Blog_Content,
        Reading_Time,
        Hash_tags,} = book ;
        console.log(book);

        
        
        return (
        <div className=" w-full h-20   flex justify-center items-center mt-2 flex-wrap  rounded-xl
         bg-slate-400 hover:bg-lime-500 hover:text-white"> 
           
            <button className=" font-serif text-center sm:text-sm lg:text-lg text-white ">{Blog_Title}</button>
        </div>
    );
};

export default Marks;