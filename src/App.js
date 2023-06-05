import "./App.css";
import clothing from "./clothing";
import StyleButtons from "./components/StyleButtons";
import { useReducer, useState } from "react";
import styleReducer from "./reducers/styleReducer";

function App() {
  const [style, dispatch] = useReducer(styleReducer, clothing);
  const [dressCode, setDressCode] = useState("formal");

  const dressCodeSet = style.filter((item) => item.dressCode === dressCode);
  const dressCodeTop = dressCodeSet.filter((item) => item.type === "top");
  const dressCodeBottom = dressCodeSet.filter((item) => item.type === "bottom");
  const dressCodeShoes = dressCodeSet.filter((item) => item.type === "shoes");

  const randomTop = Math.floor(dressCodeTop.length * Math.random());
  const randomBottom = Math.floor(dressCodeBottom.length * Math.random());
  const randomShoes = Math.floor(dressCodeShoes.length * Math.random());

  return (
    <div className="App">
      <h1>Outfit Planner</h1>
      <h5>FIND WHAT TO WEAR</h5>
      <h2>Fashion Styles/Dress Code</h2>
      <StyleButtons setDressCode={setDressCode} />
      <div className="top">
        <h2>Top</h2>
        <div className="clothing">
          <h3>{dressCodeTop[randomTop].description}</h3>
          <img
            src={dressCodeTop[randomTop].imageUrl}
            alt=""
            className="style-img"
          />
        </div>
      </div>
      <div className="bottom">
        <h2>Bottom</h2>
        <div className="clothing">
          <h3>{dressCodeBottom[randomBottom].description}</h3>
          <img
            src={dressCodeBottom[randomBottom].imageUrl}
            alt=""
            className="style-img"
          />
        </div>
      </div>
      <div className="shoes">
        <h2>Shoes</h2>
        <div className="clothing">
          <h3>{dressCodeShoes[randomShoes].description}</h3>
          <img
            src={dressCodeShoes[randomShoes].imageUrl}
            alt=""
            className="style-img"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
