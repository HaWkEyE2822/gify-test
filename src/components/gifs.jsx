import React, { useEffect, useState } from "react";

const API_KEY = "U5oTb4iIB71RhG9a9kRkQzDMKWrcDOhv";
const API = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

const Gifs = ({ searchTerm = "" }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      getGifs(searchTerm);
    } else {
      setGifs([]);
    }
  }, [searchTerm]);

  const getGifs = async (searchTerm) => {
    const result = await fetch(`${API}&q=${searchTerm}`);
    const gifs = await result.json();
    const { data, pagination } = gifs;
    const trimmedData = data.map((item) => ({
      title: item.title,
      originalImage: item.images["preview_gif"].url,
    }));
    setGifs(trimmedData);
  };

  if (!searchTerm) {
    return <div className="gif-empty-text">Search for Gifs to display!</div>;
  } else {
    return (
      <div className="gif-container">
        {gifs.map((gif) => {
          return (
            <div>
              <img
                alt={gif.title}
                src={gif.originalImage}
                width="120px"
                height="120px"
              />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Gifs;
