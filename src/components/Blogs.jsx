import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { BlogDetails } from "./BlogDetails";
import { Spinner } from "./Spinner";

export default function Blogs({padding}) {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className={`flex flex-col gap-y-10 my-4 ${padding}`}>
      {loading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner/>
        </div>
      )
       : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
            <BlogDetails key={post.id} post={post} customMargin = "mt-[10px]" />
        ))
      )}
    </div>
  );
}
