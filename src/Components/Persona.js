import React from "react";
import style from "./CSS/Persona.module.css";
import { RiDoubleQuotesL } from "react-icons/ri";
export default function () {
  return (
    <>
      <div className={style.body}>
        <div className={style.box}>
          <div className={style.flex}>
            sda
            <div className={style.col1}>
              <h3>BRAJESH SHARMA</h3>
              <span className={style.ter}>Web Developer </span>
              <span className={style.ter}>Fresher</span>
              <p>
                Web design is not just about creating pretty layouts. It's about
                understanding the marketing challenge behind your business.
              </p>
            </div>
            <div className={style.col21}>
              <h2>
                <RiDoubleQuotesL />
              </h2>

              <span>
                Life is 10% what happens to us and 90% how we react to it. Life
                is 10% what happens to us and 90% how we react to it.
              </span>
              <h2>
                <RiDoubleQuotesL />
              </h2>
            </div>
            <div className={`${style.col21}`}>
              asdds
              <div className={style.col21A}>
                <span>Demographic</span>
                <span>Age:19-25</span>
              </div>
            </div>
            <div className={style.col3}>
              <div className={style.col21A}>
                <span>Demographic</span>
                <span>Age:19-25</span>
              </div>
            </div>
            <div className={`${style.col3} ${style.mar} `}>
              <div className={style.col21A}>
                <span>Demographic</span>
                <span>Age:19-25</span>
              </div>
            </div>
            <div className={style.col4}>
              <h3>Needs</h3>
              <span>Affordable options</span>
              <span>Serene Environement</span>
              <span>Proper Acclimation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
