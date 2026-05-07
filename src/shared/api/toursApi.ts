import type { Tour } from "./types";

const tours: Tour[] = [
  { id: 1, title: "Карпати", img: "green", price: 50 },
  { id: 2, title: "Єгипет", img: "blue", price: 100 },
  { id: 3, title: "Карпати", img: "red", price: 120 },
  { id: 4, title: "Єгипет", img: "gray", price: 140 },
  { id: 5, title: "Єгипет", img: "yellow", price: 160 },
  { id: 6, title: "Карпати", img: "green", price: 100 },
  { id: 7, title: "Єгипет", img: "blue", price: 110 },
  { id: 8, title: "Карпати", img: "red", price: 10 },
  { id: 9, title: "Єгипет", img: "gray", price: 110 },
  { id: 10, title: "Єгипет", img: "yellow", price: 60 },
];
export const getTours = async () => {
  return tours;
};
