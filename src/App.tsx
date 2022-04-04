import React from "react";
import Index from "pages/Index/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}
