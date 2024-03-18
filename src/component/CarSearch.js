import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../slices/carsSlice";

export default function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTerms = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div style={{ display: "flex", gap: "30rem", padding: "2rem" }}>
      <h3 style={{ margin: 0 }}>My Cars</h3>
      <div>
        <label>Search </label>
        <input type="text" value={searchTerm} onChange={handleSearchTerms} />
      </div>
    </div>
  );
}
