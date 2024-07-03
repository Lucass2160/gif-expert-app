import { getGift } from "../helpers/getGift";

export const GifGrid = ({ category }) => {
  getGift(category);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
};
