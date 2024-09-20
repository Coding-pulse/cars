import React, { useEffect, useRef } from "react";
import style from "./CSS/Start.module.css";

export default function Start() {
  useEffect(() => {
    var text = ["Hello", "Welcome", "Brajesh Sharma"];
    var count = 0;
    const observer = new IntersectionObserver((entries) => {
      var entry = entries[0];

      var qw = window.setInterval(() => {
        if (count < 3) {
          if (entry.isIntersecting) {
            if (!entry.target.classList.contains(`${style.ani}`))
              entry.target.innerText = text[count];
            entry.target.classList.add(`${style.ani}`);
            window.setTimeout(
              () => {
                count++;

                entry.target.classList.remove(`${style.ani}`);
              },

              2500
            );
          }
        } else {
          console.log("end");
          window.clearInterval(qw);
        }
      }, 3800);
    });
    var cl = document.querySelector(`.${style.write}`);
    observer.observe(cl);
  }, []);
  return (
    <>
      <div className={style.box}>
        <div className={`${style.write}`}>wad</div>
      </div>
    </>
  );
}
