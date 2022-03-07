import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


function ImageList({imgList}) {

    const [num, setNum] = useState(0)
    const totalImage = imgList?.length

    useEffect(() => {
        console.log(num)
        const interval = setInterval(() => {
            (num === totalImage-1) ? setNum(0) : setNum((p)=>(p+1));
        }, 3000);
        return () => clearInterval(interval);
      }, [num]);

  return (
    <div>
        
      { imgList && <img  className="app-image" src={ imgList[num].largeImageURL}/>}
        {/* {imgList &&
          imgList?.map((img) => (
            <img
              key={img.id}
              className="app-image"
              src={img.largeImageURL}
              alt="food-image"
            />
          ))} */}

    </div>
  )
}

export default ImageList