import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../project/ProjectPage";
import DiaryPage from "../diary/DiaryPage";
import QnAPage from "../pages/QnAPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project" element={<ProjectPage />} />
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/qna" element={<QnAPage />} />
    </Routes>
  );
}
