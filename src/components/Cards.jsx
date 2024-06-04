import React from "react";
import { RxCross1 } from "react-icons/rx";

const Cards = ({ data }) => {
//   console.log(data);
function deleteCard(){

}
  return (
 <div className="w-80 p-5 bg-slate-400 rounded-sm">
        <button onClick={deleteCard}><RxCross1 className="text-white absolute" /></button>
       <h1 className="font-bold">{data.title}</h1>
        <p className="text-xs">{data.body}</p>
       </div>
  );
};

export default Cards;
