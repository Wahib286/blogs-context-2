import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Routes,Route, useSearchParams } from "react-router-dom";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    const page = useSearchParams.get("page")?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("_"," ");
      fetchBlogPosts(Number(page), tag);
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("_"," ");
      fetchBlogPosts(Number(page), category);
    }

    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  );
}
