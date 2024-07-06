export const getGift = async ({ category }) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pRiJu2wv7Ygm7lT9jUcCnqIMpvK2IWxe&q=${category}&limit=10`;

  const response = await fetch(url);
  const { data = [] } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gift;
};
