import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        {/* 추후 다른 페이지가 생기면 여기에 추가 가능 */}
      </Route>
    </Routes>
  );
}
