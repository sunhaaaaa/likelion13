import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import MyLayout from "./pages/my/MyLayout";
import MyPage from "./pages/my/MyPage";
import EditNamePage from "./pages/my/EditNamePage";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="my" element={<MyLayout />}>
        <Route index element={<MyPage />} />
        <Route path="edit" element={<EditNamePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);