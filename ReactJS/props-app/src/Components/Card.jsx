import React from "react";

const Card = ({ title, subTitle, des, rating }) => {
  //   console.log(x);

  //   let { title, subTitle, des, rating } = x;

  return (
    <div className="bg-slate-100 p-5 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <h4 className="text-2xl">{subTitle}</h4>
      <p>{des}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default Card;
