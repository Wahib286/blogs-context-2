import React from 'react';
import { NavLink } from 'react-router-dom';

export const BlogDetails = ({ post }) => {
  return (
    <div className='mt-[60px] w-11/12 max-w-[1110px] mx-auto p-4 bg-white rounded-2xl shadow-lg'>
      <NavLink to={`/blog/${post.id}`}>
        <h1 className='text-3xl font-bold text-blue-700 hover:underline'>
          {post.title}
        </h1>
      </NavLink>

      <div className='mt-2 text-sm text-gray-600'>
        By <span className='font-medium text-black'>{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "_")}`}
          className='text-blue-600 hover:underline'
        >
          <span>{post.category}</span>
        </NavLink>
      </div>

      <p className='text-sm text-gray-500 mt-1'>Posted on {post.date}</p>

      <div className='mt-4 text-gray-800 text-base leading-relaxed'>
        {post.content}
      </div>

      <div className='mt-6 flex flex-wrap gap-2'>
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tag/${tag.replaceAll(" ", "_")}`}
            className='text-blue-500 hover:underline bg-gray-100 px-3 py-1 rounded-full text-sm'
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
