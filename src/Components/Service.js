import React, { useEffect } from "react";
import style from "./CSS/Service.module.css";
import { MdCarRepair } from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa6";
import { MdLocalCarWash } from "react-icons/md";

export default function Service() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains(`${style.run}`)) {
            entry.target.classList.add(`${style.run}`);
          }
        }
      });
    });
    const ele = document.querySelectorAll(`.${style.col}`);
    ele.forEach((item) => {
      observer.observe(item);
    });
  }, []);
  return (
    <>
      <div className={style.box}>
        <div className={style.top1}>
          <h1>Services</h1>
        </div>
        <div className={style.top2}>
          <div class={style.col}>
            <h1>
              <MdCarRepair />
            </h1>

            <h1>Repairs</h1>
            <div className={style.er}>
              <span>General Repairs,</span>
              <span>Specialist Repairs</span>
              <span>& Vintage Parts</span>
            </div>
          </div>
          <div class={style.col}>
            <h1>
              <FaPaintRoller />
            </h1>

            <h1>Paint</h1>
            <div className={style.er}>
              <span>A Range of Fabrics,</span>
              <span>Including Vintage Leathers,</span>
              <span>& Wide Variety of Colors</span>
            </div>
          </div>

          <div class={style.col}>
            <h1>
              <MdLocalCarWash />
            </h1>

            <h1>Wash</h1>
            <div className={style.er}>
              <span>General Repairs,</span>
              <span>Specialist Repairs</span>
              <span>& Vintage Parts</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
