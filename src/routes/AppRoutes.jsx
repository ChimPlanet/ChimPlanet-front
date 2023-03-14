import { Route, Routes } from 'react-router-dom';

import {
  ARTICLE_PATH,
  BOOKMARK_PATH,
  EVENT_PATH,
  HOME_PATH,
  OFFICIAL_PATH,
  JOB_PATH,
  SEARCH_PATH,
  ADMIN_WRAPPER_PATH,
  MARKETING_PATH,
  CONTENTS_PATH,
  DASHBOARD_PATH,
} from '@/constants/route';
import Article from '@/pages/Article';
import Bookmark from '@/pages/Bookmark';
import Event from '@/pages/Event';
import Home from '@/pages/Home';

import NotFound from '@/pages/NotFound';
import Official from '@/pages/Official';
import Job from '@/pages/Job';
import Search from '@/pages/Search';
import ClientOutlet from '@/pages/ClientOutlet';
import AdminOutlet from '@/pages/AdminOutlet';
import AdminDashboard from '@/pages/AdminDashboard';
import AdminMarketing from '@/pages/AdminMarketing';
import AdminContents from '@/pages/AdminContents';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<ClientOutlet />}>
        <Route path={HOME_PATH} element={<Home />} />
        <Route path={BOOKMARK_PATH} element={<Bookmark />} />
        <Route path={ARTICLE_PATH} element={<Article />} />
        <Route path={JOB_PATH} element={<Job />} />
        <Route path={EVENT_PATH} element={<Event />} />
        <Route path={OFFICIAL_PATH} element={<Official />} />
        <Route path={SEARCH_PATH} element={<Search />} />
      </Route>
      <Route path={ADMIN_WRAPPER_PATH} element={<AdminOutlet />}>
        <Route index element={<AdminDashboard />} />
        <Route path={DASHBOARD_PATH} element={<AdminDashboard />} />
        <Route path={MARKETING_PATH} element={<AdminMarketing />} />
        <Route path={CONTENTS_PATH} element={<AdminContents />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
