import { useEffect } from "react";
import { getGift } from "../helpers/getGift";

export const GifGrid = ({ category }) => {
  useEffect(() => {
    getGift(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
