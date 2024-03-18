import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../slices/carsSlice";

export default function CarList() {
  const dispatch = useDispatch();
  const { carsList, name } = useSelector(
    ({ form, cars: { cars, searchTerm } }) => {
      const filteredData = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        carsList: filteredData,
        name: form.name,
      };
    }
  );
  const removeCarsList = (car) => {
    dispatch(removeCar(car));
  };

  const renderedList = carsList.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    console.log(bold, "DDD");
    return (
      <div key={car.id}>
        <div
          style={{
            display: "flex",
            gap: "30rem",
            padding: "2rem",
            borderRadius: "15px",
          }}>
          <p style={{ margin: "0", fontWeight: bold && "bolder" }}>
            {car.name} - $ {car.cost}
          </p>
          <button
            onClick={() => removeCarsList(car.id)}
            style={{
              background: "#EA5757",
              border: 0,
              fontSize: "18px",
              padding: "10px",
              borderRadius: "5px",
            }}>
            Delete
          </button>
        </div>
      </div>
    );
  });
  return <div>{renderedList}</div>;
}
