import React from "react";
import style from "./CSS/Finds.module.css";
import red from "../pictures/red_car1.png";
export default function Finds() {
  return (
    <div className={style.back}>
      <h1 className={style.top1}>Find US</h1>
      <div className={style.box}>
        {/*  <div className={style.top1}>
          <img src={red} />

        </div>
        */}
        <div className={style.col1}>
          <span>500 Terry Francine Street </span>
          <span>San Francisco, CA 94158</span>
          <span>info@myemailid.com</span>
          <span>Tel: 123-456-7890</span>
          <p>OPENING HOURS:</p>
          <span className={style.re}>
            <em>Mon - Fri: 7am - 10pm</em>
            <em>Saturday: 8am - 10pm</em>
            <em>Sunday: 8am - 11pm</em>
          </span>
        </div>

        <div className={style.col2}>
          <form>
            <label>First Name</label>
            <input type="text" />
            <label>First Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
