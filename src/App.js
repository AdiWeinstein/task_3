import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import ImageList from "./Component/ImageList";

function App() {
  // const API_KEY = '6716575-a030114ddf9022aabc8cd1511';
  // const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&pretty=true`

  // const URL = `https://pixabay.com/api/?key=6716575-a030114ddf9022aabc8cd1511&q=${value}&image_type=photo&pretty=true`;

  const [imgList, setImgList] = useState([]);
  const [num, setNum] = useState(0)
  const categories = ["Food", "Animals", "Flowers"];

  // const getValue = (e) => {
  //   const value = e.target.value
  //   setValue(value)

  // }
  const btnClick = (click) => {
    if (click === "forward"){
      setNum((p)=>(p+1))
    }else if(click === "revers"){
      setNum((p)=>(p-1))

    }
  }
 
  const getImages = (value) => {
    // const value = setValue(e.target.value)
    console.log("value", value);
    fetch(
      `https://pixabay.com/api/?key=6716575-a030114ddf9022aabc8cd1511&q=${value}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(" data", data.hits);
        setImgList(data.hits);
      });
  };

  useEffect(() => {
    getImages("food");
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Fetch Api Practice</h2>
      </header>

      <div>
        {/* <input
          onClick={e => getImages(e.target.value)}
          className="app-btn"
          value="Food"
          type="submit"
        />
        <input
          onClick={e => getImages(e.target.value)}
          className="app-btn"
          value="Animals"
          type="submit"
        />
        <input
          onClick={e => getImages(e.target.value)}
          className="app-btn"
          value="Flowers"
          type="submit"
        /> */}
        {categories.map((category) => {
          return(

          <button key={category} onClick={(e) => getImages(category)} className="app-btn">
            {category}
          </button>
          )
        })}
      </div>

      <div >
        {imgList.length > 0 &&
        <div className="image-galery">
        <button onClick={() => {btnClick('forward')}} className="btn-clicks"> ??? </button>
        <ImageList imgList={imgList} num={num} setNum={setNum} />
        <button onClick={() => {btnClick('revers')}} className="btn-clicks"> ??? </button>
        </div>}
      </div>

      <footer>by Adi Weinstein</footer>
    </div>
  );
}

export default App;
