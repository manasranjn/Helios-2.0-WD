import React, { useState, useEffect } from "react";

const OurSuccess = () => {
  const data = [
    { id: 1, title: 15, subtitle: "Students" },
    { id: 2, title: 75, subtitle: "Total Success Rate" },
    { id: 3, title: 35, subtitle: "Main Questions" },
    { id: 4, title: 26, subtitle: "Chief Experts" },
    { id: 5, title: 16, subtitle: "Years of Experience" },
  ];

  const [count, setCount] = useState(data.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) =>
        prevCount.map((currentCount, index) => {
          const target = data[index].title;

          if (currentCount < target) {
            return currentCount + 1;
          }

          return currentCount;
        }),
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F9F9F9] py-10 px-5 md:px-20">
      <h3 className="text-2xl font-bold text-center">Our Success</h3>

      <p className="text-center text-gray-600 mt-2 w-1/2 mx-auto">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10 text-center">
        {data.map((item, index) => (
          <div key={item.id}>
            <h2 className="text-green-500 text-3xl lg:text-6xl">
              {count[index]}

              {index === 0 ? "K+" : ""}
              {index === 1 ? "%" : ""}
            </h2>

            <span className="text-gray-600 text-lg">{item.subtitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSuccess;
