import useFetchData from "../hooks/useFetchData";
import BlogList from "../components/BlogList";

function Blogs() {
    const{data: blogs, isPending, error} = useFetchData("Blog");
    // console.log(JSON.stringify(blogs));

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" ></BlogList>}
        </div>
     );
}

export default Blogs;