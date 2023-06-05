import "./App.css";
import clothing from "./clothing";
import StyleButtons from "./components/StyleButtons";
import { useReducer, useState } from "react";
import styleReducer from "./reducers/styleReducer";

function App() {
  const [style, dispatch] = useReducer(styleReducer, clothing);
  const [dressCode, setDressCode] = useState("formal");

  const casualSet = style.filter((item) => item.dressCode === dressCode);
  const casualTop = casualSet.filter((item) => item.type === "top");
  const casualBottom = casualSet.filter((item) => item.type === "bottom");
  const casualShoes = casualSet.filter((item) => item.type === "shoes");

  const randomTop = Math.floor(casualTop.length * Math.random());
  const randomBottom = Math.floor(casualBottom.length * Math.random());
  const randomShoes = Math.floor(casualShoes.length * Math.random());

  return (
    <div className="App">
      <h1>Outfit Planner</h1>
      <h5>FIND WHAT TO WEAR</h5>
      <h2>Fashion Styles/Dress Code</h2>
      <StyleButtons setDressCode={setDressCode} />
      <div className="top">
        <h2>Top</h2>
        <div className="clothing">
          <h3>{casualTop[randomTop].description}</h3>
          <img
            src={casualTop[randomTop].imageUrl}
            alt=""
            className="style-img"
          />
        </div>
      </div>
      <div className="bottom">
        <h2>Bottom</h2>
        <div className="clothing">
          <h3>{casualBottom[randomBottom].description}</h3>
          <img
            src={casualBottom[randomBottom].imageUrl}
            alt=""
            className="style-img"
          />
        </div>
      </div>
      <div className="shoes">
        <h2>Shoes</h2>
        <div className="clothing">
          <h3>{casualShoes[randomShoes].description}</h3>
          <img
            src={casualShoes[randomShoes].imageUrl}
            alt=""
            className="style-img"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
