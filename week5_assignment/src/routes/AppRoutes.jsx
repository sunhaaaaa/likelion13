import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import ProjectPage from "../components/project/ProjectPage";
import DiaryPage from "../components/diary/DiaryPage";
import QnAPage from "../pages/QnAPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="qna" element={<QnAPage />} />
      </Route>
    </Routes>
  );
}
