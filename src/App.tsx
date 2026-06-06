/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetails from './pages/CourseDetails';
import CoursePlayer from './pages/dashboard/CoursePlayer';
import ChatPage from './pages/dashboard/ChatPage';
import BlogCatalog from './pages/BlogCatalog';
import BlogPost from './pages/BlogPost';
import HomeworkPage from './pages/dashboard/HomeworkPage';
import SettingsPage from './pages/dashboard/SettingsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CourseCatalog />} />
        <Route path="/catalog/:id" element={<CourseDetails />} />
        <Route path="/blog" element={<BlogCatalog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        
        {/* Dashboard Routes wrapper */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="course/:courseId" element={<CoursePlayer />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="homework" element={<HomeworkPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

