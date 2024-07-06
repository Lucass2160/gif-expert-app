import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGift";

export const useFetchGifts = (category) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  const getImages = async () => {
    const response = await getGift(category);
    setResponse(response);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: response,
    isLoading,
  };
};
