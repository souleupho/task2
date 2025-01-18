import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import DetailCard from "./components/newdetailCard/detailCard";

const cards_info = [
  {
    image:
      "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "title 1",
    subTitle: "sub_title",
    price: 1,
    id : 12,
  },
  {
    image:
      "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "title 2",
    subTitle: "sub_title",
    price: 1,
    id : 13,
  },
  {
    image:
      "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "title 3",
    subTitle: "sub_title",
    price: 1,
    id : 14,
  },
  {
    image:
      "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "title 4",
    subTitle: "sub_title",
    price: 1,
    id : 15,
  },
  {
    image:
      "https://images.unsplash.com/photo-1524095731963-b4e38d1b3329?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "title 5",
    subTitle: "sub_title",
    price: 1,
    id : 16,
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/collection/:id" element={<DetailCard products={cards_info}/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
