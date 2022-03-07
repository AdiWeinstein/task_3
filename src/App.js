import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import ImageList from "./Component/ImageList";

function App() {
  // const API_KEY = '6716575-a030114ddf9022aabc8cd1511';
  // const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo&pretty=true`

  // const URL = `https://pixabay.com/api/?key=6716575-a030114ddf9022aabc8cd1511&q=${value}&image_type=photo&pretty=true`;

  const [value, setValue] = useState('')
  const [imgList, setImgList] = useState([]);

  // const getValue = (e) => {
  //   const value = e.target.value
  //   setValue(value)

  // }

  const getImages = (value) => {
    // const value = setValue(e.target.value)
    fetch(`https://pixabay.com/api/?key=6716575-a030114ddf9022aabc8cd1511&q=${value}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(" data", data.hits);
        setImgList(data.hits);
      });
  };


  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <header>
        <h2>Fetch Api Practice</h2>
      </header>

      <div>
        <input
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
        />
      </div>

      <div className="image-container">
        {imgList.length>0 && <ImageList imgList={imgList}/>}
      </div>

      <footer>by Adi Weinstein</footer>
    </div>
  );
}

export default App;
