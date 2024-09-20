import React, { useEffect } from "react";
import style from "./CSS/Work.module.css";
import Cards from "./Cards";
import pc_1 from "../pictures/engine.jpg";
import pc_2 from "../pictures/accessories.jpg";
import pc_3 from "../pictures/interior.jpg";
import pc_4 from "../pictures/lights.jpg";
import pc_5 from "../pictures/paint.jpg";
import pc_6 from "../pictures/tires.jpg";
export default function Work() {
  var obj = [
    { type: "engine", pic: pc_1 },
    { type: "accessories", pic: pc_2 },
    { type: "interior", pic: pc_3 },
    { type: "lights", pic: pc_4 },
    { type: "paints", pic: pc_5 },
    { type: "tyres", pic: pc_6 },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains(`${style.tra}`));
          entry.target.classList.add(`${style.tra}`);
        }
      });
    });
    const ele = document.querySelectorAll(`.${style.top2}`);
    ele.forEach((item) => {
      observer.observe(item);
    });
  }, []);

  return (
    <>
      <div className={style.back}>
        <aside id={style.a}> </aside>
        <aside id={style.b}> </aside>
        <aside id={style.c}> </aside>
        <aside id={style.d}> </aside>
        <div className={style.box}>
          <div className={style.top1}>
            <h1>OUR WORK</h1>
            <span>A collection of cars we've renovated with passion</span>
          </div>
          <div className={style.top2}>
            {obj.map((data) => {
              return <Cards data={data}></Cards>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
