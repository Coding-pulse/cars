import React, { useEffect, useRef } from "react";
import style from "./CSS/Home.module.css";
import { BsTools } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Home() {
  var r = useRef();
  var ent = () => {
    r.current.classList.add(style.trans);
  };
  var lea = () => {
    r.current.classList.remove(style.trans);
  };
  useEffect(() => {
    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.innerText == "JADE & ANDY") {
            if (!entry.target.classList.contains(`${style.nleft}`))
              entry.target.classList.add(`${style.nleft}`);
          }
          if (entry.target.innerText == "VINTAGE CAR SPECIALIST") {
            if (!entry.target.classList.contains(`${style.nright}`))
              entry.target.classList.add(`${style.nright}`);
          }
        }
      });
    });
    var ele = document.querySelectorAll(`.${style.name}`);

    ele.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <>
      <div className={style.box}>
        <div className={style.top1}>
          <h1 ref={r} onMouseEnter={ent} onMouseLeave={lea}>
            <BsTools />
          </h1>
          <h1 className={style.name}>JADE & ANDY</h1>
          <span className={style.name}>VINTAGE CAR SPECIALIST</span>
        </div>
        <div className={style.top2}>
          <em>
            <FaFacebook />
          </em>

          <em>
            <FaPinterestP />
          </em>
          <em>
            <FaInstagramSquare />
          </em>
        </div>
      </div>
    </>
  );
}
