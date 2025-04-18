import React from 'react';
import Header from '../components/Header';
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

export const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="w-11/12 max-w-[1110px] mx-auto mt-20">
        <button
          onClick={() => navigation(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800 mb-0">
          Blogs on <span className="text-blue-600">#{category.replaceAll("_", " ")}</span>
        </h2>

        <div className="mt-6">
          <Blogs padding = "p-0"/>
        </div>

        <div className="mt-8">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
