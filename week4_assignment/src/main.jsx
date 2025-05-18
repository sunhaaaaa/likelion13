import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import MyLayout from "./layouts/MyLayout";
import MyPage from "./pages/mypage/MyPage";
import EditNamePage from "./pages/mypage/EditNamePage";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="mypage" element={<MyLayout />}>
        <Route index element={<MyPage />} />
        <Route path="edit" element={<EditNamePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);