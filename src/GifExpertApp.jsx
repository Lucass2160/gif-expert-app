import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory setCategories={setCategories} />

      <ol>
        {categories.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
