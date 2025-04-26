import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { BlogDetails } from '../components/BlogDetails';
import { AppContext } from '../context/AppContext';
import { Spinner } from '../components/Spinner';

export const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    } catch {
      console.log("error aaya hai Blog id mai");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [blogId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="w-11/12 max-w-[1110px] mx-auto mt-6">
        <button
          onClick={() => navigation(-1)}
          className="mt-14 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>

        {loading ? (
          <div className="h-100vh w-100vw flex justify-center items-center">
            <Spinner />
          </div>
        ) : blog ? (
          <div className="mt-8">
            <BlogDetails post={blog} />

            <h2 className="mt-10 ml-[3.4rem] text-2xl font-bold text-gray-800 uppercase">
              Related Blogs
            </h2>

            <div className="mt-4 space-y-6">
              {relatedblogs.map((post, index) => (
                <BlogDetails key={index} post={post} customMarginTop="mt-0" />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-red-600 font-medium mt-10">No Blog found</p>
        )}
      </div>
    </div>
  );
};
