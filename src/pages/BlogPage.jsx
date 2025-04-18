import React, { useContext, useEffect,useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { BlogDetails } from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';
import { AppContext } from '../context/AppContext';
import { Spinner } from '../components/Spinner';


export const BlogPage = () => {
    const [blog, setBlog] = useState(null);
    const [relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlogs(){
      setLoading(true);
      let url = `${baseUrl}?blogId=${blogId}`;
      try{
          const res = await fetch(url);
          const data = await res.json();
          setBlog(data.blog);
          setRelatedBlogs(data.relatedBlogs);
      }
      catch{
        console.log("error aaya hai Blog id mai");
        setBlog(null);
        setRelatedBlogs([]);
      }
      setLoading(false);
    }  
    
    useEffect(()=>{
      if(blogId){
        fetchRelatedBlogs();
      }
    },[location.pathname])
  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={()=> navigation(-1)}>
          back
        </button>
      </div>
      {
        loading ? (<Spinner/>) : 
        blog ? 
        (<div>
          <BlogDetails post={blog}/>
          <h2>Related Blogs</h2>
          {
            relatedblogs.map((post)=>{
              <div>
                <BlogDetails post={relatedblogs}/>
              </div>
            })
          }
        </div>) : (<p>No Blog found</p>)
      }
    </div>
  )
}
