import React from "react";

export default function InputSection(prop) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });


  const [allMemeImages, setAllMemeImages] = React.useState();

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(nextRes => setAllMemeImages(nextRes.data.memes))
  }, [])


  const [inputData, setInputData] = React.useState({ leftText: "yo!", rightText: "Whatsup!" })

  function handleChange(event) {
    setInputData((prevData) => {
      const { name, value } = event.target
      return { ...prevData, [name]: value }
    })
  }

  function ButtonClick() {
    const arr = allMemeImages;
    const randomNumber = Math.floor(Math.random() * arr.length);
    const url = arr[randomNumber].url;
    setMeme(function (prev) {
      return { ...prev, randomImage: url };
    });
  }



  return (
    <div className="main">
      <div className="input-container">
        <div className="input-boxes">
          <input name="leftText" onChange={handleChange} value={inputData.leftText} placeholder="Top Text" className="inputLeft" type="text" />
          <input name="rightText" onChange={handleChange} value={inputData.rightText} placeholder="Bottom Text" className="inputRight" type="text" />
        </div>
        <button onClick={ButtonClick}>Get a new meme image 🖼</button>
      </div>
      <div className="image-container">
        <img src={meme.randomImage} alt="" />
        <p className="leftInputText">{inputData.leftText}</p>
        <p className="rightInputText">{inputData.rightText}</p>
      </div>
    </div>
  );
}
