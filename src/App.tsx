import { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import { setFav } from "./features/baseSlice";
import { fetchData } from "./features/dataSlice";
import { useAppDispatch, useAppSelector } from "./store";
import './styles/index.css';

function App() {

  const data = useAppSelector(state => state.dataApi);

  const dispatch = useAppDispatch();

  const currentData = data.data && data.data.results;

  const [bgColor, setBgColor] = useState('tomato');
  function changeBG() {
    setBgColor("lime");
  }
  return (
    <div className="App">
      <div className="header" onClick={() => dispatch(fetchData())}>
        <span> Fetch Data </span>
      </div>

      {data.loading && "loading..."}
      {data.error && data.error}
      {currentData &&
        <div className="container">
          {currentData.map((item) => {
            return (
              <div onClick={() => dispatch(setFav(item))}>
                <CharacterCard key={item.id} item={item} />
              </div>
            )
          })}
        </div>

      }
    </div>
  );
}

export default App;

// <div>
        //   Name:{currentData?.name}
        //   <br />
        //   Status:{currentData?.status}
        //   <br />
        //   Image: <img src={currentData.image} />

        // </div>