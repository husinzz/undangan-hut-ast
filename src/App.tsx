import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Index from "./pages";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:name" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
