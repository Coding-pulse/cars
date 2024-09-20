import React from "react";
import style from "./CSS/Cards.module.css";
import backi from "../pictures/engine.jpg";
import { LiaShareSolid } from "react-icons/lia";
import { SlLike } from "react-icons/sl";

export default function Cards(props) {
  return (
    <div className={style.box}>
      <img src={props.data.pic} />
      <div className={style.ba}>
        <span>{props.data.type}</span>
        <span>Have a look at our {props.data.type}.Walkthrough it. </span>
        <span>
          <LiaShareSolid />
        </span>
        <span>
          <SlLike />
        </span>
      </div>
    </div>
  );
}
