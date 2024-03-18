import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      const { name, cost } = action.payload;
      state.cars = [...state.cars, { name, cost, id: Math.random() }];
    },
    removeCar(state, action) {
      const updateCar = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updateCar;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
