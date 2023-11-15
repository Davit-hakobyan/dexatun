import React, { useEffect, useState } from "react";

const DexiPatQanak = (props) => {
  const [qaunt, setQaunt] = useState(1);
  let id = props.value;
  let zambjuxLocal = JSON.parse(localStorage.getItem("zambjuxLocal"));

  useEffect(() => {
    zambjuxLocal.forEach((element) => {
      if (element.id === id) {
        element.qanak = qaunt;
      }
    },[qaunt]);
    localStorage.setItem("zambjuxLocal", JSON.stringify(zambjuxLocal));
    console.log(zambjuxLocal)
  }, [qaunt]);

  function qanakAvelacnel() {
    let k = qaunt + 1;
    setQaunt(Math.max(k, 1));
  }
  function qanakPakasacnel() {
    let k = qaunt - 1;
    setQaunt(Math.max(k, 1));
  }
  return (
    <div>
      <div  style={{border:'1px solid grey',padding:'3px'}} >
        <button
          style={{
            width: "20px",
            height: "20px",
            border: "none",
            marginRight: "10px",
            backgroundColor: "green",
          }}
          onClick={qanakAvelacnel}
        >
          +
        </button>
        <b>{qaunt}</b>
        <button
          style={{
            width: "20px",
            height: "20px",
            border: "none",
            marginLeft: "10px",
            backgroundColor: "red",
          }}
          onClick={qanakPakasacnel}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default DexiPatQanak;
