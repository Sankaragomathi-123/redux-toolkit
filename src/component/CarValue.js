import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { cars, searchTerm } }) => {
    return cars
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return (
    <h4 style={{ textAlign: "end", padding: "0 5rem 2rem 0" }}>
      totalCost : $ {totalCost}
    </h4>
  );
}
export default CarValue;
