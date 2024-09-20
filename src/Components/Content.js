import React, { useEffect, useMemo, useReducer } from "react";
import style from "E:/react/my-app/src/Content.module.css";
import { FaTabletButton } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";
import { useContext } from "react";
import { qw } from "../store/Item.js";
export default function Content() {
  var con = useContext(qw);
  var cha = () => {
    dispatch({ type: "go" });
    con.upd("wait");
  };
  var per = (state, action) => {
    var o = state;
    if (action.type === "go") {
      o.a = 420;
      state = { ...state, o };

      return state;
    }
  };
  var [state, dispatch] = useReducer(per, { a: 567 });
  var ba = useMemo(() => {
    return "score";
  }, []);
  return (
    <>
      <div className={`${style.he} ${style.we}`}>
        hello there! {con.state[2]}
      </div>
      <button onClick={con.rw}>Tap!</button>
      <div>run {state.a}</div>
      <button onClick={cha}>click</button>
      <div>{con.state1}</div>
      <div>
        <ImAttachment style={{ color: "red" }}></ImAttachment>
      </div>
    </>
  );
}
