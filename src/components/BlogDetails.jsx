import React from 'react'
import { NavLink } from 'react-router-dom'
export const BlogDetails = ({post}) => {
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        By 
        <span>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","_")}`}>
            <span>{post.category}</span>
        </NavLink>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
         <div>
            {
                post.tags.map((tag,index)=>{
                    <NavLink key={index} to={`/tag/${tag.replaceAll(" ","_")}`}>
                        <span>{`#${tag}`}</span>
                    </NavLink>
                })
            }
         </div>
    </div>
  )
}
