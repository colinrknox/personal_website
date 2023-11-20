import React from "react";
import "./Tiles.css";

function Tiles() {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Posts</h2>
      <div className="flex flex-wrap -m-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="border border-gray-200 rounded-lg hover:shadow-lg">
            <img
              className="rounded-t-lg"
              src="path_to_image"
              alt="Blog Post Image"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Blog Post Title</h3>
              <p className="text-gray-600 mt-2">
                Short description of the blog post.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tiles;