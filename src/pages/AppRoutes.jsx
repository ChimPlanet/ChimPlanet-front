import {
  ARTICLE_PATH,
  BOOKMARK_PATH,
  EVENT_PATH,
  HOME_PATH,
  OFFICIAL_PATH,
  JOB_PATH,
} from '@/constants/route';
import Article from '@/pages/Article';
import Bookmark from '@/pages/Bookmark';
import Event from '@/pages/Event';
import Home from '@/pages/Home';
import DetailModal from '../components/PostDetail';
import NotFound from '@/pages/NotFound';
import Official from '@/pages/Official';
import Job from '@/pages/Job';
import { Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/:id" element={<DetailModal />} />

      <Route path={HOME_PATH} element={<Home />} />
      <Route path={BOOKMARK_PATH} element={<Bookmark />} />
      <Route path={ARTICLE_PATH} element={<Article />} />
      <Route path={JOB_PATH} element={<Job />} />
      <Route path={EVENT_PATH} element={<Event />} />
      <Route path={OFFICIAL_PATH} element={<Official />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
