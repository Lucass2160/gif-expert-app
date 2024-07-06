import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGift";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  const [response, setResponse] = useState([]);

  const getImages = async () => {
    const response = await getGift(category);

    setResponse(response);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {response.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
