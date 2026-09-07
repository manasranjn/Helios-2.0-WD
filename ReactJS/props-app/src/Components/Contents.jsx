import React from "react";
import Card from "./Card";

const Contents = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-20 py-5 bg-slate-400">
      <Card
        title="Food Delivery"
        subTitle="From Best Resturants"
        des="Delicious food at your doorstep"
        rating={4.5}
      />
      <Card
        title="Instant Delivery"
        subTitle="Fast & Reliable"
        des="Groceries at your doorstep"
        rating={4.2}
      />
      <Card
        title="Dine in"
        subTitle="Enjoy at Our Restaurant"
        des="Delicious food at our restaurant"
        rating={4.4}
      />
    </div>
  );
};

export default Contents;
