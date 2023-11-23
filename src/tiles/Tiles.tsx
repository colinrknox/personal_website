import React, { useEffect, useState } from "react";
import "./Tiles.css";
import { useNavigate } from "react-router-dom";

const author = "Colin Knox";
const api = "https://api.cknox.dev";

type Post = {
  title: string;
  date: Date;
  imgUrl: string;
  contents: string;
};

function Tiles() {
  const [blogPosts, setBlogPosts] = useState<{ [key: string]: Post }>({});

  useEffect(() => {
    fetch("https://api.cknox.dev/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBlogPosts(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const divElement = event.currentTarget as HTMLElement;
    const key = divElement.getAttribute('data-key');
    if (key)
      navigate("/post", { state: blogPosts[key].contents });
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl text-center font-bold text-gray-800 sm:text-4xl">
            Posts
          </h2>
          <p className="mt-3 text-center text-xl text-gray-500 sm:mt-4">
            Discussing tech topics
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(blogPosts).map(([key, post]: [string, Post]) => (
            <div
              key={key}
              data-key={key}
              className="rounded-lg shadow-md overflow-hidden hover:shadow-xl"
              onClick={handleClick}
            >
              <img
                className="h-48 w-full object-cover"
                src={api + "/img/" + post.imgUrl}
                alt={post.title}
              />
              <div className="p-6">
                <p className="text-sm font-medium text-gray-500">
                  {post.date.toString()} · {author}
                </p>
                <p className="text-xl font-semibold text-gray-900 mt-2">
                  {post.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tiles;
