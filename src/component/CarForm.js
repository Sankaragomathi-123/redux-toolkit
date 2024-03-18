import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from "../slices/formSlice";
import { addCar } from "../slices/carsSlice";

export default function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => ({
    name: state.form.name,
    cost: state.form.cost,
  }));
  const listCar = useSelector((state) => state.cars.cars);
  console.log(listCar, "CARD");

  const handleOnchangeName = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleOnchangeCost = (e) => {
    const parstIntValue = parseInt(e.target.value) || 0;
    dispatch(changeCost(parstIntValue));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
   
  };

  return (
    <div
      style={{
        boxShadow: "0px 3px 20px #00000021",
        borderRadius: "15px",
        padding: "2rem",
      }}>
      <p style={{ fontSize: "40px" }}>AddCar</p>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <label>Name:</label>
          <input onChange={handleOnchangeName} value={name} />

          <label>Cost:</label>
          <input
            onChange={handleOnchangeCost}
            value={cost || ""}
            type="number"
          />
          <div>
            <button
              style={{
                background: "#0F5BE1",
                border: "none",
                fontSize: "20px",
                padding: "10px",
                borderRadius: "5px",
              }}
              onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
