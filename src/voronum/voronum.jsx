import React, { useEffect, useState } from "react";
import "./voronum.css";
import { json } from "react-router";
import DexiPatQanak from "../DexiPatQanak/DexiPatQanak";

const Voronum = () => {
  if (localStorage.getItem("zambjuxLocal") == null) {
    localStorage.setItem("zambjuxLocal", JSON.stringify([]));
  }
  
 
  const [value, setValue] = useState("а");
  const [ardjunq, setArdjunq] = useState([]);
  const [localzambjux, setZambjux] = useState(
    JSON.parse(localStorage.getItem("zambjuxLocal"))
  );
  const [zambjuxdiv, setZambjuxdiv] = useState(false);
  const [dexqanak, setDexqanak] = useState(1);
  const [gnmanArjeq,setGnmanArjeq] =useState(0)
  const [x,setX] = useState(0)

  const baza = [
    { id: 1, name: "аналгин", gin: 2500, arka: false ,qanak:1},
    { id: 2, name: "димидрол", gin: 500, arka: true ,qanak:1},
    { id: 3, name: "аспирин", gin: 100, arka: true ,qanak:1},
    { id: 4, name: "пенталгин", gin: 3000, arka: true,qanak:1 },
    { id: 5, name: "спирт 250мл", gin: 600, arka: false,qanak:1 },
    { id: 6, name: "вата", gin: 200, arka: true,qanak:1 },
    { id: 7, name: "спазмагон", gin: 900, arka: true,qanak:1 },
    { id: 8, name: "натри хлор", gin: 3000, arka: true ,qanak:1},
  ];
  
 function gggg(){
 
  let k = x+1
  setX(k)
   
 }
  useEffect(()=>{
    let k = 0
   
    let zambjuxLocal = JSON.parse(localStorage.getItem("zambjuxLocal"));
    setZambjux(zambjuxLocal)
    for(let m of localzambjux){
      k+=m.gin*m.qanak
    }
    setGnmanArjeq(k)
    
  
  },[x,zambjuxdiv,value,ardjunq,avelacnelZ,gggg,jnjelZ,setZambjux,localzambjux, setZambjux,DexiPatQanak])

  useEffect(() => {
    if (value.length > 0) {
      let pat = [];
      setArdjunq([]);
      baza.map((elem) => {
        if (elem.name.includes(value.toLocaleLowerCase().replaceAll(" ", ""))) {
          pat.push(elem);
        }
      });
      setArdjunq(pat);
    }
  }, []);

  function f() {
    setValue("");
  }
  function avelacnelZ(e) {
    let k = e.target.value;
    let s = ardjunq.find((e) => e.id == k);
    s.qanak = 1
    

    let zambjuxLocal = JSON.parse(localStorage.getItem("zambjuxLocal"));
    let stugum = zambjuxLocal.filter((e) => e.id === s.id);

    if (stugum.length === 0) {
      localStorage.setItem(
        "zambjuxLocal",
        JSON.stringify([...zambjuxLocal, s])
      );
      setZambjux([...zambjuxLocal, s]);
    }
  }
  function jnjelZ(e) {
    let k = e.target.value;

    let s = localzambjux.filter((e) => e.id != k);
    localStorage.setItem("zambjuxLocal", JSON.stringify(s));
    setZambjux(s);
  }

  useEffect(() => {
    setZambjux(localzambjux);
  }, [localzambjux]);
 

  return (
    <div>
      <div className="voronum">
        <div className="vor_zam">
          <i className="teg_i">Որոնումը իրականացնել ռուսերեն</i>
          <div
            className="zambjux_div"
            onClick={() => setZambjuxdiv(!zambjuxdiv)}
          >
            <svg
              id="zambjux"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div className="zambjuxi_qanak">
              <small>{localzambjux.length}</small>
            </div>
          </div>
        </div>
        <br />

        {zambjuxdiv && localzambjux.length != 0 ? (
          <div className="zambjuxmej_div">
            {localzambjux.map((elem) => (
              <div className="voronman_ardjunq1" onClick={gggg} key={elem.id}>
                <div>
                  <b>{elem.name}</b>
                  <br />
                  <span>
                    արժեքը-<b style={{ color: "red" }}>{elem.gin}</b> դրամ
                  </span>
                  <br />
                </div>
                <DexiPatQanak  value = {elem.id} />

                <button
                  className="zabjuxichanelubut"
                  value={elem.id}
                  onClick={jnjelZ}
                >
                  x
                </button>
              </div>
            ))}
            <b>արժեքը -{gnmanArjeq} </b>
          </div>
        ) : (
          ""
        )}

        <br />
        <div className="voronman_div">
          <input
            type="text"
            value={value}
            onChange={(event) => {
              if (
                "abcdefghijklmnopqrstuvwxyz".includes(
                  event.target.value.toLocaleLowerCase()
                ) ||
                "աբգդեզէթժիլխծկհձղճմյնոչպջռսվտրյւքօֆ".includes(
                  event.target.value.toLocaleLowerCase()
                )
              ) {
                return alert("Մութքագրեք ռուսերեն տառեր");
              }

              setValue(event.target.value);
            }}
            className="voronman_input"
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                return f();
              }
            }}
          />
          <div className="search" onClick={f}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="red"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="voronman_ej">
        {ardjunq.length === 0 ? (
          ""
        ) : (
          <div
            className="jnjel_div"
            onClick={() => {
              setArdjunq([]);
            }}
          >
            <svg
              id="jnjel"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>
          </div>
        )}
      </div>
      <div className="div_scrol">
        {ardjunq.map((elem) => (
          <div className="voronman_ardjunq" key={elem.id} Mkey={elem.id}>
            <div>
              <b>{elem.name}</b>
              <br />
              <span>
                արժեքը-<b style={{ color: "red" }}>{elem.gin}</b> դրամ
              </span>
              <span>
                {" "}
                այս պահին <b>{elem.arka ? "առկա է" : "առկա չէ"}</b>{" "}
              </span>
              <br />
            </div>
            {elem.arka ? (
              <button
                value={elem.id}
                onClick={avelacnelZ}
                className="avelacnel_zanbjuxum"
              >
                +
              </button>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Voronum;
